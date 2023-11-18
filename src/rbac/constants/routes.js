import Home from '../../pages/Home/Home';
import QueryInput from '../../pages/QueryInput/QueryInput';
import QueryResult from '../../pages/QueryResults/QueryResults';

const ROUTES = [
  {
    link: '/',
    name: 'Admin home',
    component: <Home />
  },
  {
    link: '/input',
    name: 'Query input',
    component: <QueryInput />
  },
  {
    link: '/result/:query',
    name: 'Query result',
    component: <QueryResult />
  }
];

export default ROUTES;
