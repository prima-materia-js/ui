import * as React from 'react';
import { useCallback, useMemo } from 'react';
import classnames from 'classnames';
import FormField from './FormField';

import styles from './TextArea.module.css';

/**
 * Use a TextArea to allow users to type multiple lines of text.
 */
const TextArea: React.FC<{
  /** Whether the user can resize the TextArea vertically. */
  allowResize?: boolean;

  /** Whether the TextArea should automatically grow or shrink vertically to fit the text. */
  autoGrow?: boolean;

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
}> = (props) => {
  const {
    onChange,
    value,
    allowResize = true,
    autoGrow = false,
    rows = 5,
    showLineNumbers = false,
  } = props;
  const onValueChange = useCallback(
    (e: React.SyntheticEvent<HTMLTextAreaElement>) => {
      onChange(e.currentTarget.value);
    },
    [onChange]
  );
  const lines = useMemo(() => value.split('\n'), [value]);

  return (
    <FormField label={props.label} helpText={props.helpText}>
      <div className={styles.container}>
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
          })}
          rows={autoGrow ? lines.length : rows}
          value={props.value}
          onChange={onValueChange}
          placeholder={props.placeholder}
        />
      </div>
    </FormField>
  );
};

export default TextArea;
