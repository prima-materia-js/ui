import * as React from 'react';
import Modal from './Modal';
import Button from '../forms/Button';
import Paragraph from '../text/Paragraph';
import { useEffect } from 'react';

/**
 * Use a ConfirmationDialog to show a confirmation prompt requiring the user to confirm an action.
 */
const ConfirmationDialog: React.FC<{
  /** The title that will be displayed in the Modal's header. */
  title: string;

  /** The message to be shown in the dialog. This should clearly explain the action the user needs to confirm. */
  message: string;

  /** The callback function that will be invoked when the user confirms the action. */
  onConfirm: () => void;

  /** The callback function that will be invoked when the user cancels the action. */
  onCancel: () => void;

  /** The label to be shown on the cancel button. Defaults to "No". */
  cancelLabel?: string;

  /** The label to be shown on the confirm button. Defaults to "Yes". */
  confirmLabel?: string;

  /** Whether to show a spinner on the buttons. */
  showSpinner?: boolean;

  /** Whether the dialog is currently visible. */
  visible: boolean;

  /** Whether pressing the Escape key will close the dialog. */
  cancelOnEscKey?: boolean;
}> = (props) => {
  const {
    confirmLabel = 'Yes',
    cancelLabel = 'No',
    showSpinner = false,
    visible,
    cancelOnEscKey = false,
    onCancel,
    onConfirm,
  } = props;

  useEffect(() => {
    if (!visible || !cancelOnEscKey) return;

    const onKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onCancel();
      }
    };
    document.addEventListener('keyup', onKeyPress);

    return () => {
      document.removeEventListener('keyup', onKeyPress);
    };
  }, [visible, cancelOnEscKey, onCancel]);

  return (
    <Modal
      visible={visible}
      title={props.title}
      footerContent={
        <>
          <Button
            label={cancelLabel}
            onClick={onCancel}
            disabled={showSpinner}
          />
          <Button
            label={confirmLabel}
            onClick={onConfirm}
            primary={true}
            showSpinner={showSpinner}
          />
        </>
      }
    >
      <Paragraph>{props.message}</Paragraph>
    </Modal>
  );
};

export default ConfirmationDialog;
