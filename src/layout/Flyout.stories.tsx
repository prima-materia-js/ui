import type { Meta, StoryObj } from '@storybook/react';
import Flyout from './Flyout';
import { useState } from 'react';
import Button from '../forms/Button';
import Paragraph from '../text/Paragraph';

const meta: Meta<typeof Flyout> = {
  component: Flyout,
  tags: ['autodocs'],

  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 500,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Flyout>;

export const Example: Story = {
  render: (args) => {
    const [visible, setVisible] = useState(false);

    return (
      <>
        <Button
          label="Show flyout"
          onClick={() => {
            setVisible(!visible);
          }}
        />
        {visible && (
          <Flyout
            header="This is a flyout"
            onClose={() => {
              setVisible(false);
            }}
          >
            <Paragraph>
              This is a flyout. Click the arrow above to close.
            </Paragraph>
          </Flyout>
        )}
      </>
    );
  },
  args: {},
};
