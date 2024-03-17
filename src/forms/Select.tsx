import * as React from 'react';
import { useCallback, useState, useMemo, useEffect } from 'react';
import classnames from 'classnames';
import FormField from './FormField';
import { FaCaretDown } from 'react-icons/fa';

import styles from './Select.module.css';

/**
 * A drop-down list that allows the user to pick a single item.
 * - If the user needs to be able to select multiple items, use a MultiSelect.
 * - If there are fewer than 5 options, consider using a ButtonGroup.
 */
const Select: React.FC<{
  /** A title for this form field. */
  label?: string;

  /** Additional context about this form field. */
  helpText?: string;

  /** The list of options to show in the drop-down list. */
  options: Array<{
    /** The readable label of this option. */
    label: React.ReactNode;

    /** The value of this option. */
    value: string;
  }>;

  /** The currently-selected value. */
  value: string | null;

  /** The callback function to be invoked when the selected option changes. */
  onChange: (value: string) => void;
}> = ({ label, helpText, options, value, onChange }) => {
  const [shouldShowOptions, setShouldShowOptions] = useState(false);
  const onOptionSelect = useCallback(
    (selectedValue: string) => {
      onChange(selectedValue);
    },
    [onChange]
  );
  const selectedOption = useMemo(
    () => options.find((option) => option.value === value),
    [options, value]
  );

  useEffect(() => {
    const onDocumentClick = () => {
      setShouldShowOptions(false);
      document.removeEventListener('click', onDocumentClick);
    };

    if (shouldShowOptions) {
      document.addEventListener('click', onDocumentClick);
    }
  }, [shouldShowOptions, setShouldShowOptions]);

  return (
    <FormField label={label} helpText={helpText}>
      <div className={styles.container}>
        <div
          className={classnames({
            [styles.selector]: true,
            [styles.is_expanded]: shouldShowOptions,
          })}
          onClick={(e) => {
            setShouldShowOptions(!shouldShowOptions);
            e.stopPropagation();
          }}
        >
          <div className={styles.selector_content}>
            <div className={styles.selected_option}>
              {selectedOption && <>{selectedOption.label}</>}
            </div>
            <FaCaretDown
              className={classnames({
                [styles.arrow]: true,
                [styles.is_expanded]: shouldShowOptions,
              })}
            />
          </div>
        </div>

        {shouldShowOptions && (
          <ul className={styles.options}>
            {options.map((option) => (
              <li
                key={option.value}
                onClick={() => {
                  setShouldShowOptions(false);
                  onOptionSelect(option.value);
                }}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </FormField>
  );
};

export default Select;
