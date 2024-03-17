import * as React from 'react';

import styles from './LeftRight.module.css';

/**
 * Use LeftRight to show two child components separated horizontally.
 */
const LeftRight: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default LeftRight;
