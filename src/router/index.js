import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
    {
		path: '/',
		name: 'Home',
		component: () => import(/* webpackChunkName: "LoginLayout" */ '../views/Home.vue'),
	},
	{
		path: '/actualites',
		name: 'Actualites',
		component: () => import(/* webpackChunkName: "LoginLayout" */ '../views/Actualites.vue'),
	},
	{
		path: '/adhesion',
		name: 'Adhesion',
		component: () => import(/* webpackChunkName: "LoginLayout" */ '../views/Adhesion.vue'),
	},
	{
		path: '/priorites',
		name: 'Priorites',
		component: () => import(/* webpackChunkName: "LoginLayout" */ '../views/Priorites.vue'),
	},
	{
		path: '/donation',
		name: 'Donation',
		component: () => import(/* webpackChunkName: "LoginLayout" */ '../views/Donation.vue'),
	}
];

const router = new VueRouter({
	mode: 'history',
	routes
})

export default router