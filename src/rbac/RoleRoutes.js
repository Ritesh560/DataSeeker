import { ROLE_ROUTES } from './constants/index';
import { Route, Routes } from 'react-router-dom';

//styles
import styles from './RoleRoutes.module.scss';
import NavBar from '../pages/NavBar/NavBar';

const RoleRoutes = () => {
  return (
    <div className={styles.routePageContainer}>
      <NavBar />
      <Routes>
        {ROLE_ROUTES['routes'].map((route) => (
          <Route key={route.name} path={route.link} exact element={route.component} />
        ))}
      </Routes>
    </div>
  );
};

export default RoleRoutes;
