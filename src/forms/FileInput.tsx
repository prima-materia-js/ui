import * as React from 'react';
import { useCallback, useRef, useState, useEffect } from 'react';
import FormField from './FormField';
import Text from '../text/Text';

import styles from './FileInput.module.css';

/**
 * Use a FileInput to allow users to select files.
 */
const FileInput: React.FC<{
  /** A title for this form field. */
  label?: string;

  /** Additional context about this form field. */
  helpText?: string;

  /** A list of MIME types that are allowed when selecting a file. */
  accept?: string;

  /** A prompt telling users to select a file. Use this to provide more content on the kind of file to be selected. */
  prompt?: string;

  /** The callback function to be invoked when a file is selected. */
  onFileSelected: (file: File) => void;
}> = (props) => {
  const {
    onFileSelected,
    accept = '',
    prompt = 'Click to choose a file',
  } = props;
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileSize, setFileSize] = useState('');
  const fileInput = useRef<HTMLInputElement>(null);
  const onBeginFileSelect = useCallback(() => {
    fileInput.current?.click();
  }, [fileInput]);
  const onFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const fileList = e.currentTarget.files;
      if (!fileList) {
        return;
      }

      if (fileList.length < 1) {
        return;
      }

      const selectedFile = fileList[0];
      setSelectedFile(selectedFile);
      onFileSelected(selectedFile);
    },
    [setSelectedFile, onFileSelected]
  );
  useEffect(() => {
    import('pretty-bytes').then((prettyBytes) => {
      if (selectedFile == null) return;

      setFileSize(prettyBytes.default(selectedFile.size));
    });
  }, [selectedFile]);

  return (
    <FormField {...props}>
      <div className={styles.container} onClick={onBeginFileSelect}>
        <input
          className={styles.file_input}
          accept={accept}
          ref={fileInput}
          type="file"
          onChange={onFileChange}
        />
        <div>
          <Text
            weight="semibold"
            color={selectedFile ? 'primary' : 'secondary'}
          >
            {selectedFile ? (
              <>
                {selectedFile.name} ({selectedFile.type}, {fileSize})
              </>
            ) : (
              prompt
            )}
          </Text>
        </div>
      </div>
    </FormField>
  );
};

export default FileInput;
