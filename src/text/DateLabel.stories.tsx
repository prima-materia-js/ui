import type { Meta, StoryObj } from "@storybook/react";
import DateLabel from "./DateLabel";

const meta: Meta<typeof DateLabel> = {
  component: DateLabel,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof DateLabel>;

export const Example: Story = {
  args: {
    date: new Date(),
    format: "E d LLL Y",
  },
};
