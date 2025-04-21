import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '../pages/LoginPage.vue'; // Путь к вашему компоненту LoginPage.vue
import RegistrationPage from '../pages/Registration.vue'; // Путь к вашему компоненту Registration.vue
import MainPage from '../pages/MainPage.vue'; // Путь к вашему компоненту MainPage.vue
import AccountPage from '../pages/AccountPage.vue'; // Путь к вашему компоненту AccountPage.vue
import ExercisesPage from '../pages/ExercisesPage.vue'; // Путь к вашему компоненту ExercisesPage.vue
import StatisticsPage from '../pages/StatisticsPage.vue'; // Путь к вашему компоненту StatisticsPage.vue
import HelpPage from '../pages/HelpPage.vue'; // Путь к вашему компоненту HelpPage.vue
import NotFoundPage from '../pages/NotFoundPage.vue'; // Путь к вашему компоненту NotFoundPage.vue

const routes = [
    {
        path: '/',
        name: 'login', // имя маршрута для страницы входа
        component: LoginPage, // компонент страницы входа
    },
    {
        path: '/registration',
        name: 'registration', // имя маршрута для страницы входа
        component: RegistrationPage, // компонент страницы входа
    },
    {
      path: '/main',
      name: 'main-page',
      component: MainPage,
    },
    {
        path: '/account',
        name: 'account-page',
        component: AccountPage, // компонент страницы аккаунта
    },
    {
        path: '/exercises',
        name: 'exercises-page',
        component: ExercisesPage, // компонент страницы упражнений
    },
    {
        path: '/statistics',
        name: 'statistics-page',
        component: StatisticsPage, // компонент страницы статистики
    },
    {
        path: '/help',
        name: 'help-page',
        component: HelpPage, // компонент страницы справки
    },
    {
        path: '/:pathMatch(.*)*',
        component: NotFoundPage, // обработка несуществующих маршрутов
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
