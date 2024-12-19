import express from "express";
import cors from "cors";
import { processUserQuery } from "./dataBot.js";
const app = express();
app.use(express.json());
app.use(cors());
app.post("/api/chat-with-data", async (req, res) => {
    const { userQuery } = req.body;
    try {
        const { sql, summary, data } = await processUserQuery(userQuery);
        res.json({ sql, summary, data });
    }
    catch (err) {
        // Assert err is of type Error
        const error = err;
        res.status(500).json({ error: error.message });
    }
});
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
