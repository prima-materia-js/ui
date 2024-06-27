import type { Meta, StoryObj } from '@storybook/react';
import TextInput from './TextInput';
import { useState } from 'react';

const meta: Meta<typeof TextInput> = {
  component: TextInput,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TextInput>;

export const Example: Story = {
  render: (args) => {
    const [value, setValue] = useState('');

    return <TextInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Name',
    helpText: 'Enter your name as it appears on your ID',
    autoComplete: '',
    focusOnLoad: false,
    onChange: () => {},
    onHitEnter: () => {},
    onFocus: () => {},
    placeholder: '',
    prefix: '',
    type: 'text',
    value: '',
  },
};

export const WithPrefix: Story = {
  render: (args) => {
    const [value, setValue] = useState('');

    return <TextInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Website',
    helpText: 'Provide the URL of your website',
    prefix: 'https://',
  },
};

export const PasswordInput: Story = {
  render: (args) => {
    const [value, setValue] = useState('');

    return <TextInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Password',
    type: 'password',
  },
};

export const WithValidation: Story = {
  render: (args) => {
    const [value, setValue] = useState('');

    return <TextInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'IP Address',
    helpText: 'Type an IPv4 address',
    onValidate: (value) => {
      if (
        /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
          value
        )
      ) {
        return null;
      } else {
        return 'Not a valid IPv4 address.';
      }
    },
  },
};
