import React from 'react';

import Button from '../Button/Button';
import styles from './ErrorModal.module.css';

const ErrorModal = ({ errorModalInfo, setErrorModalInfo }) => {
  if (!errorModalInfo.show) {
    return null;
  }

  const closeErrorModal = () => {
    setErrorModalInfo({
      show: false,
      errorTitle: '',
      errorText: '',
    });
  };

  return (
    <div className={styles.backdrop}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <h2>{errorModalInfo.errorTitle}</h2>
        </div>
        <div className={styles.content}>
          {errorModalInfo.errorText}
          <Button type={'button'} action={closeErrorModal}>
            Okay
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ErrorModal;
