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

/**
 * A drop-down list allowing users to select multiple items.
 */
const MultiSelect: React.FC<{
  /** A title for this form field. */
  label?: string;

  /** Additional context about this form field. */
  helpText?: string;

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
}> = ({ label, helpText, options, selectedItems, onChange }) => {
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

  return (
    <FormField label={label} helpText={helpText}>
      <div className={styles.container}>
        <div
          className={classnames({
            [styles.selector]: true,
            [styles.is_expanded]: shouldShowOptions,
          })}
        >
          <div
            className={styles.selector_content}
            onClick={(e) => {
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

        {shouldShowOptions && (
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
