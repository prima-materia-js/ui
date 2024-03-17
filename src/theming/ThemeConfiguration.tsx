import {
  PropsWithChildren,
  createContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import Values from 'values.js';

type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

type Color = RGB | RGBA | HEX;

export type Theme = {
  /** The main accent color used in this app. This will be used to highlight content or to draw the user's attention. */
  primaryAccentColor?: Color;

  /** The base color of form inputs. */
  formInputBaseColor?: Color;

  /** The color of the main body text in this app. */
  bodyTextColor?: Color;

  /** The color of the page background in this app. */
  backgroundColor?: Color;

  /** The color of content surfaces such as cards in this app.  */
  cardColor?: Color;

  /** The color of the navigation sidebar shown if you use a PageWithLeftSidebar page layout. */
  sidebarColor?: Color;
};

export const ThemeConfigurationContext = createContext<{
  activeTheme: 'light' | 'dark';
  toggleTheme: () => void;
  setTheme: (theme: 'light' | 'dark') => void;
}>({
  activeTheme: 'light',
  toggleTheme: () => {},
  setTheme: (_) => {},
});

type Props = {
  lightTheme?: Theme;
  darkTheme?: Theme;
};

export const DEFAULT_LIGHT_THEME: Theme = {
  primaryAccentColor: '#256eff',
  formInputBaseColor: '#eef0f2',
  bodyTextColor: '#080b0e',
  backgroundColor: '#eef0f2',
  cardColor: '#fefefe',
  sidebarColor: '#d0d2d4',
};
export const DEFAULT_DARK_THEME: Theme = {
  primaryAccentColor: '#4f85f1',
  formInputBaseColor: '#eef0f2',
  bodyTextColor: '#f0f0f0',
  backgroundColor: '#343434',
  cardColor: '#5e5e5e',
  sidebarColor: '#2e2e2e',
};

const DEFAULT_STEP = 12.5;

const getShades = (
  baseColour: string,
  key: string,
  tintsStep?: number,
  shadesStep?: number
): { [key: string]: string } => {
  const result = {
    [key]: baseColour,
  };

  try {
    const base = new Values(baseColour);
    if (tintsStep != null) {
      const tints = base.tints(tintsStep);
      tints
        .filter((t) => t.weight !== 100) // a 100% tint is just pure white.
        .map((t) => {
          result[`${key}-p${Math.floor(t.weight)}`] = t.hexString();
        });
    }
    if (shadesStep != null) {
      const shades = base.shades(shadesStep);
      shades
        .filter((t) => t.weight !== 100) // a 100% shade is just pure black
        .map((t) => {
          result[`${key}-n${Math.floor(t.weight)}`] = t.hexString();
        });
    }
  } catch (e) {
    console.warn(`Couldn't generate shade for base color ${baseColour}.`);
  }

  return result;
};

/**
 * Use ThemeConfiguration to apply a color scheme to this app.
 */
const ThemeConfiguration: React.FC<PropsWithChildren<Props>> = ({
  children,
  lightTheme = DEFAULT_LIGHT_THEME,
  darkTheme = DEFAULT_DARK_THEME,
}) => {
  const [activeTheme, setActiveTheme] = useState<'light' | 'dark'>('light');
  const toggleTheme = () => {
    setActiveTheme(activeTheme === 'light' ? 'dark' : 'light');
  };
  const setTheme = (theme: 'light' | 'dark') => {
    setActiveTheme(theme);
  };

  const currentTheme = activeTheme === 'light' ? lightTheme : darkTheme;
  const fallbackDefaultTheme =
    activeTheme === 'light' ? DEFAULT_LIGHT_THEME : DEFAULT_DARK_THEME;
  const {
    primaryAccentColor = fallbackDefaultTheme.primaryAccentColor!,
    formInputBaseColor = fallbackDefaultTheme.formInputBaseColor!,
    bodyTextColor = fallbackDefaultTheme.bodyTextColor!,
    backgroundColor = fallbackDefaultTheme.backgroundColor!,
    cardColor = fallbackDefaultTheme.cardColor!,
    sidebarColor = fallbackDefaultTheme.sidebarColor!,
  } = currentTheme;

  useEffect(() => {
    const style: { [key: string]: string } = {
      background: backgroundColor,
      color: bodyTextColor,
    };

    document.body.setAttribute(
      'style',
      Object.keys(style)
        .map((k) => `${k}:${style[k]} !important`)
        .join('; ')
    );

    // For react-storybook:
    const storyContainer = document.getElementsByClassName('docs-story');
    if (storyContainer.length > 0) {
      storyContainer[0].setAttribute(
        'style',
        Object.keys(style)
          .map((k) => `${k}:${style[k]} !important`)
          .join('; ')
      );
    }
  }, [backgroundColor, bodyTextColor]);

  const theme = useMemo(() => {
    return {
      ...getShades(
        primaryAccentColor,
        '--color-primary-accent',
        DEFAULT_STEP,
        DEFAULT_STEP
      ),
      ...getShades(
        formInputBaseColor,
        '--color-form-input',
        DEFAULT_STEP,
        DEFAULT_STEP
      ),
      ...getShades(bodyTextColor, '--color-text', DEFAULT_STEP),
      ...getShades(cardColor, '--color-card', undefined, DEFAULT_STEP),
      ...getShades(
        backgroundColor,
        '--color-background',
        undefined,
        DEFAULT_STEP
      ),

      '--color-box-shadow': activeTheme === 'light' ? '#687887' : '#ccd2d8',
      '--color-box-shadow-light':
        activeTheme === 'light' ? '#ccd2d8' : '#687887',

      ...getShades(sidebarColor, '--color-sidebar', undefined, DEFAULT_STEP),
    } as React.CSSProperties;
  }, [
    primaryAccentColor,
    formInputBaseColor,
    bodyTextColor,
    cardColor,
    backgroundColor,
    sidebarColor,
  ]);

  return (
    <ThemeConfigurationContext.Provider
      value={{ activeTheme, toggleTheme, setTheme }}
    >
      <span style={theme} className={`theme_${activeTheme}`}>
        {children}
      </span>
    </ThemeConfigurationContext.Provider>
  );
};

export default ThemeConfiguration;
