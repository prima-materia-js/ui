import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';
import { useState } from 'react';
import { FaSave, FaThumbsUp } from 'react-icons/fa';

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const BasicButton: Story = {
  render: (args) => <Button {...args} onClick={() => {}} />,
  args: {
    label: 'Click me',
  },
};

export const ButtonSizes: Story = {
  render: (args) => (
    <>
      <Button
        {...args}
        label={`small: ${args.label}`}
        onClick={() => {}}
        size="small"
      />
      <Button
        {...args}
        label={`normal: ${args.label}`}
        onClick={() => {}}
        size="normal"
      />
    </>
  ),
  args: {
    label: 'Click me',
  },
};

export const PrimaryButton: Story = {
  render: (args) => (
    <Button {...args} label={args.label} onClick={() => {}} primary />
  ),
  args: {
    label: 'Click me',
  },
};

export const DisabledButton: Story = {
  render: (args) => (
    <Button {...args} label={args.label} onClick={() => {}} disabled />
  ),
  args: {
    label: 'Click me',
  },
};

export const SubtleButton: Story = {
  render: (args) => (
    <Button {...args} label={args.label} onClick={() => {}} subtle />
  ),
  args: {
    label: 'Click me',
  },
};

export const ButtonColours: Story = {
  render: (args) => (
    <>
      <Button
        {...args}
        label={`normal: ${args.label}`}
        onClick={() => {}}
        colour="normal"
      />
      <Button
        {...args}
        label={`highlight: ${args.label}`}
        onClick={() => {}}
        colour="highlight"
      />
      <Button
        {...args}
        label={`danger: ${args.label}`}
        onClick={() => {}}
        colour="danger"
      />
    </>
  ),
  args: {
    label: 'Click me',
  },
};

export const ButtonWithTooltip: Story = {
  render: (args) => (
    <Button
      {...args}
      label={args.label}
      onClick={() => {}}
      tooltip={args.tooltip}
      tooltipDirection={args.tooltipDirection}
    />
  ),
  args: {
    label: 'Click me',
    tooltip: 'This is a tooltip.',
    tooltipDirection: 'down',
  },
};

export const ButtonWithSpinner: Story = {
  render: (args) => {
    const [showSpinner, setShowSpinner] = useState(false);
    return (
      <Button
        {...args}
        label={args.label}
        showSpinner={showSpinner}
        onClick={() => {
          setShowSpinner(true);
          setTimeout(() => {
            setShowSpinner(false);
          }, 3000);
        }}
      />
    );
  },
  args: {
    label: 'Click me',
  },
};

export const ButtonWithIcon: Story = {
  render: (args) => {
    const [showSpinner, setShowSpinner] = useState(false);
    return (
      <Button
        {...args}
        label={
          <>
            <FaSave /> {args.label}
          </>
        }
        showSpinner={showSpinner}
        onClick={() => {
          setShowSpinner(true);
          setTimeout(() => {
            setShowSpinner(false);
          }, 3000);
        }}
      />
    );
  },
  args: {
    label: 'Save',
  },
};
