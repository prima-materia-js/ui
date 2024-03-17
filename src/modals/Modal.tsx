import * as React from 'react';
import { FaTimes } from 'react-icons/fa';

import styles from './Modal.module.css';
import { useEffect } from 'react';

/**
 * Use a Modal to show a popup dialog presenting some key time-sensitive content to the user.
 */
const Modal: React.FC<
  React.PropsWithChildren<{
    /** The callback function that will be invoked when the close button is clicked. */
    onClose?: () => void;

    /** The title that will be displayed in the Modal's header. */
    title?: string;

    /** Additional content that will be displayed in the header, to the left of the title. */
    headerContent?: React.ReactNode;

    /** Content that will be displayed in the Modal's footer. */
    footerContent?: React.ReactNode;

    /** Whether the Modal is currently visible. */
    visible: boolean;

    /** Whether pressing the Escape key will close the Modal. */
    closeOnEscKey?: boolean;
  }>
> = (props) => {
  const { visible, closeOnEscKey = false, onClose } = props;

  useEffect(() => {
    if (!visible || !closeOnEscKey || !onClose) return;

    const onKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keyup', onKeyPress);

    return () => {
      document.removeEventListener('keyup', onKeyPress);
    };
  }, [visible, closeOnEscKey, onClose]);

  if (!visible) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <div className={styles.header}>
          {props.headerContent}
          {props.title && <h2 className={styles.title}>{props.title}</h2>}
          {onClose && (
            <button
              className={styles.close_button}
              onClick={() => {
                onClose();
              }}
            >
              <FaTimes />
            </button>
          )}
        </div>
        <div className={styles.content}>{props.children}</div>
        {props.footerContent && (
          <div className={styles.footer}>{props.footerContent}</div>
        )}
      </div>
    </div>
  );
};

export default Modal;
