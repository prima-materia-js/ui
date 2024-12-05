import FormField from './FormField';
import classnames from 'classnames';

import styles from './TokenInput.module.css';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { FaCross } from 'react-icons/fa6';
import { FaTimes, FaTimesCircle } from 'react-icons/fa';

/**
 * Use a TokenInput when the user should input multiple short, discrete pieces of text, such as tags.
 */
const TokenInput: React.FC<{
  /** Additional context about this form field. */
  helpText?: string;

  /** A title for this form field. */
  label?: string;

  /** Whether the input is disabled and blocks any interaction. */
  disabled?: boolean;

  /** Whether the cursor should be focused on the input once the page has loaded. */
  focusOnLoad?: boolean;

  /** The currently-selected tokens. */
  value: string[];

  /** A callback function to be invoked when the selected tokens change. */
  onChange: (tokens: string[]) => void;

  /** A list of suggestions that the user can autocomplete from. */
  suggestions?: Array<string>;

  /** The maximum number of suggestions to show at one time. */
  maxSuggestions?: number;

  /** Placeholder text to show when the field is empty. */
  placeholder?: string;

  /** The minimum number of characters that must be typed before suggestions are shown. */
  typeaheadTriggerChars?: number;

  /** Whether duplicate tokens should be disallowed. */
  forbidDuplicates?: boolean;

  /** Whether case sensitivity should be considered when preventing duplicate tokens. If this is enabled, then `forbidDuplicates` must also be enabled. */
  forbidCaseInsensitiveDuplicates?: boolean;

  /** Whether the user can only select tokens that are in the suggestions list. If this is enabled, the `suggestions` prop must be set. */
  restrictToSuggestions?: boolean;
}> = ({
  helpText,
  label,
  disabled,
  value,
  onChange,
  focusOnLoad,
  placeholder,
  suggestions,
  maxSuggestions = 10,
  typeaheadTriggerChars = 1,
  forbidDuplicates = true,
  forbidCaseInsensitiveDuplicates = true,
  restrictToSuggestions = false,
}) => {
  const [newToken, setNewToken] = useState('');
  const [highlightedSuggestionIndex, setHighlightedSuggestionIndex] =
    useState(-1);
  let textInput: HTMLInputElement | null = null;

  const addNewToken = useCallback(
    (token: string) => {
      if (token.trim() === '') return;

      if (suggestions != null && suggestions.length > 0) {
        token = suggestions.find((t) => t.toLowerCase() === token) ?? token;
      }

      if (restrictToSuggestions && !(suggestions ?? []).includes(token)) return;

      if (forbidDuplicates) {
        const isExistingToken = forbidCaseInsensitiveDuplicates
          ? value.some((t) => t.toLowerCase() === token.toLowerCase())
          : value.includes(token);
        if (isExistingToken) return;
      }

      onChange([...value, token]);
      setNewToken('');
      setHighlightedSuggestionIndex(-1);
    },
    [
      value,
      forbidDuplicates,
      forbidCaseInsensitiveDuplicates,
      suggestions,
      restrictToSuggestions,
    ]
  );

  useEffect(() => {
    if (!!focusOnLoad && !!textInput && value.length === 0) {
      textInput.focus();
    }
  }, [textInput, value, focusOnLoad]);

  const filteredOptions = useMemo(() => {
    setHighlightedSuggestionIndex(-1);
    if (suggestions == null) return [];

    return suggestions
      .filter(
        (opt) =>
          opt.toLowerCase().includes(newToken.toLowerCase()) &&
          !value.includes(opt)
      )
      .sort();
  }, [newToken, suggestions, value]);
  const shouldShowOptions =
    newToken.length >= typeaheadTriggerChars &&
    suggestions != null &&
    !suggestions.includes(newToken) &&
    filteredOptions.length > 0;

  return (
    <FormField label={label} helpText={helpText}>
      <div className={styles.main_container}>
        <div
          className={classnames({
            [styles.container]: true,
            [styles.disabled]: disabled,
          })}
          onClick={(e) => {
            if (textInput != null) textInput.focus();
          }}
        >
          {value.map((token) => (
            <div key={token} className={styles.token}>
              {token}

              <span
                className={styles.delete_token_button}
                onClick={(e) => {
                  onChange(value.filter((t) => t !== token));
                }}
              >
                <FaTimes />
              </span>
            </div>
          ))}

          <input
            className={styles.text_input}
            type="text"
            value={newToken}
            disabled={disabled}
            placeholder={placeholder}
            onChange={(e) => {
              setNewToken(e.currentTarget.value);
            }}
            onClick={(e) => {
              e.stopPropagation();
            }}
            onKeyDown={(e) => {
              if (e.key === 'Tab' && newToken.trim() !== '') {
                e.preventDefault();
              } else if (e.key === 'Backspace') {
                if (newToken === '' && value.length > 0) {
                  onChange(value.slice(0, value.length - 1));
                }
              }
            }}
            onKeyUp={(e) => {
              if (e.key === 'Enter' || e.key === 'Tab') {
                if (highlightedSuggestionIndex != -1) {
                  addNewToken(filteredOptions[highlightedSuggestionIndex]);
                } else {
                  addNewToken(newToken);
                }
              } else if (e.key === 'ArrowDown') {
                if (
                  highlightedSuggestionIndex <
                  Math.min(maxSuggestions, filteredOptions.length) - 1
                ) {
                  setHighlightedSuggestionIndex(highlightedSuggestionIndex + 1);
                }
              } else if (e.key === 'ArrowUp') {
                if (highlightedSuggestionIndex > 0) {
                  setHighlightedSuggestionIndex(highlightedSuggestionIndex - 1);
                }
              }
            }}
            ref={(input) => {
              textInput = input;
            }}
          />
        </div>
        {shouldShowOptions && (
          <ul className={styles.options}>
            {filteredOptions.slice(0, maxSuggestions).map((option, index) => (
              <li
                key={option}
                className={classnames({
                  [styles.highlighted_suggestion]:
                    index === highlightedSuggestionIndex,
                })}
                onClick={() => {
                  addNewToken(option);
                }}
                onMouseEnter={() => {
                  setHighlightedSuggestionIndex(-1);
                }}
              >
                {option}
              </li>
            ))}
            {filteredOptions.length > maxSuggestions && (
              <li className={styles.more_options}>
                ... and {filteredOptions.length - maxSuggestions} more
              </li>
            )}
          </ul>
        )}
      </div>
    </FormField>
  );
};

export default TokenInput;
