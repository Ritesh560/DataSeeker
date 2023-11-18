import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './QueryInput.module.scss';
import { queryData } from '../QueryResults/components/constants';
import Select from '../../components/Select/Select';

const QueryInput = () => {
  const [query, setQuery] = useState('');
  const [selectedQuery, setSelectedQuery] = useState(Object.keys(queryData)[0]); // Default selected query
  const navigate = useNavigate();

  const handleRunPredefinedQuery = () => {
    // Dummy logic to run the query
    navigate(`/result/${selectedQuery}`); // Pass the selected query to the result page
  };

  const handleRunCustomQuery = () => {
    // Dummy logic to run the query
    navigate(`/result/${Object.keys(queryData)[0]}`); // Pass the selected query to the result page
  };

  return (
    <div className={styles.query_input_container}>
      <div className={styles.customQuery}>
        <h2>Enter Query to run custom query</h2>
        <div className={styles.queryContainer}>
          <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter your SQL query here..."
          />
          <button onClick={handleRunCustomQuery}>Run Query</button>
        </div>
      </div>

      <div className={styles.predefinedQuery}>
        <h2>Select Query to run predefined query</h2>

        <div className={styles.queryContainer}>
          <Select
            className={styles.selectBox}
            value={selectedQuery}
            options={Object.keys(queryData).map((key) => ({
              label: `SELECT * FROM ${key};`,
              value: key
            }))}
            onChange={(val) => {
              setSelectedQuery(val);
            }}
          />
          <button onClick={handleRunPredefinedQuery}>Run Query</button>
        </div>
      </div>
    </div>
  );
};

export default QueryInput;
