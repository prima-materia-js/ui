import * as React from 'react';
import { useCallback, useRef, useState } from 'react';
import Button, { Props as ButtonProps } from './Button';

import styles from './DelayedButton.module.css';

/**
 * Use a DelayedButton to trigger a risky action. When clicking the button, the onClick method will be triggered after a preset delay. During the delay, the user
 * can click the button again to cancel the action.
 */
const DelayedButton: React.FC<
  ButtonProps & {
    /** How long to wait until invoking the onClick callback. */
    delaySeconds: number;

    /** The label to show during the delay. This should indicate to the user that the action can be cancelled. */
    cancelLabel?: React.ReactNode;
  }
> = (props) => {
  const { onClick, delaySeconds, cancelLabel = 'Cancel' } = props;
  const tick = useRef<any>(null);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isTicking, setIsTicking] = useState(false);
  const onButtonClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      if (isTicking) {
        tick.current && clearInterval(tick.current);
        setTimeLeft(0);
        setIsTicking(false);
        return;
      }

      const targetTime = new Date().getTime() + 1000 * delaySeconds;
      setTimeLeft(1000 * delaySeconds);
      setIsTicking(true);

      tick.current = setInterval(() => {
        const now = new Date().getTime();
        if (now >= targetTime) {
          tick.current && clearInterval(tick.current);
          setTimeLeft(0);
          setIsTicking(false);
          onClick(e);
          return;
        }

        setTimeLeft(targetTime - now);
      }, 50);
    },
    [onClick, delaySeconds, tick, setTimeLeft, setIsTicking, isTicking]
  );

  return (
    <Button
      {...props}
      onClick={onButtonClick}
      label={
        <div className={styles.container}>
          {isTicking ? cancelLabel : props.label}
          <div className={styles.progress}>
            {timeLeft > 0 && (
              <progress max={1000 * delaySeconds} value={timeLeft} />
            )}
          </div>
        </div>
      }
    />
  );
};

export default DelayedButton;
