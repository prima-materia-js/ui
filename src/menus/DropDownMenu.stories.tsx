import type { Meta, StoryObj } from '@storybook/react';
import DropDownMenu from './DropDownMenu';
import { FaLanguage, FaSignOutAlt, FaUser } from 'react-icons/fa';
import { PiPassword } from 'react-icons/pi';

const meta: Meta<typeof DropDownMenu> = {
  component: DropDownMenu,
  tags: ['autodocs'],

  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 300,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof DropDownMenu>;

// Avoiding inlining JSX in prop to avoid known issue - https://github.com/storybookjs/storybook/issues/17720
const iconLang = <FaLanguage />,
  iconUser = <FaUser />,
  iconPassword = <PiPassword />,
  iconSignOut = <FaSignOutAlt />;

export const Example: Story = {
  render: (args) => (
    <DropDownMenu
      label={args.label}
      items={[
        {
          key: 'lang',
          label: 'Language',
          icon: iconLang,
          onClick: () => {},
        },
        {
          key: 'account',
          label: 'My account',
          icon: iconUser,
          onClick: () => {},
        },
        {
          key: 'password',
          label: 'Password',
          icon: iconPassword,
          onClick: () => {},
        },
        {
          key: 'signout',
          label: 'Sign out',
          icon: iconSignOut,
          onClick: () => {},
        },
      ]}
    />
  ),
  args: {
    label: 'Options',
  },
};
