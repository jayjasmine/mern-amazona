import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import NavBar from 'react-bootstrap/NavBar';
import Container from 'react-bootstrap/Container';
import {LinkContainer} from 'react-router-bootstrap'

function App() {
  return (
    <BrowserRouter>
    <div className='d-flex flex-column site-container'>
      <header>
        <NavBar bg="dark" variant="dark">
          <Container>
            <LinkContainer to="/">
            <NavBar.Brand>amazona</NavBar.Brand>            
            </LinkContainer>
          </Container>
        </NavBar>

      </header>
      <main>
        <Container>
        <Routes>
          <Route path="/product/:slug" element={<ProductScreen />} />
          <Route path="/" element={<HomeScreen /> } />
        </Routes>
        </Container>
      </main>
      <footer>
        <div className='text-center'>All rights reservered</div>
      </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
