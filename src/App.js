import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';//import bootstrap to all pages
import Header from './components/header';
import Footer from './components/footer';
import Content from './components/content';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';//Need to import a few things for the router
import Create from './components/create';
import Read from './components/read';//imports the components
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/*Navbar changes the url to allow us to use different components on different urls */}
        <Navbar bg="primary" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        {/* Where we put the new componet of which change of url */}
        <Routes>
          {/* when we go to this path, show this component */}
          <Route path='/' element={<Content></Content>}></Route>
          <Route path='/read' element={<Read></Read>}></Route>
          <Route path='/create' element={<Create></Create>}></Route>
        </Routes>

        {/* call the components to display on the app */}
        {/* <Header></Header>
      <Content></Content>
      <Footer></Footer> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
