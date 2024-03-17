import type { Meta, StoryObj } from '@storybook/react';
import Modal from './Modal';
import Button from '../forms/Button';
import { useState } from 'react';
import { FaSignOutAlt } from 'react-icons/fa';
import ButtonContainer from '../forms/ButtonContainer';

const meta: Meta<typeof Modal> = {
  component: Modal,
  tags: ['autodocs'],

  parameters: {
    docs: {
      story: {
        inline: false,
        iframeHeight: 400,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Modal>;

export const Example: Story = {
  render: (args) => {
    const [showModal, setShowModal] = useState(false);

    return (
      <>
        <Button
          label="Show modal"
          onClick={() => {
            setShowModal(true);
          }}
        />
        <Modal
          {...args}
          title={args.title}
          onClose={() => {
            setShowModal(false);
          }}
          visible={showModal}
        >
          This is an example of a modal.
        </Modal>
      </>
    );
  },
  args: {
    title: 'Example modal',
    closeOnEscKey: true,
  },
};

export const WithHeaderIcon: Story = {
  render: (args) => {
    const [showModal, setShowModal] = useState(false);
    const icon = <FaSignOutAlt />;

    return (
      <>
        <Button
          label="Show modal"
          onClick={() => {
            setShowModal(true);
          }}
        />
        <Modal
          {...args}
          title={args.title}
          headerContent={icon}
          onClose={() => {
            setShowModal(false);
          }}
          visible={showModal}
        >
          This is an example of a modal.
        </Modal>
      </>
    );
  },
  args: {
    title: 'Example modal',
  },
};

export const WithFooter: Story = {
  render: (args) => {
    const [showModal, setShowModal] = useState(false);

    return (
      <>
        <Button
          label="Show modal"
          onClick={() => {
            setShowModal(true);
          }}
        />
        <Modal
          {...args}
          title={args.title}
          visible={showModal}
          footerContent={
            <>
              <ButtonContainer>
                <Button
                  onClick={() => {
                    setShowModal(false);
                  }}
                  label="OK"
                />
              </ButtonContainer>
            </>
          }
        >
          This is an example of a modal.
        </Modal>
      </>
    );
  },
  args: {
    title: 'Show modal',
  },
};
