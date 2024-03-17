import * as React from 'react';
import { FaArrowLeft } from 'react-icons/fa';

import styles from './Flyout.module.css';

/**
 * Use Flyout to show a dismissible drawer that slides in.
 */
const Flyout: React.FC<
  React.PropsWithChildren<{
    /** The callback function to be shown when the close button is clicked. */
    onClose: () => void;

    /** Content to be shown in the header of the Flyout. */
    header?: React.ReactNode;
  }>
> = ({ children, onClose, header }) => {
  return (
    <div className={styles.backdrop}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.back_button} onClick={onClose}>
            <FaArrowLeft />
          </div>
          {header}
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default Flyout;
