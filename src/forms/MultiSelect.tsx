import * as React from 'react';
import { useState, useEffect } from 'react';
import classnames from 'classnames';
import FormField from './FormField';
import { FaCaretDown } from 'react-icons/fa';

import styles from './Select.module.css';
import Checkbox from './Checkbox';
import classNames from 'classnames';
import Center from '../layout/Center';
import Text from '../text/Text';
import useValidation from './hooks/useValidation';

/**
 * A drop-down list allowing users to select multiple items.
 */
const MultiSelect: React.FC<{
  /** A title for this form field. */
  label?: string;

  /** Additional context about this form field. */
  helpText?: string;

  /** Whether the field blocks user input. */
  disabled?: boolean;

  /** A list of grouped options for the drop-down list. */
  options: Array<{
    /** A header for this group of options; for example, you can group options by the first letter. */
    header?: string;

    /** The options in this group. */
    items: Array<{
      /** The readable label of this option. */
      label: React.ReactNode;

      /** The value of this option. */
      value: string;
    }>;
  }>;

  /** The currently-selected list of option values. */
  selectedItems: Array<string>;

  /** The callback function to be invoked when the selected options change. */
  onChange: (selectedItems: Array<string>) => void;

  /** A function to validate the user-provided input. Return null or an empty string if the value is valid; otherwise
   * return a message explaining why the value is invalid.  */
  onValidate?: (selectedItems: string[]) => null | string;
}> = ({
  label,
  helpText,
  options,
  selectedItems,
  onChange,
  disabled = false,
  onValidate,
}) => {
  const [shouldShowOptions, setShouldShowOptions] = useState(false);

  useEffect(() => {
    const onDocumentClick = () => {
      setShouldShowOptions(false);
      document.removeEventListener('click', onDocumentClick);
    };

    if (shouldShowOptions) {
      document.addEventListener('click', onDocumentClick);
    }
  }, [shouldShowOptions, setShouldShowOptions]);

  const { isValid, validationMessage } = useValidation(
    selectedItems,
    onValidate
  );

  return (
    <FormField
      label={label}
      helpText={helpText}
      valid={isValid}
      validationMessage={validationMessage}
    >
      <div
        className={classNames({
          [styles.container]: true,
        })}
      >
        <div
          className={classnames({
            [styles.selector]: true,
            [styles.is_expanded]: shouldShowOptions,
            [styles.disabled]: disabled,

            [styles.valid]: isValid === true,
            [styles.invalid]: isValid === false,
          })}
        >
          <div
            className={styles.selector_content}
            onClick={(e) => {
              if (disabled) return;

              setShouldShowOptions(!shouldShowOptions);
              e.stopPropagation();
            }}
          >
            <div>
              {selectedItems.length} item{selectedItems.length === 1 ? '' : 's'}{' '}
              selected
            </div>
            <FaCaretDown
              className={classnames({
                [styles.arrow]: true,
                [styles.is_expanded]: shouldShowOptions,
              })}
            />
          </div>
        </div>

        {shouldShowOptions && !disabled && (
          <div
            className={classNames({
              [styles.options]: true,
              [styles.multi_select_options]: true,
            })}
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            {options.map((option, i) => (
              <div key={`o_${option.header}_${i}`}>
                {option.header && (
                  <div className={styles.section_header}>{option.header}</div>
                )}

                {option.items.length === 0 && (
                  <Center horizontal>
                    <Text size="xsmall" color="subtle">
                      No items
                    </Text>
                  </Center>
                )}

                {option.items.map((item) => (
                  <Checkbox
                    key={item.value}
                    label={item.label}
                    checked={selectedItems.includes(item.value)}
                    onChange={(checked) => {
                      if (checked) {
                        onChange([...selectedItems, item.value]);
                      } else {
                        onChange(selectedItems.filter((v) => v !== item.value));
                      }
                    }}
                  />
                ))}
              </div>
            ))}
          </div>
        )}
      </div>
    </FormField>
  );
};

export default MultiSelect;
