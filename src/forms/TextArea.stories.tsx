import type { Meta, StoryObj } from '@storybook/react';
import TextArea from './TextArea';
import { useState } from 'react';

const meta: Meta<typeof TextArea> = {
  component: TextArea,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TextArea>;

export const Example: Story = {
  render: (args) => {
    const [value, setValue] = useState('');

    return <TextArea {...args} value={value} onChange={setValue} />;
  },
  args: {
    allowResize: true,
    autoGrow: false,
    helpText: 'Tell us about yourself',
    label: 'Bio',
    onChange: () => {},
    rows: 5,
    showLineNumbers: false,
    value: '',
    placeholder: '',
  },
};

export const AutoGrowing: Story = {
  render: (args) => {
    const [value, setValue] = useState('');

    return <TextArea {...args} value={value} onChange={setValue} />;
  },
  args: {
    autoGrow: true,
    helpText: 'Describe what has changed',
    label: 'Release notes',
  },
};

export const WithLineNumbers: Story = {
  render: (args) => {
    const [value, setValue] = useState('{\n\t"version": "1.0"\n}');

    return <TextArea {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Configuration',
    showLineNumbers: true,
  },
};
