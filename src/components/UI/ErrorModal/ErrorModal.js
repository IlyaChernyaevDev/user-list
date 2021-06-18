import React, { useState } from 'react';

import styles from './ErrorModal.module.css';

const ErrorModal = ({ errorModalInfo, setErrorModalInfo }) => {
  if (!errorModalInfo.show) {
    return null;
  }

  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2>{errorModalInfo.errorTitle}</h2>
        </div>
        <div className={styles.content}>
          {errorModalInfo.errorText}
          <button
            className={styles.actions}
            onClick={() => {
              setErrorModalInfo({
                show: false,
                errorTitle: '',
                errorText: '',
              });
            }}
          >
            Okay
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
