import { useContext, useState } from 'react';
import MainContext from '../../../../MainContext';
import { CSVLink } from 'react-csv';

import styles from './QueryResults.module.scss';

const Output = () => {
  const { queryState } = useContext(MainContext);

  return (
    <div className={styles.queryResultContainer}>
      {queryState.results?.length ? (
        <div className={styles.queryResult}>
          <h3>Results</h3>
          <table>
            <thead>
              <tr>
                {Object.keys(queryState.results[0]).map((key) => (
                  <th key={key}>{key}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {queryState.results?.map((row) => (
                <tr key={row.id}>
                  {Object.values(row).map((value, index) => (
                    <td key={index}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className={styles.placeholder}>
          <p>Run a query to see results</p>
        </div>
      )}
    </div>
  );
};

export default Output;
