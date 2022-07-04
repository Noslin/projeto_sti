import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Paginas/Home';
import Pedidos from './Paginas/Pedidos';
import Produtos from './Paginas/Produtos';

import Container from './Layout/Container';
import Navbar from './Layout/Navbar';
import AlterarCadastro from './Paginas/AlterarCadastro';

function App() {
  return (
      <Router>
      <Navbar />
      <Container customClass="min-height">
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='/Pedidos' element={<Pedidos />}/>
        <Route path='/Produtos' element={<Produtos />}/>
        <Route path='/AlterarCadastro/:cliente' element={<AlterarCadastro />}/>
      </Routes>
      </Container>
    </Router>
  );
}

export default App;
