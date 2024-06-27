import { useEffect, useState } from 'react';

const useValidation = <T>(value: T, onValidate?: (v: T) => null | string) => {
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [validationMessage, setValidationMessage] = useState('');
  const [hasHasValue, setHasHadValue] = useState(false);

  useEffect(() => {
    if (onValidate) {
      const validationResult = onValidate(value);
      if (validationResult == null || validationResult == '') {
        setIsValid(true);
        setValidationMessage('');
      } else {
        setIsValid(false);
        setValidationMessage(validationResult);
      }
    }

    if (value != false) {
      // Track this so once the user has modified this field at least once, the validation result
      // will be shown.
      setHasHadValue(true);
    }
  }, [value, onValidate]);

  return { isValid: hasHasValue ? isValid : null, validationMessage };
};

export default useValidation;
