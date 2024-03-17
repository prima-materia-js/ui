import * as React from 'react';
import classnames from 'classnames';

import styles from './Heading.module.css';

/**
 * Use a Heading to show a page or section heading.
 */
const Heading: React.FC<
  React.PropsWithChildren<{
    /** The type of heading. */
    type: 'page-title' | 'section-title' | 'sub-heading';

    /** A subtitle to be shown below the main heading. */
    subtitle?: string;
  }>
> = ({ children, type, subtitle }) => {
  switch (type) {
    case 'page-title':
      return (
        <h1 className={classnames([styles.heading, styles.page_title])}>
          {children}{' '}
          {subtitle && <div className={styles.subtitle}>{subtitle}</div>}
        </h1>
      );
    case 'section-title':
      return (
        <h2 className={styles.heading}>
          {children}{' '}
          {subtitle && <div className={styles.subtitle}>{subtitle}</div>}
        </h2>
      );
    case 'sub-heading':
      return (
        <h3 className={styles.heading}>
          {children}{' '}
          {subtitle && <div className={styles.subtitle}>{subtitle}</div>}
        </h3>
      );
  }
};

export default Heading;
