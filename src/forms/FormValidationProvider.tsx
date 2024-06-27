import { createContext, PropsWithChildren, useCallback, useState } from 'react';

export type ValidationResultSet = {
  [fieldID: string]: {
    label: string;
    valid: boolean;
    validationMessage: string;
  };
};

interface FormValidationContextType {
  isActive: boolean;
  validationResults: ValidationResultSet;
  allFieldsAreValid: boolean;
  setValidationResult: (
    fieldID: string,
    label: string,
    valid: boolean | undefined | null,
    validationMessage: string | undefined
  ) => void;
}

export const FormValidationContext = createContext<FormValidationContextType>({
  isActive: false,
  validationResults: {},
  allFieldsAreValid: true,
  setValidationResult(_fieldID, _label, _valid) {},
});

/**
 * Allows validation results of all FormFields within a FormValidationProvider to be aggregated.
 */
export const FormValidationProvider: React.FC<PropsWithChildren<{}>> = ({
  children,
}) => {
  const [validationResults, setValidationResults] =
    useState<ValidationResultSet>({});
  const [allFieldsAreValid, setAllFieldsAreValid] = useState(true);
  const setValidationResult = useCallback(
    (
      fieldID: string,
      label: string,
      valid: boolean | undefined | null,
      validationMessage: string | undefined
    ) => {
      let results: ValidationResultSet = validationResults;

      if (valid != null) {
        results = {
          ...validationResults,
          [fieldID]: {
            label,
            valid,
            validationMessage: validationMessage ?? '',
          },
        };
      } else {
        delete results[fieldID];
      }

      setValidationResults(results);
      setAllFieldsAreValid(
        Object.keys(results).every((key) => results[key].valid)
      );
    },
    [validationResults]
  );

  return (
    <FormValidationContext.Provider
      value={{
        isActive: true,
        validationResults,
        allFieldsAreValid,
        setValidationResult,
      }}
    >
      {children}
    </FormValidationContext.Provider>
  );
};
