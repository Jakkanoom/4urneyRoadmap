<template>
  <section class="digital-twin">
    <h2>My Digital Twin</h2>
    <div class="card-container">
      <div
        v-for="bot in bots"
        :key="bot.name"
        class="card"
      >
        <img :src="bot.image" alt="Bot" class="bot-image" />
        <h2>{{ bot.name }}</h2>
        <p class="role">{{ bot.role }}</p>
        <div class="tags">
          <span v-for="tag in bot.tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
      </div>
      <div class="add-new">
        <span>+ Create New Digital Twin</span>
      </div>
    </div>
  </section>
</template>




<script lang="ts">
import starlight from '@/assets/starlight.png'; // Import the image directly
import twilight from '@/assets/twilight.png'; // Import the image directly
import pinky from '@/assets/pinky.png'; // Import the image directly

export default {
  data() {
    return {
      bots: [
        {
          name: "Twilight",
          role: "Agriculture Expert",
          tags: ["Fertilizer", "Drone", "Crop Disease"],
          image: twilight, // Replace with actual bot image
        },
        {
          name: "Starlight",
          role: "Data Analyst",
          tags: ["Visualization", "Data Summarization"],
          image: starlight, // Replace with actual bot image
        },
        {
          name: "Pinky",
          role: "Sales Person",
          tags: ["Product Knowledge", "Sales Expertise"],
          image: pinky, // Replace with actual bot image
        },
      ],
    };
  },
};
</script>

<style scoped>
.digital-twin {
  text-align: center;
  padding: 0.5rem;
}

.card-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.card,
.add-new {
  background-color: #ffffff;
  border: 1.5 px dashed #ccc;
  padding: 1rem;
  width: 350px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.bot-image {
  width: 50%;
  border-radius: 15px;
}

.role {
  font-weight: bold;
  color: #646cff;
}

.tags {
  margin-top: 1rem;
}

.tag {
  background-color:rgb(250, 201, 231);
  border-radius: 15px;
  padding: 0.3rem 0.6rem;
  font-size: 0.8rem;
  margin: 0.2rem;
  display: inline-block;
}

.add-new {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #535bf2;
  font-weight: bold;
}
.add-new:hover {
  background-color: #d2deff;
}
</style>