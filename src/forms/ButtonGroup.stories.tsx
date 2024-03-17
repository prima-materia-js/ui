import type { Meta, StoryObj } from "@storybook/react";
import ButtonGroup from "./ButtonGroup";
import { useState } from "react";

const meta: Meta<typeof ButtonGroup> = {
  component: ButtonGroup,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ButtonGroup>;

export const Example: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | null>(null);
    return (
      <ButtonGroup
        items={[
          {
            label: "Small",
            value: "s",
          },
          {
            label: "Medium",
            value: "m",
          },
          {
            label: "Large",
            value: "l",
          },
        ]}
        value={value}
        onChange={setValue}
        label="Size"
      />
    );
  },
  args: {},
};

export const ExampleWithHelpText: Story = {
  render: (args) => {
    const [value, setValue] = useState<string | null>(null);
    return (
      <ButtonGroup
        items={[
          {
            label: "Small",
            value: "s",
          },
          {
            label: "Medium",
            value: "m",
          },
          {
            label: "Large",
            value: "l",
          },
        ]}
        value={value}
        onChange={setValue}
        label="Size"
        helpText="Choose your t-shirt size"
      />
    );
  },
  args: {},
};
