import type { Meta, StoryObj } from '@storybook/react';
import NoticeCard from './NoticeCard';
import { GiCrown } from 'react-icons/gi';

const meta: Meta<typeof NoticeCard> = {
  component: NoticeCard,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof NoticeCard>;

export const InfoCard: Story = {
  render: (args) => (
    <NoticeCard title={args.title} type={args.type}>
      <div>
        Lighthousefish bluefin tuna zebra bullhead shark tapetail Dolly Varden
        trout lenok. Guitarfish dragon goby slimy mackerel scissor-tail rasbora,
        green swordtail Canthigaster rostrata. Antarctic icefish Black scalyfin
        priapumfish yellowtail snapper plaice hussar sea chub snailfish, sind
        danio jack toadfish lenok.
      </div>
    </NoticeCard>
  ),
  args: {
    type: 'info',
    title: 'This is an info card',
  },
};

export const SuccessCard: Story = {
  render: (args) => (
    <NoticeCard title={args.title} type="success">
      <div>
        Mooneye pike Australian lungfish walking catfish humuhumunukunukuapua'a
        four-eyed fish yellowtail kingfish huchen mosshead warbonnet wobbegong
        pumpkinseed. Pigfish pink salmon Raccoon butterfly fish grunt crestfish,
        clingfish tompot blenny driftwood catfish, trout banded killifish.
      </div>
    </NoticeCard>
  ),
  args: {
    title: 'This is a success card',
  },
};

export const WarningCard: Story = {
  render: (args) => (
    <NoticeCard title={args.title} type="warning">
      <div>
        Labyrinth fish zebra shark pelican eel scup dwarf loach loosejaw zebra
        bullhead shark redlip blenny. Kaluga combtail gourami deep sea eel
        sailbearer sand goby topminnow tenuis sand diver deep sea anglerfish.
        Round whitefish vimba, shortnose sucker scaleless black dragonfish;
        brook lamprey, Pacific saury.
      </div>
    </NoticeCard>
  ),
  args: {
    title: 'This is a warning card',
  },
};

export const ErrorCard: Story = {
  render: (args) => (
    <NoticeCard title={args.title} type="error">
      <div>
        Poolfish spikefish Canthigaster rostrata New Zealand sand diver great
        white shark firefish remora. Catalufa flatfish ponyfish demoiselle great
        white shark, bocaccio. Loach goby, spiny dogfish, baikal oilfish slender
        mola, sailback scorpionfish x-ray tetra razorfish, suckermouth armored
        catfish driftfish john dory.
      </div>
    </NoticeCard>
  ),
  args: {
    title: 'This is an error card',
  },
};

export const CardWithCustomIcon: Story = {
  render: (args) => (
    <NoticeCard title={args.title} type="warning" overrideIcon={<GiCrown />}>
      <div>
        Strange women lying in ponds distributing swords is no basis for a
        system of government. Supreme executive power derives from a mandate
        from the masses, not from some farcical aquatic ceremony. You can’t
        expect to wield supreme executive power just ’cause some watery tart
        threw a sword at you!
      </div>
    </NoticeCard>
  ),
  args: {
    title: "You're not my king.",
  },
};
