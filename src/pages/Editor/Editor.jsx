import { useMemo, useState } from 'react';
import QueryResults from './components/QueryResults/QueryResults';
import MainContext from '../../MainContext';
import styles from './Editor.module.scss';
import QueryList from './components/QueryList/QueryList';
import CustomEditor from './components/CustomEditor/CustomEditor';
import { tables } from '../../libs/assets/data/dummyData';

function Editor() {
  const [query, setQuery] = useState('SELECT * FROM users;');
  const [queryState, setQueryState] = useState({
    available: [
      'SELECT user_id, name FROM users;',
      ...tables.map((table) => `SELECT * FROM ${table};`)
    ],
    saved: [],
    results: []
  });

  const contextValue = useMemo(
    () => ({ query, setQuery, queryState, setQueryState }),
    [query, queryState]
  );

  return (
    <MainContext.Provider value={contextValue}>
      <div className={styles.editorContainer}>
        <div className={styles.sidebar}>
          <QueryList type="available" heading={'Queries available'} />
          <QueryList type="saved" heading={'Saved'} />
        </div>
        <div className={styles.editor}>
          <CustomEditor />
          <QueryResults />
        </div>
      </div>
    </MainContext.Provider>
  );
}

export default Editor;
