<template>
    <header class="header">
      <div class="dynamic-island">
        <div class="left-section">
          <button class="burger-menu" @click="toggleMenu">☰</button>
          <div class="logo-wrapper">
            <img src="/src/assets/logo.png" alt="Logo" class="logo-image" />
            <span class="logo-text">4urney</span>
          </div>
        </div>
        <div class="right-section">
          <div class="user-details">
            <span class="login-text">Login as </span>
            <span class="user-email">{{ user.name }}</span>
          </div>
          <img :src="user.image" alt="User" class="user-image" />
        </div>
      </div>
    </header>
  </template>

<script lang="ts">
import userImage from '@/assets/user-image.png'; // Import user image

export default {
  data() {
    return {
      user: {
        name: "jakapan@4plus.co.th", // User's email
        image: userImage, // User profile picture
      },
    };
  },
  methods: {
    toggleMenu() {
      console.log("Menu toggled!");
    },
  },
};
</script>

<style scoped>
.header {
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.dynamic-island {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 10000px; /* Adjust width to fit content */
  height: 50px;
  background: linear-gradient(to right, #ffffff, #f0f0f5);
  border-radius: 25px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 0 1rem;
  position: relative;
}

/* Left Section: Burger Menu and Logo */
.left-section {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.burger-menu {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  color: #000000;
}

.logo-wrapper {
  display: flex;
  align-items: center;
  gap: 0.3rem; /* Space between logo and text */
}

.logo-image {
  width: 10%; /* Logo size */
  height: 100%;
  object-fit: contain;
}

.logo-text {
  font-size: 1.5em;
  font-weight: bold;
  color: #000000;
}

.logo {
  font-weight: bold;
  font-size: 1rem;
  color: #1a24e3;
  white-space: nowrap;
}

/* Right Section: Login Details */
.right-section {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.user-details {
  text-align: right;
}

.login-text {
  font-size: 1rem;
  color: #000000;
  font-weight: bold;
}

.user-email {
  font-size: 1;
  color: #ff0077;
}

/* User Profile Picture */
.user-image {
  width: 30px; /* Profile picture size */
  height: 30px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid #ddd;
}
</style>
