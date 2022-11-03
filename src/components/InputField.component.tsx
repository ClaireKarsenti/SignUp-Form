import { FC } from 'react';

import { Error, Input, InputWrapper } from '../assets/styles/InputField.style';

type input = {
  id: string;
  type: string;
  name: string;
  placeholder: string;
  required: boolean;
  errorMessage: string;
  pattern: string;
};

interface InputFieldType {
  type: string;
  errorMessage: string;
  onChange: () => void;
  inputData: input[];
}

const InputField: FC<InputFieldType> = ({
  type,
  errorMessage,
  onChange,
  ...inputData
}) => {
  return (
    <InputWrapper>
      <Input {...inputData} type={type} onChange={onChange} />
      <Error>{errorMessage}</Error>
    </InputWrapper>
  );
};

export default InputField;
