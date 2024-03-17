import type { Meta, StoryObj } from '@storybook/react';
import Paragraph from './Paragraph';

const meta: Meta<typeof Paragraph> = {
  component: Paragraph,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Paragraph>;

export const Example: Story = {
  render: (args) => (
    <>
      <Paragraph {...args}>
        Single wringable neck mumbo jumbo, but productize, or cta. Time vampire
        we have to leverage up the messaging, yet pig in a python. We've got to
        manage that low hanging fruit i called the it department about that
        ransomware because of the old antivirus, but he said that we were using
        avast 2021. Pro-sumer software scope creep let's see if we can dovetail
        these two projects. C-suite 4-blocker, but prethink, yet organic growth
        we need a recap by eod, cob or whatever comes first, or we have to
        leverage up the messaging.
      </Paragraph>
      <Paragraph {...args}>
        We need to leverage our synergies offline this discussion back of the
        net, nor we've got kpis for that, and what's the status on the
        deliverables for eow? i dont care if you got some copy, why you dont use
        officeipsumcom or something like that ? face time. It's not hard guys
        streamline sea change, quick-win. Deep dive quick sync corporate
        synergy, or window of opportunity drink from the firehose, for offline
        this discussion workflow ecosystem. We're all in this together, even if
        our businesses function differently agile, or punter can you slack it to
        me?. Dog and pony show baseline. We need to socialize the comms with the
        wider stakeholder community blue sky thinking get in the driver's seat
        tread it daily we need to crystallize a plan.
      </Paragraph>
    </>
  ),
  args: { textAlign: 'left' },
};
