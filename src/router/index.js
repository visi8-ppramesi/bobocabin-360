import Vue from 'vue';
import Router from 'vue-router';
import BigRoom from '../pages/BigRoom'
import BigBed from '../pages/BigBed'
import BigBathroom from '../pages/BigBathroom'

import Exterior from '../pages/Exterior'

import ExternalBathroom from '../pages/ExternalBathroom'
import Bathroom from '../pages/Bathroom'

import FrontOffice from '../pages/FrontOffice'

import SmallRoom from '../pages/SmallRoom'
import SmallBed from '../pages/SmallBed'

Vue.use(Router);

const routes = [
    {
        path: '',
        component: Exterior,
        name: 'ExteriorPage',
        meta: { title: 'Exterior Page', icon: 'dashboard', noCache: true },
    },
    {
        path: '/externalbathroom',
        component: ExternalBathroom,
        name: 'ExternalBathroomPage',
        meta: { title: 'External Bathroom Page', icon: 'dashboard', noCache: true },
    },
    {
        path: '/bathroom',
        component: Bathroom,
        name: 'BathroomPage',
        meta: { title: 'Bathroom Page', icon: 'dashboard', noCache: true },
    },
    {
        path: '/frontoffice',
        component: FrontOffice,
        name: 'FrontOfficePage',
        meta: { title: 'Front Office Page', icon: 'dashboard', noCache: true },
    },
    {
        path: '/smallroom',
        component: SmallRoom,
        name: 'SmallRoomPage',
        meta: { title: 'Small Room Page', icon: 'dashboard', noCache: true },
    },
    {
        path: '/smallbed',
        component: SmallBed,
        name: 'SmallBedPage',
        meta: { title: 'Small Bed Page', icon: 'dashboard', noCache: true },
    },
    {
        path: '/bigroom',
        component: BigRoom,
        name: 'BigRoomPage',
        meta: { title: 'Big Room Page', icon: 'dashboard', noCache: true },
    },
    {
        path: '/bigbed',
        component: BigBed,
        name: 'BigBedPage',
        meta: { title: 'Big Bed Page', icon: 'dashboard', noCache: true },
    },
    {
        path: '/bigtoilet',
        component: BigBathroom,
        name: 'BigBathroomPage',
        meta: { title: 'Big Bathroom Page', icon: 'dashboard', noCache: true },
    },
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: routes,
});

const router = createRouter();

export default router