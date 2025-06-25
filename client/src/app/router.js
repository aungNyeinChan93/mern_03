import { createBrowserRouter } from 'react-router'
import MasterLayout from './layouts/MasterLayout';
import HomePage from './pages/Home/HomePage';
import ContactPage from './pages/Contact/ContactPage';


const router = createBrowserRouter([
    {
        path: '/', Component: MasterLayout, children: [
            { index: true, Component: HomePage },
            { path: 'contact', Component: ContactPage }
        ]
    }

]);

export default router;