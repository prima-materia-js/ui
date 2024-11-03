import type { Meta, StoryObj } from '@storybook/react';
import { GuidedFlow, GuidedFlowStep } from './GuidedFlow';
import { useState } from 'react';
import TextInput from '../forms/TextInput';
import Select from '../forms/Select';
import TextArea from '../forms/TextArea';
import Card from './Card';
import ButtonContainer from '../forms/ButtonContainer';
import Button from '../forms/Button';

const meta: Meta<typeof GuidedFlow> = {
  component: GuidedFlow,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof GuidedFlow>;

export const Example: Story = {
  render: (args) => {
    const [step, setStep] = useState(0);

    return (
      <Card
        footerContent={
          <ButtonContainer>
            <Button
              label="Previous"
              onClick={() => {
                setStep((curr) => curr - 1);
              }}
              disabled={step <= 0}
            />

            <Button
              label="Next"
              onClick={() => {
                setStep((curr) => curr + 1);
              }}
              disabled={step >= 2}
            />
          </ButtonContainer>
        }
      >
        <GuidedFlow activeStep={step}>
          <GuidedFlowStep
            title="Personal details"
            subtitle="Tell us about yourself"
          >
            <TextInput label="Name" value="" onChange={() => {}} />
            <TextInput label="Email address" value="" onChange={() => {}} />
          </GuidedFlowStep>

          <GuidedFlowStep title="Account information">
            <TextInput
              label="Username"
              value=""
              onChange={() => {}}
              prefix="@"
            />
          </GuidedFlowStep>

          <GuidedFlowStep
            title="Usage details"
            subtitle="Tell us more about your use case"
          >
            <Select
              options={[
                { label: 'Personal use', value: 'p' },
                { label: 'Commercial use', value: 'c' },
                { label: 'Open-source/non-profit use', value: 'n' },
              ]}
              label="Usage category"
              value={null}
              onChange={() => {}}
            />

            <TextArea
              label="Describe your use case"
              value=""
              onChange={() => {}}
            />
          </GuidedFlowStep>
        </GuidedFlow>
      </Card>
    );
  },
  args: {},
};
