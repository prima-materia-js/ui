import * as React from 'react';
import classnames from 'classnames';

import styles from './Tag.module.css';

/**
 * Use a Tag to show a label.
 */
const Tag: React.FC<
  React.PropsWithChildren<{
    /** The colour of the label. */
    color?: 'normal' | 'highlight' | 'positive' | 'negative' | 'accent';
  }>
> = ({ children, color: colour = 'normal' }) => {
  return (
    <span
      className={classnames({
        [styles.tag]: true,
        [styles.colour_normal]: colour === 'normal',
        [styles.colour_highlight]: colour === 'highlight',
        [styles.colour_positive]: colour === 'positive',
        [styles.colour_negative]: colour === 'negative',
        [styles.colour_accent]: colour === 'accent',
      })}
    >
      {children}
    </span>
  );
};

export default Tag;
