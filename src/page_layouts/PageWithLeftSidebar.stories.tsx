import type { Meta, StoryObj } from '@storybook/react';
import PageWithLeftSidebar from './PageWithLeftSidebar';
import { NavLink } from '../text/NavLink';
import Sidebar from '../containers/Sidebar';
import BrowserFrame from '../storybook/BrowserFrame';
import ExampleContent from '../storybook/ExampleContent';

const meta: Meta<typeof PageWithLeftSidebar> = {
  component: PageWithLeftSidebar,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof PageWithLeftSidebar>;

export const Example: Story = {
  render: (args) => (
    <BrowserFrame>
      <PageWithLeftSidebar
        sidebar={
          <Sidebar appName="🐱 My app" homeHref="#">
            <NavLink href="/" label="Home" />
            <NavLink href="/about" label="About" />
            <NavLink href="/contact" label="Contact" />
          </Sidebar>
        }
      >
        <ExampleContent>Content</ExampleContent>
      </PageWithLeftSidebar>
    </BrowserFrame>
  ),
  args: {},
};
