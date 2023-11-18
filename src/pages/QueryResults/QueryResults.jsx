// src/components/QueryResult.js
import React from 'react';
import styles from './QueryResults.module.scss';
import { queryData } from './components/constants';
import { useParams } from 'react-router-dom';

const QueryResult = () => {
  const params = useParams();
  const selectedQuery = params?.query || 'users'; // Default to users if no query is provided

  const data = queryData[selectedQuery];

  return (
    <div className={styles.query_result_container}>
      <table>
        <thead>
          <tr>
            {Object.keys(data[0]).map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              {Object.values(row).map((value, index) => (
                <td key={index}>{value}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QueryResult;
