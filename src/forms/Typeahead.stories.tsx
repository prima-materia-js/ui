import type { Meta, StoryObj } from '@storybook/react';
import TypeaheadTextInput from './TypeaheadTextInput';
import { useState } from 'react';

const meta: Meta<typeof TypeaheadTextInput> = {
  component: TypeaheadTextInput,
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

type Story = StoryObj<typeof TypeaheadTextInput>;

export const Example: Story = {
  render: (args) => {
    const [value, setValue] = useState('');

    return <TypeaheadTextInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    disabled: false,
    focusOnLoad: false,
    helpText: 'Who should rule the Iron Throne?',
    label: 'Favourite House',
    onChange: () => {},
    onSelectItem: () => {},
    onFocus: () => {},
    options: [
      'Arryn',
      'Baratheon',
      'Bolton',
      'Frey',
      'Greyjoy',
      'Lannister',
      'Martell',
      'Stark',
      'Targaryen',
      'Tyrell',
      'Tully',
    ],
    maxTypeaheadOptions: 5,
    placeholder: 'Stark, Lannister, ...',
    prefix: null,
    typeaheadTriggerChars: 1,
    value: '',
  },
};
