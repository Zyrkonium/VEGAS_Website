import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/about",
		name: "About",
		component: () => import(/* webpackChunkName: "about" */ "../views/About.vue"),
	},
	{
		path: "/news",
		name: "News",
		component: () => import(/* webpackChunkName: "news" */ "../views/News.vue"),
	},
	{
		path: "/shop",
		name: "Shop",
		component: () => import(/* webpackChunkName: "shop" */ "../views/Shop.vue"),
		// children: [
		// 	{
		// 		path: "accounts",
		// 		component: () =>
		// 			import(/* webpackChunkName: "shopAccounts" */ "../shopViews/Accounts.vue"),
		// 	},
		// 	{
		// 		path: "softwares",
		// 		component: () =>
		// 			import(/* webpackChunkName: "shopSoftwares" */ "../shopViews/Softwares.vue"),
		// 	},
		// ],
	},
	{
		path: "/shop/:categ",
		name: "ShopCateg",
		component: () => import(/* webpackChunkName: "shop" */ "../views/Shop.vue"),
	},
];

const router = new VueRouter({
	routes,
});

export default router;
