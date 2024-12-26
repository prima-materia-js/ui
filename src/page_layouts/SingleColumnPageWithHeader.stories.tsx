import type { Meta, StoryObj } from '@storybook/react';
import SingleColumnPageWithHeader from './SingleColumnPageWithHeader';
import Button from '../forms/Button';
import BrowserFrame from '../storybook/BrowserFrame';
import ExampleContent from '../storybook/ExampleContent';

const meta: Meta<typeof SingleColumnPageWithHeader> = {
  component: SingleColumnPageWithHeader,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SingleColumnPageWithHeader>;

export const Example: Story = {
  render: (args) => (
    <BrowserFrame>
      <SingleColumnPageWithHeader
        logo={<>🐱 My app</>}
        navLinks={[
          { title: 'Home', href: '/' },
          { title: 'About', href: '/about' },
          { title: 'Contact', href: '/contact' },
        ]}
        rightContent={<Button label="Sign out" onClick={() => {}} />}
      >
        <ExampleContent>Content</ExampleContent>
      </SingleColumnPageWithHeader>
    </BrowserFrame>
  ),
};

export const ExampleWithHomeLink: Story = {
  render: (args) => (
    <BrowserFrame>
      <SingleColumnPageWithHeader
        logo={<>🐱 My app</>}
        navLinks={[
          { title: 'Home', href: '/' },
          { title: 'About', href: '/about' },
          { title: 'Contact', href: '/contact' },
        ]}
        rightContent={<Button label="Sign out" onClick={() => {}} />}
        homeLink={{
          title: 'Home',
          href: '/',
        }}
      >
        <ExampleContent>Content</ExampleContent>
      </SingleColumnPageWithHeader>
    </BrowserFrame>
  ),
};
