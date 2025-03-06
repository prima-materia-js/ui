import type { Meta, StoryObj } from '@storybook/react';
import PageWithLeftSidebar from './PageWithLeftSidebar';
import { NavLink } from '../text/NavLink';
import Sidebar from '../containers/Sidebar';
import BrowserFrame from '../storybook/BrowserFrame';
import ExampleContent from '../storybook/ExampleContent';
import { FaCat, FaEnvelope, FaUserAlt } from 'react-icons/fa';
import Button from '../forms/Button';
import { useState } from 'react';

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

export const ExampleWithCollapsibleSidebar: Story = {
  render: (args) => {
    const [collapsed, setCollapsed] = useState(false);

    return (
      <BrowserFrame>
        <PageWithLeftSidebar
          isSidebarCollapsed={collapsed}
          sidebar={
            <Sidebar appName="My app" homeHref="#" icon={<FaCat />}>
              <NavLink href="/about" label="About" icon={<FaUserAlt />} />
              <NavLink href="/contact" label="Contact" icon={<FaEnvelope />} />
            </Sidebar>
          }
        >
          <ExampleContent>
            <Button
              label="Toggle sidebar"
              onClick={() => {
                setCollapsed(!collapsed);
              }}
            />
          </ExampleContent>
        </PageWithLeftSidebar>
      </BrowserFrame>
    );
  },
  args: {
    // collapsed: false,
  },
};
