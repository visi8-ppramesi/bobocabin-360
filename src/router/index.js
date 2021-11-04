import Vue from 'vue';
import Router from 'vue-router';
import Landing from '../pages/Landing'
import Bed from '../pages/Bed'
import Toilet from '../pages/Toilet'

Vue.use(Router);

const routes = [
    {
        path: '',
        component: Landing,
        name: 'LandingPage',
        meta: { title: 'Landing Page', icon: 'dashboard', noCache: true },
    },
    {
        path: '/toilet',
        component: Toilet,
        name: 'ToiletPage',
        meta: { title: 'Toilet Page', icon: 'dashboard', noCache: true },
    },
    {
        path: '/bed',
        component: Bed,
        name: 'BedPage',
        meta: { title: 'Bed Page', icon: 'dashboard', noCache: true },
    },
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: routes,
});

const router = createRouter();

export default router