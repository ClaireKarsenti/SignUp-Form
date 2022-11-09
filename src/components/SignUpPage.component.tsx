import SignUpForm from './SignUpForm.component';

import { Section, TextWrapper } from '../assets/styles/SignUpPage.style';

const SignUpPage = () => {
  return (
    <Section>
      <TextWrapper>
        <h1>Learn to code by watching others</h1>
        <p>
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </TextWrapper>
      <SignUpForm />
    </Section>
  );
};

export default SignUpPage;
