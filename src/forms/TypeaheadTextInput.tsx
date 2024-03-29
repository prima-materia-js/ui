import * as React from 'react';
import { useEffect, useMemo } from 'react';
import classnames from 'classnames';
import FormField from './FormField';

import styles from './TypeaheadTextInput.module.css';

const TypeaheadTextInput: React.FC<{
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

  /** A callback function to be invoked when an autocomplete option is selected. */
  onSelectItem?: (value: string) => void;

  /** A callback function to be invoked when the input receives focus. */
  onFocus?: () => void;

  /** A list of options that the TypeAheadTextInput will consider. */
  options: Array<string>;

  /** The maximum number of suggestions to show at one time. */
  maxTypeaheadOptions?: number;

  /** Placeholder text to show when the field is empty. */
  placeholder?: string;

  /** A static prefix to show on the input. This can be used to indicate a prefix that can be omitted from the user's input - for example "https://" in an input for URLs. */
  prefix?: React.ReactNode;

  /** The minimum number of characters that must be typed before suggestions are shown. */
  typeaheadTriggerChars?: number;

  /** The current value of the input. */
  value: string;
}> = (props) => {
  let textInput: HTMLInputElement | null = null;
  const {
    value,
    options,
    maxTypeaheadOptions = 10,
    disabled = false,
    placeholder = '',
    typeaheadTriggerChars = 3,
  } = props;

  useEffect(() => {
    if (!!props.focusOnLoad && !!textInput && !props.value) {
      textInput.focus();
    }
  }, [textInput, props.value, props.focusOnLoad]);

  const filteredOptions = useMemo(
    () =>
      options
        .filter((opt) => opt.toLowerCase().includes(value.toLowerCase()))
        .sort(),
    [value, options]
  );
  const shouldShowOptions =
    value.length >= typeaheadTriggerChars &&
    !options.includes(value) &&
    filteredOptions.length > 0;

  return (
    <FormField label={props.label} helpText={props.helpText}>
      <div className={styles.container}>
        <div
          className={classnames({
            [styles.input_container]: true,
            [styles.options_visible]: shouldShowOptions,
          })}
        >
          {props.prefix && <div className={styles.prefix}>{props.prefix}</div>}
          <input
            className={classnames({
              [styles.text_input]: true,
              [styles.disabled]: disabled,
            })}
            disabled={disabled}
            type="text"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              props.onChange(e.currentTarget.value);
            }}
            onFocus={props.onFocus}
            placeholder={placeholder}
            ref={(input) => {
              textInput = input;
            }}
            value={props.value}
          />
        </div>
        {shouldShowOptions && (
          <ul className={styles.options}>
            {filteredOptions.slice(0, maxTypeaheadOptions).map((option) => (
              <li
                key={option}
                onClick={() => {
                  props.onChange(option);
                  props.onSelectItem && props.onSelectItem(option);
                }}
              >
                {option}
              </li>
            ))}
            {filteredOptions.length > maxTypeaheadOptions && (
              <li className={styles.more_options}>
                ... and {filteredOptions.length - maxTypeaheadOptions} more
              </li>
            )}
          </ul>
        )}
      </div>
    </FormField>
  );
};

export default TypeaheadTextInput;
