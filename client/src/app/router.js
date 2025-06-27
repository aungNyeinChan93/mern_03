import { createBrowserRouter } from 'react-router'
import MasterLayout from './layouts/MasterLayout';
import HomePage from './pages/Home/HomePage';
import ContactPage from './pages/Contact/ContactPage';
import AuthLayout from './layouts/AuthLayout';
import RegisterPage from './pages/Auth/RegisterPage';
import LoginPage from './pages/Auth/LoginPage';


const router = createBrowserRouter([
    {
        path: '/', Component: MasterLayout, children: [
            { index: true, Component: HomePage },
            { path: 'contact', Component: ContactPage }
        ]
    },
    {
        path: '/auth', Component: AuthLayout, children: [
            { path: 'register', Component: RegisterPage },
            { path: 'login', Component: LoginPage },
        ]
    }

]);

export default router;