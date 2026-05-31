import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import RecipeDetail from './pages/RecipeDetail';
import Specials from './pages/Specials';
import ShoppingList from './pages/ShoppingList';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ShoppingListProvider } from './contexts/ShoppingListContext';

export default function App() {
  return (
    <ShoppingListProvider>
      <div className="min-h-screen flex flex-col bg-warm-50">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/recipes/:id" element={<RecipeDetail />} />
            <Route path="/specials" element={<Specials />} />
            <Route path="/shopping-list" element={<ShoppingList />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </ShoppingListProvider>
  );
}
