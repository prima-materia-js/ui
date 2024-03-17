import type { Meta, StoryObj } from "@storybook/react";
import { Timeline, TimelineEntry } from "./Timeline";
import Card from "./Card";
import Paragraph from "../text/Paragraph";
import { FaBullhorn, FaBookSkull, FaCloudBolt } from "react-icons/fa6";

const meta: Meta<typeof Timeline> = {
  component: Timeline,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Timeline>;

export const BasicTimeline: Story = {
  render: (args) => (
    <Timeline title={args.title}>
      <TimelineEntry>
        Have bandwidth parallel path, so downselect, for what's the status on
        the deliverables for eow?, nor highlights build on a culture of
        contribution and inclusion.
      </TimelineEntry>
      <TimelineEntry>
        Focus on the customer journey increase the pipelines, but where do we
        stand on the latest client ask can you ballpark the cost per unit for
        me, so curate, show grit, so corporate synergy. Win-win-win.
      </TimelineEntry>
      <TimelineEntry>
        Can you put it into a banner that is not alarming, but eye catching and
        not too giant tiger team, so ultimate measure of success it's not hard
        guys offline this discussion.
      </TimelineEntry>
    </Timeline>
  ),
  args: {
    title: "Example timeline",
  },
};

export const TimelineWithCards: Story = {
  render: (args) => (
    <Timeline title={args.title}>
      <TimelineEntry>
        <Card>
          <Paragraph>
            Game-plan run it up the flagpole, ping the boss and circle back, yet
            value-added even dead cats bounce horsehead offer timeframe. You
            must be muted let's circle back tomorrow, for work flows
            technologically savvy. It's about managing expectations face time
            we're ahead of the curve on that one one-sheet put in in a deck for
            our standup today. Wheelhouse I have zero cycles for this, so we
            need this overall to be busier and more active. Create spaces to
            explore what's next paddle on both sides, for closing these latest
            prospects is like putting socks on an octopus, and conversational
            content let's schedule a standup during the sprint to review our
            kpis due diligence, high turnaround rate.
          </Paragraph>
        </Card>
      </TimelineEntry>
      <TimelineEntry>
        <Card>
          <Paragraph>
            Can you ballpark the cost per unit for me currying favour, or
            guerrilla marketing. Price point cannibalize cta, so future-proof
            going forward. We don't need to boil the ocean here going forward,
            but a loss a day will keep you focus streamline. Prepare yourself to
            swim with the sharks a loss a day will keep you focus, yet idea
            shower, but build on a culture of contribution and inclusion, but
            bench mark. We need to touch base off-line before we fire the new ux
            experience clear blue water fire up your browser you must be muted.
            Due diligence it's not hard guys circle back, for UI, but we need to
            have a Come to Jesus meeting with Phil about his attitude, and a
            loss a day will keep you focus.
          </Paragraph>
        </Card>
      </TimelineEntry>
      <TimelineEntry>
        <Card>
          <Paragraph>
            Your work on this project has been really impactful pig in a python,
            and quarterly sales are at an all-time low, so who's the goto on
            this job with the way forward , nor drive awareness to increase
            engagement. Viral engagement big data, for exposing new ways to
            evolve our design language thought shower, but we need to touch base
            off-line before we fire the new ux experience. Come up with
            something buzzworthy i have a hard stop in an hour and half, yet
            even dead cats bounce we need to think big start small and scale
            fast to energize our clients drill down no scraps hit the floor.
            Bake it in going forward, and 60% to 30% is a lot of persent the
            closest elephant is the most dangerous, so the last person we talked
            to said this would be ready, but knowledge process outsourcing.
          </Paragraph>
        </Card>
      </TimelineEntry>
    </Timeline>
  ),
  args: {
    title: "Example timeline",
  },
};

export const TimelineWithCustomIcons: Story = {
  render: (args) => (
    <Timeline title={args.title}>
      <TimelineEntry icon={<FaBullhorn />}>
        Move the needle not the long pole in my tent, but herding cats that jerk
        from finance really threw me under the bus we want to see more charts,
        so mumbo jumbo, and increase the pipelines. Take five, punch the tree,
        and come back in here with a clear head the last person we talked to
        said this would be ready. Make it look like digital going forward, yet
        talk to the slides. Prairie dogging.
      </TimelineEntry>
      <TimelineEntry icon={<FaBookSkull />}>
        Can you champion this nobody's fault it could have been managed better
        drink the Kool-aid. Regroup upstream selling. Cross-pollination ping me
        they have downloaded gmail and seems to be working for now, for red
        flag, for idea shower, or focus on the customer journey. Closing these
        latest prospects is like putting socks on an octopus. Zeitgeist
        incentivization market-facing, and run it up the flag pole please use
        "solutionise" instead of solution ideas!
      </TimelineEntry>
      <TimelineEntry icon={<FaCloudBolt />}>
        The last person we talked to said this would be ready. Tread it daily.
        Let's circle back tomorrow fire up your browser re-inventing the wheel
        you gotta smoke test your hypothesis. Zeitgeist we need to get all
        stakeholders up to speed and in the right place, or run it up the
        flagpole. Cannibalize prioritize these line items pull in ten extra
        bodies to help roll the tortoise, zoom meeting at 2:30 today, for work
        flows meeting assassin, yet good optics. Pivot conversational content ,
        so let's put a pin in that.
      </TimelineEntry>
    </Timeline>
  ),
  args: {
    title: "Example timeline",
  },
};
