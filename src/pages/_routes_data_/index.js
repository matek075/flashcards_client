import HomePage from '../home_page/index';
import OptionPage from '../option_page/';
import ProfilePage from '../profile_page/';
import RegisterPage from '../register_page/';
import LoginPage from '../login_page/';
import CodePage from '../code_page/';
import AdminPage from '../adminPanel_page';

export const RoutesData = {
  publicRoute: [
    { path: '/login', component: LoginPage },
    { path: '/code', component: CodePage },
    { path: '/register', component: RegisterPage },
  ],
  privateUserRoute: [
    { path: '/home', component: HomePage },
    { path: '/option', component: OptionPage },
    { path: '/profile', component: ProfilePage },
  ],
  privateAdminRoute: [{ path: '/adminPanel', component: AdminPage }],
};
