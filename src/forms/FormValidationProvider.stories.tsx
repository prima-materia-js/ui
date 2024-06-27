import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { FormValidationProvider } from './FormValidationProvider';
import TextInput from './TextInput';
import MultiSelect from './MultiSelect';
import TextArea from './TextArea';
import ButtonContainer from './ButtonContainer';
import Button from './Button';
import FormValidationSummary from './FormValidationSummary';

const meta: Meta<typeof FormValidationProvider> = {
  component: FormValidationProvider,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof FormValidationProvider>;

export const Example: Story = {
  render: (args) => {
    const [ip, setIP] = useState<string>('');
    const [platforms, setPlatforms] = useState<string[]>([]);
    const [about, setAbout] = useState('');

    return (
      <FormValidationProvider>
        <TextInput
          label="IP address"
          helpText="Type an IPv4 address"
          value={ip}
          onChange={setIP}
          onValidate={(value) => {
            if (
              /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
                value
              )
            ) {
              return null;
            } else {
              return 'Not a valid IPv4 address.';
            }
          }}
        />

        <TextArea
          label="About this app"
          helpText="Minimum 10 characters"
          value={about}
          onChange={setAbout}
          onValidate={(value) =>
            value.length >= 10
              ? null
              : `${10 - value.length} more characters needed`
          }
        />

        <MultiSelect
          helpText="Which platforms will this app target? (Select at least 2)"
          label="Platform"
          onChange={setPlatforms}
          selectedItems={platforms}
          onValidate={(items) =>
            items.length >= 2 ? null : 'Select at least 2 platforms'
          }
          options={[
            {
              header: 'Mobile',
              items: [
                {
                  label: 'Android',
                  value: 'android',
                },
                {
                  label: 'iOS',
                  value: 'ios',
                },
              ],
            },
            {
              header: 'Desktop',
              items: [
                {
                  label: 'Linux',
                  value: 'linux',
                },
                {
                  label: 'MacOS',
                  value: 'macos',
                },
                {
                  label: 'Windows',
                  value: 'windows',
                },
              ],
            },
          ]}
        />

        <FormValidationSummary />

        <ButtonContainer>
          <Button
            primary
            label="Save changes"
            onClick={() => {}}
            disableIfFormValidationFails
          />
        </ButtonContainer>
      </FormValidationProvider>
    );
  },
  args: {},
};
