import StartingPage from '../../pages/starting_page'
import LoginPage from '../../pages/login_page';
import CodePage from '../../pages/code_page';
import RegisterPage from '../../pages/register_page';

import HomePage from '../../pages/homePage/index';
import OptionPage from '../../pages/option_page';
import ProfilePage from '../../pages/profile_page';
import FlashCardsSectionPage from '../../pages/learnPage'
import QuizSectionPage from '../../pages/quizSectionPage'

import AdminPage from '../../pages/adminPanel_page';

export const RoutesData = {
  publicRoute: [
    { path: '/', component: StartingPage, exact:true },
    { path: '/login', component: LoginPage },
    { path: '/code', component: CodePage },
    { path: '/register', component: RegisterPage },
  ],
  privateUserRoute: [
    { path: '/home', component: HomePage },
    { path: '/option', component: OptionPage },
    { path: '/profile', component: ProfilePage },
    { path: '/learn/', component: FlashCardsSectionPage, exact:true},
    { path: '/quiz/', component: QuizSectionPage, exact:true}
  ],
  privateAdminRoute: [
    { path: '/adminPanel', component: AdminPage }
  ],
};
