import * as React from 'react';

type TextSize =
  | 'tiny'
  | 'xsmall'
  | 'small'
  | 'medium'
  | 'large'
  | 'xlarge'
  | 'xxlarge'
  | 'huge';

type TextColour =
  | 'primary'
  | 'secondary'
  | 'subtle'
  | 'positive'
  | 'negative'
  | 'heading';

type TextWeight = 'light' | 'normal' | 'semibold' | 'bold';

export type Props = {
  /** The color of the text. */
  color?: TextColour;

  children: React.ReactNode;

  /** The size of the text. */
  size?: TextSize;

  /** The font weight of the text. */
  weight?: TextWeight;
};

const SIZE_MAPPING: { [key in TextSize]: string } = {
  tiny: '0.65rem',
  xsmall: '0.75rem',
  small: '0.85rem',
  medium: '1rem',
  large: '1.25rem',
  xlarge: '1.45rem',
  xxlarge: '1.8rem',
  huge: '2.2rem',
};

const COLOUR_MAPPING: { [key in TextColour]: string } = {
  primary: 'var(--color-text)',
  secondary: 'var(--color-text-p37)',
  subtle: 'var(--color-text-p62)',
  positive: 'var(--color-highlight-green)',
  negative: 'var(--color-highlight-red)',
  heading: 'var(--color-text-p25)',
};

const WEIGHT_MAPPING: { [key in TextWeight]: number } = {
  light: 200,
  normal: 400,
  semibold: 600,
  bold: 800,
};

/**
 * Use Text to apply formatting to some text.
 */
const Text: React.FC<Props> = ({
  children,
  size = 'medium',
  color = 'primary',
  weight = 'normal',
}) => {
  return (
    <span
      style={{
        color: COLOUR_MAPPING[color],
        fontSize: SIZE_MAPPING[size],
        fontWeight: WEIGHT_MAPPING[weight],
      }}
    >
      {children}
    </span>
  );
};

export default Text;
