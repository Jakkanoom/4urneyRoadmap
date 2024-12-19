import { createRouter, createWebHistory } from "vue-router";
import DigitalTwin from "@/components/DigitalTwin.vue";
import CreateBot from "@/components/CreateBot.vue";
import ChatWithData from "@/components/ChatWithData.vue";
import KnowledgeBase from "@/components/KnowledgeBase.vue";
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: "/", name: "Home", component: DigitalTwin },
        { path: "/DigitalTwin", name: "DigitalTwin", component: DigitalTwin },
        { path: "/CreateBot", name: "CreateBot", component: CreateBot },
        { path: "/chat-with-data", name: "ChatWithData", component: ChatWithData },
        { path: "/km-upload", name: "KnowledgeBase", component: KnowledgeBase }
    ],
});
export default router;
