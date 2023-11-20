import Editor from '../../pages/Editor/Editor';
import Home from '../../pages/Home/Home';
import QueryInput from '../../pages/QueryInput/QueryInput';
import QueryResult from '../../pages/QueryResults/QueryResults';

const ROUTES = [
  {
    link: '/',
    name: 'Home',
    component: <Home />
  },
  {
    link: '/editor',
    name: 'editor',
    component: <Editor />
  }
];

export default ROUTES;
