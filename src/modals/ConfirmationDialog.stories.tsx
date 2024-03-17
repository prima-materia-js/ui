import type { Meta, StoryObj } from '@storybook/react';
import ConfirmationDialog from './ConfirmationDialog';
import Button from '../forms/Button';
import { useState } from 'react';
import Paragraph from '../text/Paragraph';

const meta: Meta<typeof ConfirmationDialog> = {
  component: ConfirmationDialog,
  tags: ['autodocs'],

  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 400,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ConfirmationDialog>;

export const Example: Story = {
  render: (args) => {
    const [showDialog, setShowDialog] = useState(false);
    const [result, setResult] = useState('');

    return (
      <>
        <Button
          label="Show dialog"
          onClick={() => {
            setShowDialog(true);
          }}
        />
        {result && <Paragraph>{result}</Paragraph>}
        <ConfirmationDialog
          {...args}
          visible={showDialog}
          onCancel={() => {
            setShowDialog(false);
            setResult('You clicked No.');
          }}
          onConfirm={() => {
            setShowDialog(false);
            setResult('You clicked Yes.');
          }}
        />
      </>
    );
  },
  args: {
    message: 'Are you sure you want to sign out?',
    title: 'Sign out?',
    cancelLabel: 'No',
    confirmLabel: 'Yes',
    showSpinner: false,
    cancelOnEscKey: false,
  },
};
