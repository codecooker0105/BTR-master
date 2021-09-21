import Login from './pages/login';
import Selfie from './pages/selfie';
import Avatar from './pages/avatar';
import Shop from './pages/shop';
import Detail from './pages/detail';
import Runway from './pages/runway';

export const Routes = [
	{ path: '/', exact: true, name: 'Login', component: Login },
	{ path: '/selfie', exact: true, name: 'Selfie', component: Selfie },
	{ path: '/avatar', exact: true, name: 'Avatar', component: Avatar },
	{ path: '/shop', exact: true, name: 'Shop', component: Shop },
	{ path: '/detail/:id', exact: true, name: 'Detail', component: Detail },
	{ path: '/runway/:id', name: 'Runway', component: Runway },
];