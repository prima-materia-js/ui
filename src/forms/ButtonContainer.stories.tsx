import type { Meta, StoryObj } from '@storybook/react';
import ButtonContainer from './ButtonContainer';
import Button from './Button';
import Card from '../containers/Card';
import TextInput from './TextInput';
import TextArea from './TextArea';

const meta: Meta<typeof ButtonContainer> = {
  component: ButtonContainer,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof ButtonContainer>;

export const Example: Story = {
  render: (args) => (
    <>
      <ButtonContainer>
        <Button label="Save" onClick={() => {}} />
        <Button label="Cancel" onClick={() => {}} />
      </ButtonContainer>
    </>
  ),
  args: {},
};

export const ExampleInCard: Story = {
  render: (args) => (
    <>
      <Card>
        <TextInput
          label="Display name"
          helpText="Your name as it should appear on your profile."
          value=""
          onChange={() => {}}
        />
        <TextArea
          label="Bio"
          helpText="Tell everyone about yourself"
          value=""
          onChange={() => {}}
        />
        <ButtonContainer>
          <Button label="Save" onClick={() => {}} />
          <Button label="Cancel" onClick={() => {}} />
        </ButtonContainer>
      </Card>
    </>
  ),
  args: {},
};
