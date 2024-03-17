import type { Meta, StoryObj } from '@storybook/react';
import MultiSelect from './MultiSelect';
import { useState } from 'react';

const meta: Meta<typeof MultiSelect> = {
  component: MultiSelect,
  tags: ['autodocs'],

  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 350,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof MultiSelect>;

export const Example: Story = {
  render: (args) => {
    const [value, setValue] = useState<string[]>([]);

    return <MultiSelect {...args} selectedItems={value} onChange={setValue} />;
  },
  args: {
    label: 'Platform',
    helpText: 'Which platforms will this app target?',
    options: [
      {
        header: 'Mobile',
        items: [
          { label: 'Android', value: 'android' },
          { label: 'iOS', value: 'ios' },
        ],
      },
      {
        header: 'Desktop',
        items: [
          { label: 'Linux', value: 'linux' },
          { label: 'MacOS', value: 'macos' },
          { label: 'Windows', value: 'windows' },
        ],
      },
    ],
  },
};
