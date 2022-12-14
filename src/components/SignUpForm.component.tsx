import { useState } from 'react';

import InputField from './InputField.component';
import { Form, Section } from '../assets/styles/SignUpForm.style';
import { inputData } from '../data';

const SignUpForm = () => {
  const [inputFields, setInputFields] = useState<any>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [focused, setFocused] = useState<boolean>(false);

  const updateState = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputFields({ ...inputFields, [e.target.name]: e.target.value });
  };

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const focusHandler : () => void = () => {
    setFocused(true);
  };

  return (
    <Section>
      <p className="announce">
        <span>Try it free 7 days </span>then $20/mo. thereafter
      </p>
      <Form onSubmit={submit} autoComplete="off">
        <fieldset>
          {inputData?.map((form: any) => {
            const { id, name } = form;
            return (
              <InputField
                key={id}
                {...form}
                value={inputFields[name]}
                onChange={updateState}
                onBlur={focusHandler}
                focused={focused}
              />
            );
          })}
          ;
          <button className="flip" type="submit">
            <div className="inner">
              <div className="front">Claim your free trial</div>
              <div className="back">Let's Go!</div>
            </div>
          </button>
        </fieldset>

        <div className="terms">
          <p>
            By clicking the button, you are agreeing to our{' '}
            <a href="/">Terms and Services</a>
          </p>
        </div>
      </Form>
    </Section>
  );
};

export default SignUpForm;
