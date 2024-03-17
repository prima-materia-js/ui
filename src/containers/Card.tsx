import classNames from 'classnames';
import * as React from 'react';

import styles from './Card.module.css';

/**
 * Use a Card as a container to show related content.
 */
const Card: React.FC<
  React.PropsWithChildren<{
    /** CSS class name to apply to the card element. */
    className?: string;

    /** A title to be shown on the card header. */
    title?: string;

    /** Content to be shown on the right corner of the card header. */
    headerRightContent?: React.ReactNode;

    /** Content to be shown on the footer of the card. */
    footerContent?: React.ReactNode;

    /** Whether the card should show a highlight border in the accent color. */
    highlight?: boolean;

    /** Whether the card should show an outline when the cursor is hovered over it. */
    showHoverEffect?: boolean;

    /** A callback function to be invoked when the card is clicked. */
    onClick?: () => void;
  }>
> = (props) => {
  return (
    <div
      className={classNames({
        [styles.card]: true,
        [props.className ?? '']: true,
        [styles.highlighted]: props.highlight,
        [styles.hover_effect]: props.showHoverEffect,
        [styles.clickable]: props.onClick != null,
      })}
      onClick={() => {
        props.onClick && props.onClick();
      }}
    >
      {(props.title != null || props.headerRightContent != null) && (
        <div className={styles.header_container}>
          {props.title && <h2 className={styles.title}>{props.title}</h2>}
          {props.headerRightContent && (
            <div className={styles.header_right_content}>
              {props.headerRightContent}
            </div>
          )}
        </div>
      )}

      <div>{props.children}</div>
      {props.footerContent && (
        <div className={styles.footer}>{props.footerContent}</div>
      )}
    </div>
  );
};

export default Card;
