import * as React from 'react';
import classnames from 'classnames';

import styles from './FormField.module.css';

/**
 * A FormField is a generic container for custom form fields.
 */
const FormField: React.FC<
  React.PropsWithChildren<{
    /** A title for this form field. */
    label?: string;

    /** Additional context about this form field. */
    helpText?: string;
  }>
> = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.label_container}>
        {props.label && (
          <div
            className={classnames({
              [styles.label]: true,
            })}
          >
            {props.label}
            {props.helpText && (
              <span className={styles.help_text}>
                {' '}
                &middot; {props.helpText}
              </span>
            )}
          </div>
        )}
      </div>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

export default FormField;
