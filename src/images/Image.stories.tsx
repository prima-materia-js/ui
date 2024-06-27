import type { Meta, StoryObj } from '@storybook/react';
import Image from './Image';

const meta: Meta<typeof Image> = {
  component: Image,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Image>;

export const Example: Story = {
  args: {
    src: 'https://placehold.co/600x400?text=Sample+image',
    altText: 'Sample image',
    hideIfImageDoesNotLoad: false,
    fallbackImage: '',
  },
};

export const WithFallbackImage: Story = {
  args: {
    src: 'https://notavalidurl.net/image',
    altText: 'Sample image',
    hideIfImageDoesNotLoad: false,
    fallbackImage: 'https://placehold.co/600x400?text=Fallback+image',
  },
};

export const HiddenOnError: Story = {
  render: (args) => (
    <>
      (This will not render anything when <code>hideIfImageDoesNotLoad</code> is
      set to true.)
      <Image {...args} />
    </>
  ),
  args: {
    src: 'https://notavalidurl.net/image',
    altText: 'Sample image',
    hideIfImageDoesNotLoad: true,
  },
};
