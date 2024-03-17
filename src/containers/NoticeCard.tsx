import * as React from 'react';
import classnames from 'classnames';
import {
  FaInfoCircle,
  FaExclamationTriangle,
  FaExclamationCircle,
  FaCheckCircle,
} from 'react-icons/fa';

import styles from './NoticeCard.module.css';
import { useMemo } from 'react';

/**
 * Use a NoticeCard to show actionable information to the user.
 */
const NoticeCard: React.FC<
  React.PropsWithChildren<{
    /** The type of notice card. This affects the colour scheme and default icon. */
    type: 'info' | 'warning' | 'success' | 'error';

    /** The title of the notice card. Use this to summarise the notice in a short phrase. */
    title?: string;

    /** Content to be shown on the footer of the card. Use this to show any call to actions regarding this notice. */
    footerContent?: React.ReactNode;

    /** An icon to show, replacing the default icon determined by the card type. */
    overrideIcon?: React.ReactNode;
  }>
> = ({ type, title, children, footerContent, overrideIcon }) => {
  const icon = useMemo(() => {
    switch (type) {
      case 'info':
        return <FaInfoCircle />;
      case 'success':
        return <FaCheckCircle />;
      case 'warning':
        return <FaExclamationTriangle />;
      case 'error':
        return <FaExclamationCircle />;
    }
  }, [type]);

  return (
    <div
      className={classnames({
        [styles.info]: type === 'info',
        [styles.warning]: type === 'warning',
        [styles.success]: type === 'success',
        [styles.error]: type === 'error',
        [styles.container]: true,
      })}
    >
      <div className={styles.icon}>{overrideIcon ?? icon}</div>
      <div className={styles.content}>
        {title && <h3 className={styles.title}>{title}</h3>}
        {children}

        {footerContent && <div className={styles.footer}>{footerContent}</div>}
      </div>
    </div>
  );
};

export default NoticeCard;
