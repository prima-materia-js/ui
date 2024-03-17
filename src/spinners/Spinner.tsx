import React from 'react';

type SpinnerSpeed = 'fast' | 'slow';

function speedSwitch(speed: SpinnerSpeed) {
  if (speed === 'fast') return 600;
  if (speed === 'slow') return 900;
  return 750;
}

/**
 * Use Spinner to show a spinning loading indicator.
 */
const Spinner: React.FC<{
  /** The color of the spinner. */
  color?: string;

  /** The speed at which the spinner spins. */
  speed?: SpinnerSpeed;

  /** The gap of the spinner's circle. Default to 4. */
  gap?: 1 | 2 | 3 | 4 | 5;

  /** The thickness of the spinner's circle. Defaults to 4. */
  thickness?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

  /** The size of the spinner. Use any CSS unit. Defaults to 1rem. */
  size?: string;
}> = ({
  color = 'rgba(0,0,0,0.4)',
  speed = 'slow',
  gap = 4,
  thickness = 4,
  size = '1rem',
  ...props
}) => (
  <svg
    height={size}
    width={size}
    {...props}
    style={{ animationDuration: `${speedSwitch(speed)}ms` }}
    className="__react-svg-spinner_circle"
    role="img"
    aria-labelledby="title desc"
    viewBox="0 0 32 32"
  >
    <title id="title">Circle loading spinner</title>
    <desc id="desc">Image of a partial circle indicating "loading."</desc>
    <style
      dangerouslySetInnerHTML={{
        __html: `
      .__react-svg-spinner_circle{
          transition-property: transform;
          animation-name: __react-svg-spinner_infinite-spin;
          animation-iteration-count: infinite;
          animation-timing-function: linear;
      }
      @keyframes __react-svg-spinner_infinite-spin {
          from {transform: rotate(0deg)}
          to {transform: rotate(360deg)}
      }
    `,
      }}
    />
    <circle
      role="presentation"
      cx={16}
      cy={16}
      r={14 - thickness / 2}
      stroke={color}
      fill="none"
      strokeWidth={thickness}
      strokeDasharray={Math.PI * 2 * (11 - gap)}
      strokeLinecap="round"
    />
  </svg>
);

export default Spinner;
