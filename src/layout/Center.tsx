import * as React from 'react';
import classnames from 'classnames';

import styles from './Center.module.css';

/**
 * Center content horizontally, vertically, or both.
 */
const Center: React.FC<
  React.PropsWithChildren<{
    /** Whether to center the content horizontally within the parent container. */
    horizontal?: boolean;

    /** Whether to center the content vertically within the parent container. */
    vertical?: boolean;
  }>
> = ({ children, horizontal = false, vertical = false }) => {
  return (
    <div
      className={classnames({
        [styles.container]: true,
        [styles.h_center]: horizontal,
        [styles.v_center]: vertical,
      })}
    >
      {children}
    </div>
  );
};

export default Center;
