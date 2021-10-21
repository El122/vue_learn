import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import Home from "./pages/Home";
import About from "./pages/About";
import Catalog from "./pages/Catalog";

Vue.use(VueRouter);
Vue.config.productionTip = false;
const routes = [
	{ path: "/", components: { default: Home, plus: About } },
	{ path: "/about/:who", component: About },
	{ path: "/catalog", component: Catalog },
];
const router = new VueRouter({
	mode: "history",
	routes,
});

new Vue({
	render: (h) => h(App),
	router,
}).$mount("#app");
