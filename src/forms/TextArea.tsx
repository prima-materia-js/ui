import * as React from 'react';
import { useCallback, useMemo } from 'react';
import classnames from 'classnames';
import FormField from './FormField';

import styles from './TextArea.module.css';
import useValidation from './hooks/useValidation';

/**
 * Use a TextArea to allow users to type multiple lines of text.
 */
const TextArea: React.FC<{
  /** Whether the user can resize the TextArea vertically. */
  allowResize?: boolean;

  /** Whether the TextArea should automatically grow or shrink vertically to fit the text. */
  autoGrow?: boolean;

  /** Whether the TextArea blocks user input. */
  disabled?: boolean;

  /** Additional context about this form field. */
  helpText?: string;

  /** A title for this form field. */
  label?: string;

  /** The callback function to be invoked when the value changes. */
  onChange: (value: string) => void;

  /** A preset number of lines that should fit in the TextArea without resizing or scrolling. */
  rows?: number;

  /** Whether to show line numbers. This is helpful if the user is typing code. */
  showLineNumbers?: boolean;

  /** The current content of the TextArea. */
  value: string;

  /** Placeholder text to show when the field is empty. */
  placeholder?: string;

  /** A function to validate the user-provided input. Return null or an empty string if the value is valid; otherwise
   * return a message explaining why the value is invalid.  */
  onValidate?: (value: string) => null | string;
}> = (props) => {
  const {
    onChange,
    value,
    allowResize = true,
    autoGrow = false,
    rows = 5,
    showLineNumbers = false,
    disabled = false,
    onValidate,
  } = props;
  const onValueChange = useCallback(
    (e: React.SyntheticEvent<HTMLTextAreaElement>) => {
      onChange(e.currentTarget.value);
    },
    [onChange]
  );
  const lines = useMemo(() => value.split('\n'), [value]);
  const { isValid, validationMessage } = useValidation(value, onValidate);

  return (
    <FormField
      label={props.label}
      helpText={props.helpText}
      valid={isValid}
      validationMessage={validationMessage}
    >
      <div
        className={classnames({
          [styles.container]: true,
          [styles.valid]: isValid === true,
          [styles.invalid]: isValid === false,
        })}
      >
        {showLineNumbers && (
          <div className={styles.line_numbers}>
            {lines.map((_, i) => (
              <span key={`line_${i}`}>
                {i + 1}
                <br />
              </span>
            ))}
          </div>
        )}
        <textarea
          className={classnames({
            [styles.textarea]: true,
            [styles.no_resize]: allowResize === false,
            [styles.disabled]: disabled,
          })}
          rows={autoGrow ? lines.length : rows}
          value={props.value}
          onChange={onValueChange}
          placeholder={props.placeholder}
          disabled={disabled}
        />
      </div>
    </FormField>
  );
};

export default TextArea;
