import { useContext } from 'react';
import NoticeCard from '../containers/NoticeCard';
import { FormValidationContext } from './FormValidationProvider';

/**
 * A card displaying a summary of all the errors in a form. Must be used within a <FormValidationProvider>.
 */
const FormValidationSummary: React.FC<{
  /**
   * The title to display in the card, for example "Please fix these errors"
   */
  title?: string;
}> = ({ title = 'Please fix these errors before continuing:' }) => {
  const validationContext = useContext(FormValidationContext);

  if (!validationContext.isActive) return null;

  if (validationContext.allFieldsAreValid) return null;

  return (
    <NoticeCard type="error" title={title}>
      <ul>
        {Object.keys(validationContext.validationResults).map((fieldID) => {
          const result = validationContext.validationResults[fieldID];
          if (result.valid) return null;

          return (
            <li key={fieldID}>
              <strong>{result.label}</strong> - {result.validationMessage}
            </li>
          );
        })}
      </ul>
    </NoticeCard>
  );
};

export default FormValidationSummary;
