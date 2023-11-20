import Editor from '../../pages/Editor/Editor';
import Home from '../../pages/Home/Home';

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
