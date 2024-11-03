import type { Meta, StoryObj } from '@storybook/react';
import NoticeCard from './NoticeCard';
import { GiCrown } from 'react-icons/gi';
import Button from '../forms/Button';
import { useState } from 'react';

function generateGibberish(
  sentences: number,
  wordsPerSentence: number
): string {
  // Helper function to generate a random word
  function generateRandomWord(length: number): string {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    let word = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * letters.length);
      word += letters[randomIndex];
    }
    return word;
  }

  // Generate the gibberish text
  let paragraph = '';
  for (let i = 0; i < sentences; i++) {
    let sentence = '';
    for (let j = 0; j < wordsPerSentence; j++) {
      const wordLength = Math.floor(Math.random() * 5) + 3; // Random word length between 3 and 7
      const word = generateRandomWord(wordLength);
      sentence +=
        (j === 0 ? word.charAt(0).toUpperCase() + word.slice(1) : word) + ' ';
    }
    sentence = sentence.trim() + '. '; // Trim and add period at the end
    paragraph += sentence;
  }

  return paragraph.trim(); // Trim the final paragraph
}

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

export const MultipleNoticeCards: Story = {
  render: (args) => {
    const [cards, setCards] = useState<
      Array<{
        key: string;
        type: 'info' | 'warning' | 'success' | 'error';
        title: string;
        content: string;
      }>
    >([]);

    return (
      <div>
        <div>
          <Button
            label="Add NoticeCard"
            onClick={() => {
              setCards((curr) => [
                {
                  key: crypto.randomUUID(),
                  type: (
                    ['info', 'warning', 'success', 'error'] as Array<
                      'info' | 'warning' | 'success' | 'error'
                    >
                  )[Math.floor(Math.random() * 4)],
                  title: generateGibberish(1, 8),
                  content: generateGibberish(5, 10),
                },
                ...curr,
              ]);
            }}
          />
          <Button
            label="Clear all cards"
            onClick={() => {
              setCards([]);
            }}
          />
        </div>

        {cards.map((card) => (
          <NoticeCard key={card.key} title={card.title} type={card.type}>
            <div>{card.content}</div>
          </NoticeCard>
        ))}
      </div>
    );
  },
  args: {
    title: "You're not my king.",
  },
};
