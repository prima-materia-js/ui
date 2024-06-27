import * as React from 'react';
import { useState } from 'react';
import classnames from 'classnames';

import FormField from './FormField';

import styles from './TextInput.module.css';
import useValidation from './hooks/useValidation';

const { useEffect } = React;

/**
 * Use a TextInput when the user needs to type a single line of text.
 */
const TextInput: React.FC<{
  /** The autocomplete behaviour of this field. See https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete for more details. */
  autoComplete?: string;

  /** Whether the input is disabled and blocks any interaction. */
  disabled?: boolean;

  /** Whether the cursor should be focused on the input once the page has loaded. */
  focusOnLoad?: boolean;

  /** Additional context about this form field. */
  helpText?: string;

  /** A title for this form field. */
  label?: string;

  /** A callback function to be invoked when the value changes. */
  onChange: (value: string) => void;

  /** A callback function to be invoked when the user presses the Enter key while focused on the field. */
  onHitEnter?: () => void;

  /** A callback function to be invoked when the input receives focus. */
  onFocus?: () => void;

  /** Placeholder text to show when the field is empty. */
  placeholder?: string;

  /** A static prefix to show on the input. This can be used to indicate a prefix that can be omitted from the user's input - for example "https://" in an input for URLs. */
  prefix?: React.ReactNode;

  /** The type of input to use. */
  type?: 'text' | 'password' | 'number';

  /** The current value of the input. */
  value: string;

  /** A function to validate the user-provided input. Return null or an empty string if the value is valid; otherwise
   * return a message explaining why the value is invalid.  */
  onValidate?: (value: string) => null | string;
}> = (props) => {
  let textInput: HTMLInputElement | null = null;
  const {
    disabled = false,
    placeholder = '',
    type = 'text',
    onValidate,
    value,
  } = props;
  const { isValid, validationMessage } = useValidation(value, onValidate);

  useEffect(() => {
    if (!!props.focusOnLoad && !!textInput && !props.value) {
      textInput.focus();
    }
  }, [textInput, props.value, props.focusOnLoad]);

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
        {props.prefix && <div className={styles.prefix}>{props.prefix}</div>}
        <input
          autoComplete={props.autoComplete}
          className={classnames({
            [styles.text_input]: true,
            [styles.disabled]: disabled,
          })}
          disabled={disabled}
          type={type}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            props.onChange(e.currentTarget.value);
          }}
          onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => {
            if (!props.onHitEnter) {
              return;
            }

            if (e.keyCode === 13) {
              props.onHitEnter();
            }
          }}
          onFocus={props.onFocus}
          placeholder={placeholder}
          ref={(input) => {
            textInput = input;
          }}
          value={props.value}
        />
      </div>
    </FormField>
  );
};

export default TextInput;
