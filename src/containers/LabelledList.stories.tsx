import type { Meta, StoryObj } from '@storybook/react';
import { LabelledList, LabelledListSection } from './LabelledList';
import Checkbox from '../forms/Checkbox';
import Button from '../forms/Button';
import ButtonContainer from '../forms/ButtonContainer';
import Card from './Card';

const meta: Meta<typeof LabelledList> = {
  component: LabelledList,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof LabelledList>;

export const Example: Story = {
  render: (args) => (
    <>
      <LabelledList>
        <LabelledListSection
          id="s1"
          title="Communication preferences"
          subtitle="How would you like us to reach out to you?"
        >
          <Checkbox label="Email" checked={false} onChange={() => {}} />
          <Checkbox label="Phone" checked={false} onChange={() => {}} />
          <Checkbox label="Snail mail" checked={false} onChange={() => {}} />
          <Checkbox
            label="Carrier pigeon"
            checked={false}
            onChange={() => {}}
          />
        </LabelledListSection>
        <LabelledListSection id="s2" title="Email address">
          Your saved email address is <strong>example@email.com</strong>.
          <br />
          <ButtonContainer>
            <Button label="Change" onClick={() => {}} />
          </ButtonContainer>
        </LabelledListSection>
      </LabelledList>
    </>
  ),
  args: {},
};

export const ExampleWithCard: Story = {
  render: (args) => (
    <>
      <Card title="Account security">
        <LabelledList>
          <LabelledListSection id="c1" title="Change password">
            You last changed your password 45 days ago.
            <ButtonContainer>
              <Button label="Change password now" onClick={() => {}} />
            </ButtonContainer>
          </LabelledListSection>

          <LabelledListSection
            id="c2"
            title="Two-factor authentication"
            subtitle="Using two-factor authentication adds a layer of security to your account."
          >
            Two-factor authentication is <strong>not enabled</strong>.
            <ButtonContainer>
              <Button label="Turn on 2FA" onClick={() => {}} />
            </ButtonContainer>
          </LabelledListSection>
        </LabelledList>
      </Card>
    </>
  ),
  args: {},
};
