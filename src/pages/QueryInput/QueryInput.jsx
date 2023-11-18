import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './QueryInput.module.scss';
import { queryData } from '../QueryResults/components/constants';
import Select from '../../components/Select/Select';

const QueryInput = () => {
  const [query, setQuery] = useState('');
  const [selectedQuery, setSelectedQuery] = useState('users'); // Default selected query
  const navigate = useNavigate();

  const handleRunQuery = () => {
    // Dummy logic to run the query
    navigate(`/result/${selectedQuery}`); // Pass the selected query to the result page
  };

  return (
    <div className={styles.query_input_container}>
      <Select
        className={styles.selectBox}
        value={selectedQuery}
        options={Object.keys(queryData).map((key) => ({ label: key, value: key }))}
        onChange={(val) => {
          setSelectedQuery(val);
        }}
      />

      <textarea
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter your SQL query here..."
      />
      <button onClick={handleRunQuery}>Run Query</button>
    </div>
  );
};

export default QueryInput;
