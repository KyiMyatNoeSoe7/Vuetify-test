import Home from './components/Home.vue';
import About from './components/About.vue';
import Menu from './components/Menu.vue';
import Signin from './components/Signin.vue';
import Join from './components/Join.vue';


export const routes = [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            component: About
        },
        {
            path: '/menu',
            name: 'menu',
            component: Menu
        },
        {
            path: '/sign-in',
            name: 'signin',
            component: Signin
        },
        {
            path: '/join',
            name: 'join',
            component: Join
        }
];