import Home from '@/pages/Home';
import Follwing from '@/pages/Following';
import Profile from '@/pages/Profile';
import Upload from '@/pages/Upload';
import Search from '@/pages/Search';

export const publicRoutes = [
    { path: '/', component: Home },
    { path: '/follwing', component: Follwing },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: null },
    { path: '/search', component: Search, layout:null },
];

export const privateRoutes = [];
