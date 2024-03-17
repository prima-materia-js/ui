import * as React from 'react';
import classnames from 'classnames';

import FormField from './FormField';

import styles from './ButtonGroup.module.css';

/**
 * Use ButtonGroups to allow users to select between a small number of predefined options.
 */
const ButtonGroup: React.FC<{
  /** The list of options for this ButtonGroup. */
  items: Array<{
    /** A readable label for this option. */
    label: string;

    /** The value for this option. */
    value: string;
  }>;

  /** Additional context about this form field. */
  helpText?: string;

  /** A title for this form field. */
  label?: string;

  /** A callback function to be invoked when the selected option is changed. */
  onChange: (selectedValue: string) => void;

  /** The currently-selected value of this ButtonGroup. */
  value: string | null;
}> = (props) => {
  return (
    <FormField label={props.label} helpText={props.helpText}>
      <div className={styles.button_group}>
        {props.items.map((item) => (
          <button
            className={classnames({
              [styles.selected]: item.value === props.value,
            })}
            key={item.value}
            onClick={() => {
              props.onChange(item.value);
            }}
          >
            {item.label}
          </button>
        ))}
      </div>
    </FormField>
  );
};

export default ButtonGroup;
