import * as React from 'react';

import styles from './ButtonContainer.module.css';

/**
 * Use a ButtonContainer to align action buttons following form inputs, e.g. in a Card.
 */
const ButtonContainer: React.FC<React.PropsWithChildren<{}>> = (props) => {
  return <div className={styles.button_container}>{props.children}</div>;
};

export default ButtonContainer;
