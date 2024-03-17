import type { Meta, StoryObj } from "@storybook/react";
import Spinner from "./Spinner";

const meta: Meta<typeof Spinner> = {
  component: Spinner,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const DefaultSpinner: Story = {
  render: () => <Spinner />,
};
