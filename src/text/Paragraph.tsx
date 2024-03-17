import * as React from 'react';
import Text, { Props as TextProps } from './Text';

import styles from './Paragraph.module.css';

type TextAlign = 'left' | 'right' | 'center' | 'justify' | 'start' | 'end';

/**
 * Use a Paragraph to show a block of text.
 */
const Paragraph: React.FC<
  TextProps & {
    /** The alignment of the text in the paragraph. */
    textAlign?: TextAlign;
  }
> = (props) => {
  const { textAlign = 'left' } = props;
  return (
    <p
      className={styles.paragraph}
      style={{
        textAlign,
      }}
    >
      <Text {...props}>{props.children}</Text>
    </p>
  );
};

export default Paragraph;
