import * as React from 'react';
import classnames from 'classnames';
import { useCallback } from 'react';
import { FaCheck } from 'react-icons/fa';

import styles from './Checkbox.module.css';

/**
 * Use a Checkbox to represent a value that can be toggled on or off.
 */
const Checkbox: React.FC<{
  /** The callback function to be invoked when the Checkbox's checked state changes. */
  onChange: (checked: boolean) => void;

  /** The current checked state of the Checkbox. */
  checked: boolean;

  /** Whether the Checkbox blocks user input. */
  disabled?: boolean;

  /** The readable label of this Checkbox. */
  label?: React.ReactNode;
}> = (props) => {
  const { onChange, checked, disabled = false } = props;
  const onClick = useCallback(() => {
    onChange(!checked);
  }, [onChange, checked]);

  return (
    <div className={styles.container}>
      <span className={styles.clickable} onClick={onClick}>
        <button
          className={classnames({
            [styles.checkbox]: true,
            [styles.disabled]: disabled,
          })}
          disabled={disabled}
        >
          <FaCheck
            className={classnames({
              [styles.checkmark]: true,
              [styles.checked]: checked,
            })}
          />
        </button>
        {props.label}
      </span>
    </div>
  );
};

export default Checkbox;
