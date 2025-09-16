import { createRouter, createWebHistory } from 'vue-router';
import Home from '../Components/Home.vue';
import About from '../Components/About.vue';
import Projects from '../Components/Projects.vue';
import CV from '../Components/CV.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/projects', component: Projects },
  { path: '/cv', component: CV },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
