import { PropinsiPage } from '../pages/propinsi';
import { ErrorPage } from '../pages/errors';


const routes = [
    {
        path: '/',
        component: PropinsiPage
    },
    {
        path: '*',
        component: ErrorPage,
        props: {
            code: 404
        }
    }
];

export default routes;