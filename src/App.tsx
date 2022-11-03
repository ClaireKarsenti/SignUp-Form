import { GlobalStyle } from './assets/styles/Global.style';
import { Container } from './App.style';

import SignUpPage from './components/SignUpPage.component';
import Footer from './components/Footer.component';

function App() {
  return (
    <Container>
      <GlobalStyle />
      <SignUpPage />
      <Footer />
    </Container>
  );
}

export default App;
