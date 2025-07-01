import { createBrowserRouter } from 'react-router'
import MasterLayout from './layouts/MasterLayout';
import HomePage from './pages/Home/HomePage';
import ContactPage from './pages/Contact/ContactPage';
import AuthLayout from './layouts/AuthLayout';
import RegisterPage from './pages/Auth/RegisterPage';
import LoginPage from './pages/Auth/LoginPage';
import TestPage from './pages/Tests/TestPage';
import NotFoundPage from './pages/Other/NotFoundPage';
import NotePage from './pages/Notes/NotePage';
import NoteCreatePage from './pages/Notes/NoteCreatePage';
import NoteDetailPage from './pages/Notes/NoteDetailPage';
import NoteEditPage from './pages/Notes/NoteEditPage';
import authLoader from './loaders/authLoader';


const router = createBrowserRouter([
    {
        path: '/', Component: MasterLayout, loader: authLoader, children: [
            { index: true, Component: HomePage },
            { path: 'contact', Component: ContactPage },
            { path: 'tests', Component: TestPage },
            { path: 'notes', Component: NotePage },
            { path: 'notes/create', Component: NoteCreatePage },
            { path: 'notes/detail/:id', Component: NoteDetailPage },
            { path: 'notes/edit/:id', Component: NoteEditPage },
        ]
    },
    {
        path: '/auth', Component: AuthLayout, children: [
            { path: 'register', Component: RegisterPage },
            { path: 'login', Component: LoginPage },
        ]
    },
    {
        path: "*", Component: NotFoundPage
    }

]);

export default router;