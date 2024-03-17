import * as React from 'react';
import classnames from 'classnames';
import Spinner from '../spinners/Spinner';

import styles from './Button.module.css';

export type ButtonColour = 'normal' | 'danger' | 'highlight';

export type Props = {
  /** Whether this button is disabled and cannot be clicked. */
  disabled?: boolean;

  /** The content of this button. */
  label: React.ReactNode;

  /** The callback function to be invoked when the button is clicked. */
  onClick: React.MouseEventHandler<HTMLButtonElement>;

  /** Whether this is the button for the primary user action in the current context. This will colour the button with the primary accent colour. */
  primary?: boolean;

  /** Whether to show a spinner and disable the button from being clicked. Use this when a form is being submitted. */
  showSpinner?: boolean;

  /** The size of the button - either small or normal. */
  size?: 'normal' | 'small';

  /** Whether the button's background shading is visible only when the cursor hovers over it. */
  subtle?: boolean;

  /** Tooltip text for the button. */
  tooltip?: string;

  /** The direction to show the tooltip popup in. */
  tooltipDirection?:
    | 'up'
    | 'down'
    | 'left'
    | 'right'
    | 'up-left'
    | 'up-right'
    | 'down-left'
    | 'down-right';

  /** The colour of the button's background. */
  colour?: ButtonColour;
};

/**
 * Use a Button to trigger an action.
 */
const Button: React.FC<Props> = ({
  label,
  onClick,
  tooltip,
  disabled = false,
  primary = false,
  showSpinner = false,
  size = 'normal',
  subtle = false,
  tooltipDirection = 'up',
  colour = 'normal',
}) => {
  return (
    <button
      className={classnames({
        [styles.button]: true,
        [styles.primary]: primary,
        [styles.disabled]: disabled || showSpinner,
        [styles.subtle]: subtle,
        [styles.danger]: colour === 'danger',
        [styles.highlight]: colour === 'highlight',
        [styles.small]: size === 'small',
      })}
      disabled={disabled}
      onClick={onClick}
      aria-label={tooltip}
      data-balloon-pos={tooltipDirection}
    >
      {label}
      {showSpinner && (
        <span
          style={{
            margin: '0 0 0 0.5rem',
            position: 'relative',
            top: '0.05rem',
          }}
        >
          <Spinner size="0.85rem" thickness={6} />
        </span>
      )}
    </button>
  );
};

export default Button;
