import React from "react";

import styles from './Button.module.css';

const Button = (props) => {
  return <button onClick={props.action} className={styles.button}>{props.children}</button>
}

export default Button;