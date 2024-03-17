import type { Meta, StoryObj } from '@storybook/react';
import ContextMenuProvider from './ContextMenuProvider';
import { FaCopy, FaPaste, FaPencilAlt, FaTrashAlt } from 'react-icons/fa';
import ExampleContent from '../storybook/ExampleContent';

const meta: Meta<typeof ContextMenuProvider> = {
  component: ContextMenuProvider,
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

type Story = StoryObj<typeof ContextMenuProvider>;

export const Example: Story = {
  render: () => (
    <ContextMenuProvider
      items={[
        {
          key: 'rename',
          label: 'Rename',
          icon: <FaPencilAlt />,
          onClick: () => {},
        },
        {
          key: 'copy',
          label: 'Copy',
          icon: <FaCopy />,
          onClick: () => {},
        },
        {
          key: 'paste',
          label: 'Paste',
          icon: <FaPaste />,
          onClick: () => {},
        },
        {
          key: 'delete',
          label: 'Delete',
          icon: <FaTrashAlt />,
          onClick: () => {},
        },
      ]}
    >
      <ExampleContent>Right-click here</ExampleContent>
    </ContextMenuProvider>
  ),
};
