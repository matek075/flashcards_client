import StartingPage from '../../pages/startingPage'
import LoginPage from '../../pages/loginPage';
import CodePage from '../../pages/codePage';
import RegisterPage from '../../pages/registerPage';

import HomePage from '../../pages/homePage/index';
import OptionPage from '../../pages/optionPage';
import ProfilePage from '../../pages/profilePage';
import FlashCardsSectionPage from '../../pages/learnPage'
import QuizSectionPage from '../../pages/quizSectionPage'

import AdminPage from '../../pages/adminPanelPage';

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
