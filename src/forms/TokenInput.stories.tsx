import type { Meta, StoryObj } from '@storybook/react';
import TokenInput from './TokenInput';
import { useState } from 'react';

const meta: Meta<typeof TokenInput> = {
  component: TokenInput,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TokenInput>;

export const Example: Story = {
  render: (args) => {
    const [tokens, setTokens] = useState<string[]>([
      'something',
      'something else',
    ]);

    return <TokenInput {...args} value={tokens} onChange={setTokens} />;
  },
  args: {
    disabled: false,
    focusOnLoad: false,
    helpText: '',
    label: 'Add some tags to this task',
    maxSuggestions: 10,
    placeholder: '',
    suggestions: [],
    typeaheadTriggerChars: 1,
    forbidDuplicates: true,
    forbidCaseInsensitiveDuplicates: true,
    restrictToSuggestions: false,
  },
};

export const DisabledField: Story = {
  render: (args) => (
    <TokenInput
      label="Add some tags to this task"
      value={['token 1', 'token 2']}
      onChange={() => {}}
      disabled
    />
  ),
  args: {},
};

export const WithPlaceholder: Story = {
  render: (args) => {
    const [tokens, setTokens] = useState<string[]>(['#feature', '#low-pri']);

    return (
      <TokenInput
        label="Add some tags to this task"
        value={tokens}
        onChange={setTokens}
        placeholder="#example"
      />
    );
  },
  args: {},
};

export const WithSuggestions: Story = {
  render: (args) => {
    const [tokens, setTokens] = useState<string[]>([]);

    return (
      <TokenInput
        {...args}
        label="Select some planets"
        value={tokens}
        onChange={setTokens}
        suggestions={[
          'Earth',
          'Venus',
          'Mercury',
          'Mars',
          'Neptune',
          'Jupiter',
          'Uranus',
          'Saturn',
          'Arrakis',
        ]}
      />
    );
  },
  args: {
    maxSuggestions: 10,
    typeaheadTriggerChars: 1,
    restrictToSuggestions: false,
  },
};
