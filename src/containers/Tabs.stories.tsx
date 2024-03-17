import type { Meta, StoryObj } from '@storybook/react';
import { TabContainer, Tab } from './TabContainer';

const meta: Meta<typeof TabContainer> = {
  component: TabContainer,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof TabContainer>;

export const ExampleTabs: Story = {
  render: () => (
    <TabContainer>
      <Tab id="tab_1" title="Tab 1">
        <div>This is some content in tab 1.</div>
      </Tab>
      <Tab id="tab_2" title="Tab 2">
        <div>This is some content in tab 2.</div>
      </Tab>
      <Tab id="tab_3" title="Tab 3">
        <div>This is some content in tab 3.</div>
      </Tab>
    </TabContainer>
  ),
};
