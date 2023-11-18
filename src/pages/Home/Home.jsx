import styles from './Home.module.scss';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.content}>
        <h1>DataSeeker - Unleash the Power of Seamless Data Retrieval</h1>
        <p>
          With DataSeeker, finding and fetching data becomes a breeze. Empowered by advanced SQL
          capabilities, our tool simplifies the process, allowing you to run queries effortlessly
          and obtain the information you need. Say goodbye to data hunting challenges, and embrace a
          tool designed to enhance your workflow. <br />
          Explore the potential of seamless data retrieval with DataSeeker. Uncover insights,
          streamline your analysis, and make informed decisions. Your data journey starts here!
        </p>
      </div>{' '}
      <Link to={'/editor'} className={styles.link}>
        <button>Query & Fetch</button>
      </Link>
    </div>
  );
};

export default Home;
