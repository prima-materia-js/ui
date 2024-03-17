import { useContext } from 'react';
import ButtonGroup from '../forms/ButtonGroup';
import { ThemeConfigurationContext } from './ThemeConfiguration';

/**
 * Use ThemeToggle to switch between light and dark mode.
 */
const ThemeToggle: React.FC<{}> = () => {
  const { setTheme, activeTheme } = useContext(ThemeConfigurationContext);

  return (
    <ButtonGroup
      items={[
        { label: 'Light', value: 'light' },
        { label: 'Dark', value: 'dark' },
      ]}
      value={activeTheme}
      onChange={(t) => {
        if (t === 'light' || t === 'dark') {
          setTheme(t);
        }
      }}
    />
  );
};

export default ThemeToggle;
