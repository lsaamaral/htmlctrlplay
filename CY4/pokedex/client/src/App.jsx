import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PokemonList from './pages/pokemonList';
import PokemonForm from '../components/pokemonForm';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/pokemon" element={<PokemonForm />} />
        <Route path="/pokemon/:id" element={<PokemonForm />} />
      </Routes>
    </BrowserRouter>
  );
}
