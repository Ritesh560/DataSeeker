import { useContext } from 'react';
import MainContext from '../../../../../../MainContext';
import { queryData, tables } from '../../../../../../libs/assets/data/dummyData';

import styles from './EditorControls.module.scss';

const EditorControls = () => {
  const { query, queryState, setQueryState, setQuery } = useContext(MainContext);

  const runQuery = () => {
    if (query.trim() === '') {
      alert('Type a query to run.');
      return;
    }

    const regexPattern = 'SELECT \\* FROM (\\w+);';
    const regex = new RegExp(regexPattern, 'i');
    const matches = query.match(regex);

    if (matches && tables.includes(matches[1])) {
      setQueryState((prev) => ({
        ...prev,
        results: queryData[matches[1]]
      }));
    } else if (query === 'SELECT user_id, name FROM users;') {
      setQueryState((prev) => ({
        ...prev,
        results: queryData.limitedUsers
      }));
    } else {
      alert('please select a query from available queries.');
    }
  };

  const saveQuery = () => {
    if (query.trim() === '') {
      alert("Query can't be null");
      return;
    }

    if (!queryState.saved.includes(query))
      setQueryState((prev) => ({
        ...prev,
        saved: [...prev.saved, query]
      }));
  };

  const clearQuery = () => {
    setQuery('');
  };

  return (
    <div className={styles.editorControls}>
      <button onClick={() => runQuery()} className={styles.run}>
        Run
      </button>

      <button onClick={() => saveQuery()} className={styles.save}>
        Save
      </button>

      <button onClick={() => clearQuery()} className={styles.clear}>
        Clear
      </button>
    </div>
  );
};

export default EditorControls;
