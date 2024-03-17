import type { Meta, StoryObj } from '@storybook/react';
import Grid from './Grid';
import ExampleContent from '../storybook/ExampleContent';

const meta: Meta<typeof Grid> = {
  component: Grid,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Grid>;

export const Example: Story = {
  render: (args) => (
    <Grid {...args}>
      <ExampleContent>1</ExampleContent>
      <ExampleContent>2</ExampleContent>
      <ExampleContent>3</ExampleContent>
      <ExampleContent>4</ExampleContent>
      <ExampleContent>5</ExampleContent>
      <ExampleContent>6</ExampleContent>
    </Grid>
  ),
  args: {
    columns: 3,
  },
};
