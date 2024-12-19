import { ChatOpenAI } from "@langchain/openai";
// import { HumanMessage } from "langchain/schema";
import pkg from "pg";
const { Pool } = pkg;
const pool = new Pool({
    user: "postgres",
    host: "54.251.172.6",
    database: "jiatai_poc",
    password: "password",
    port: 25432,
});
const model = new ChatOpenAI({
    // apiKey: process.env.OPENAI_API_KEY,
    apiKey: process.env.OPENAI_API_KEY,
    modelName: "gpt-4o",
});
export async function processUserQuery(userQuery) {
    // Step 1: Generate SQL Query
    const sqlPrompt = `
    Convert the following business question into an SQL query for PostgreSQL:
    Question: "${userQuery}"
    SQL:
    `;
    const sqlResponse = await model.invoke([sqlPrompt]);
    // Ensure `generatedSQL` is a string
    // const generatedSQL = sqlResponse.content; // `content` should contain the SQL string
    const generatedSQL = "select year_number ,sum(total_profit) as total_profit from public.f_transaction group by year_number";
    if (typeof generatedSQL !== "string") {
        throw new Error("Generated SQL must be a string.");
    }
    try {
        // Step 2: Execute the SQL query
        const result = await pool.query(generatedSQL); // `generatedSQL` is now guaranteed to be a string
        // Step 3: Summarize the Results
        const summaryPrompt = `
      Summarize the following query results in simple text:
      ${JSON.stringify(result.rows)}
      `;
        const summaryResponse = await model.invoke([summaryPrompt]);
        const summary = summaryResponse.content;
        return { sql: generatedSQL, summary, data: result.rows };
    }
    catch (error) {
        console.error(sqlResponse.content, generatedSQL, "Error processing queryyyyyyyyyy:", error);
        throw new Error("Failed to process the query.");
    }
}
