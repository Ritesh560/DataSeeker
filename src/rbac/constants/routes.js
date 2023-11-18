import QueryInput from '../../pages/QueryInput/QueryInput';
import QueryResult from '../../pages/QueryResults/QueryResults';

const ROUTES = [
  {
    link: '/',
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
