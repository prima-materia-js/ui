import type { Meta, StoryObj } from '@storybook/react';
import FileInput from './FileInput';

const meta: Meta<typeof FileInput> = {
  component: FileInput,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof FileInput>;

export const Example: Story = {
  render: (args) => <FileInput {...args} onFileSelected={() => {}} />,
  args: {
    label: 'Profile photo',
    prompt: 'Choose a new profile photo',
    helpText: 'This photo will appear on your profile page, and on your posts.',
    accept: 'image/png, image/jpeg',
  },
};
