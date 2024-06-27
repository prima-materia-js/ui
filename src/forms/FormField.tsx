import * as React from 'react';
import classnames from 'classnames';

import styles from './FormField.module.css';
import { FaCheck, FaCircleXmark } from 'react-icons/fa6';
import { useContext, useEffect, useMemo } from 'react';
import { FormValidationContext } from './FormValidationProvider';

/**
 * A FormField is a generic container for custom form fields.
 */
const FormField: React.FC<
  React.PropsWithChildren<{
    /** A title for this form field. */
    label?: string;

    /** Additional context about this form field. */
    helpText?: string;

    /** Whether the input associated with this form field contains valid values. */
    valid?: boolean | null;

    /** Additional information explaining why the value of this form field is invalid. */
    validationMessage?: string;
  }>
> = ({ label, helpText, valid, validationMessage, children }) => {
  const fieldID = useMemo(
    () => Math.random().toString(36).substring(2, 10),
    []
  );
  const validationContext = useContext(FormValidationContext);

  useEffect(() => {
    if (!validationContext.isActive) return;

    validationContext.setValidationResult(
      fieldID,
      label ?? '',
      valid,
      validationMessage
    );
  }, [valid, validationMessage, fieldID]);

  return (
    <div className={styles.container}>
      <div className={styles.label_container}>
        <div>
          {label && (
            <div
              className={classnames({
                [styles.label]: true,
              })}
            >
              {label}
              {helpText && (
                <span className={styles.help_text}> &middot; {helpText}</span>
              )}
            </div>
          )}
        </div>
        <div className={styles.validation_result}>
          {valid === true && <FaCheck className={styles.valid} />}
          {valid === false && (
            <div aria-label={validationMessage} data-balloon-pos="left">
              <FaCircleXmark className={styles.invalid} />
            </div>
          )}
        </div>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default FormField;
