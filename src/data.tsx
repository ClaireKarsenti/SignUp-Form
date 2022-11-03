export const inputData = [
  {
    id: 'input-1',
    type: 'text',
    name: 'firstName',
    placeholder: 'First Name',
    required: true,
    errorMessage: 'First Name cannot be empty',
    pattern: '^[A-Za-z0-9]{1,}$',
  },
  {
    id: 'input-2',
    type: 'text',
    name: 'lastName',
    placeholder: 'Last Name',
    required: true,
    errorMessage: 'Last Name cannot be empty',
    pattern: '^[A-Za-z0-9]{1,}$',
  },
  {
    id: 'input-3',
    type: 'email',
    name: 'email',
    placeholder: 'Email Address',
    required: true,
    errorMessage: 'Looks like this is not an email',
    pattern:
      '^(?:(?!.*?[.]{2})[a-zA-Z0-9](?:[a-zA-Z0-9.+!%-]{1,64}|)|"[a-zA-Z0-9.+!% -]{1,64}")@[a-zA-Z0-9][a-zA-Z0-9.-]+(.[a-z]{2,}|.[0-9]{1,})$',
  },
  {
    id: 'input-4',
    type: 'password',
    name: 'password',
    placeholder: 'Password',
    required: true,
    errorMessage: 'Password should be 8-25 characters',
    pattern: '^[A-Za-z0-9!@#$%^&*]{8,25}$',
  },
];
