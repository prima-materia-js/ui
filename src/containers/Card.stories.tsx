import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';
import Tag from '../text/Tag';
import Paragraph from '../text/Paragraph';

const meta: Meta<typeof Card> = {
  component: Card,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Card>;

export const BasicCard: Story = {
  args: {
    children: (
      <>
        <Paragraph>
          King's Landing, The Seven Kingdoms — In an unprecedented turn of
          events that has sent shockwaves throughout the realm, Lord Eddard
          "Ned" Stark, once-loyal Hand of the King and revered Warden of the
          North, met his tragic end today at the hands of the royal court. The
          execution took place in the heart of the Red Keep, where the accused
          stood before the Iron Throne, surrounded by guards and witnesses
          alike. Despite pleas for mercy from Lady Catelyn Tully Stark, who
          begged her husband not to confess to treason against their liege lord,
          King Joffrey Baratheon, Lord Stark remained steadfast in admitting to
          conspiring with House Arryn and other factions to overthrow the crown.
        </Paragraph>
        <Paragraph>
          As the sun set on this fateful day, the headsman raised his axe high
          above his head, and with one swift stroke, severed Lord Stark's neck,
          sending the crowd into chaos and disbelief. The body was then removed
          from the scene, leaving only the bloodstained ground and the haunting
          image of the fallen nobleman etched into the memories of all present.
          Lord Stark's death marks a pivotal moment in the history of Westeros,
          as it signals the beginning of a new era characterized by mistrust,
          betrayal, and uncertainty. Many have speculated about the motives
          behind such a drastic measure taken by the young king, while others
          are left questioning the future of the kingdom under such unstable
          leadership.
        </Paragraph>
      </>
    ),
  },
  render: (args) => <Card>{args.children}</Card>,
};

export const CardWithTitle: Story = {
  args: {
    ...BasicCard.args,
    title:
      'Shocking Execution Shakes Westeros as Lord Eddard Stark Falls to Beheading',
  },
  render: (args) => <Card title={args.title}>{args.children}</Card>,
};

export const HighlightedCard: Story = {
  render: (args) => <Card highlight>{args.children}</Card>,
  args: { ...BasicCard.args },
};

export const CardWithHoverEffect: Story = {
  render: (args) => <Card showHoverEffect>{args.children}</Card>,
  args: { ...BasicCard.args },
};

export const CardWithRightHeaderContent: Story = {
  render: (args) => (
    <Card headerRightContent={<Tag>Breaking News</Tag>}>{args.children}</Card>
  ),
  args: {
    ...BasicCard.args,
  },
};
