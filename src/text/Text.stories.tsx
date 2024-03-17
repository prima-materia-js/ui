import type { Meta, StoryObj } from '@storybook/react';
import Text from './Text';

const meta: Meta<typeof Text> = {
  component: Text,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Text>;

export const TextSizes: Story = {
  render: (args) => (
    <>
      <Text {...args} size="tiny">
        tiny: {args.children}
      </Text>
      <br />
      <Text {...args} size="xsmall">
        xsmall: {args.children}
      </Text>
      <br />
      <Text {...args} size="small">
        small: {args.children}
      </Text>
      <br />
      <Text {...args} size="medium">
        medium: {args.children}
      </Text>
      <br />
      <Text {...args} size="large">
        large: {args.children}
      </Text>
      <br />
      <Text {...args} size="xlarge">
        xlarge: {args.children}
      </Text>
      <br />
      <Text {...args} size="xxlarge">
        xxlarge: {args.children}
      </Text>
      <br />
      <Text {...args} size="huge">
        huge: {args.children}
      </Text>
      <br />
    </>
  ),
  args: {
    children: 'This is an example sentence.',
  },
};

export const TextColours: Story = {
  render: (args) => (
    <>
      <Text {...args} color="primary">
        primary: {args.children}
      </Text>
      <br />
      <Text {...args} color="secondary">
        secondary: {args.children}
      </Text>
      <br />
      <Text {...args} color="subtle">
        subtle: {args.children}
      </Text>
      <br />
      <Text {...args} color="positive">
        positive: {args.children}
      </Text>
      <br />
      <Text {...args} color="negative">
        negative: {args.children}
      </Text>
      <br />
      <Text {...args} color="heading">
        heading: {args.children}
      </Text>
      <br />
    </>
  ),
  args: {
    children: 'This is an example sentence.',
  },
};

export const TextWeights: Story = {
  render: (args) => (
    <>
      <Text {...args} weight="normal">
        normal: {args.children}
      </Text>
      <br />
      <Text {...args} weight="light">
        light: {args.children}
      </Text>
      <br />
      <Text {...args} weight="semibold">
        semibold: {args.children}
      </Text>
      <br />
      <Text {...args} weight="bold">
        bold: {args.children}
      </Text>
      <br />
    </>
  ),
  args: {
    children: 'This is an example sentence.',
  },
};
