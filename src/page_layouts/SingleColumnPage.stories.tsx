import type { Meta, StoryObj } from '@storybook/react';
import SingleColumnPage from './SingleColumnPage';
import BrowserFrame from '../storybook/BrowserFrame';
import ExampleContent from '../storybook/ExampleContent';

const meta: Meta<typeof SingleColumnPage> = {
  component: SingleColumnPage,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SingleColumnPage>;

export const Example: Story = {
  render: (args) => (
    <BrowserFrame>
      <SingleColumnPage>
        <ExampleContent>Content</ExampleContent>
      </SingleColumnPage>
    </BrowserFrame>
  ),
};
