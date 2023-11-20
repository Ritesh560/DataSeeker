import { useContext, useState } from 'react';
import MainContext from '../../../../MainContext';
import Input from '../../../../components/Input/Input';

import styles from './QueryList.module.scss';

const QueryList = ({ type, heading }) => {
  const { setQuery, queryState } = useContext(MainContext);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className={styles.queryWrapper}>
      <h4>{heading}</h4>
      <Input
        type="search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search here"
      />
      <div className={styles.queries}>
        {queryState[type]?.filter((query) =>
          query.toLowerCase().includes(searchQuery.toLowerCase())
        ).length > 0 ? (
          queryState[type]
            ?.filter((query) => query.toLowerCase().includes(searchQuery.toLowerCase()))
            ?.map((query) => (
              <div className={styles.query}>
                <code onClick={() => setQuery(query)}>{query}</code>
              </div>
            ))
        ) : (
          <div className={styles.noQuery}>
            <span className={styles.fa}></span>
            <p>No queries found.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default QueryList;
