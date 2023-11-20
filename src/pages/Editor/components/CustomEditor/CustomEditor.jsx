import { useContext } from 'react';
import MainContext from '../../../../MainContext';
import styles from './CustomEditor.module.scss';
import EditorControls from './components/EditorControls/EditorControls';

const CustomEditor = () => {
  const { query, setQuery } = useContext(MainContext);

  return (
    <div className={styles.curstomEditor}>
      <div className={styles.textAreaContainer}>
        <p>
          <span>Note:</span> Click on any available query to run.
        </p>
        <textarea value={query} onChange={(e) => setQuery(e.target.value)} />
      </div>
      <div className={styles.editorBtns}>
        <EditorControls />
      </div>
    </div>
  );
};

export default CustomEditor;
