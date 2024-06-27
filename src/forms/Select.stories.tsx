import type { Meta, StoryObj } from '@storybook/react';
import Select from './Select';
import { useState } from 'react';

const meta: Meta<typeof Select> = {
  component: Select,
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

type Story = StoryObj<typeof Select>;

export const Example: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | null>(null);

    return <Select {...args} value={value} onChange={setValue} />;
  },
  args: {
    disabled: false,
    label: 'Region',
    helpText: 'Which geographical region are you in?',
    options: [
      { label: 'Africa', value: 'afr' },
      { label: 'Americas', value: 'amr' },
      { label: 'Asia', value: 'asi' },
      { label: 'Europe', value: 'eur' },
      { label: 'Middle-east', value: 'mes' },
    ],
  },
};
