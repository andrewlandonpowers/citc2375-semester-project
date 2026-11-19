import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router';
import Header from './components/Header.jsx';
import Home from './views/Home.jsx';
import About from './views/About.jsx';
import AddItem from './views/AddItem.jsx';
import { items as initialItems } from './data.js'; // is this still necessary? 
import './App.css';
import { loadItems } from './api.ts';

// I logged the array with JSON.stringify to convert it to json format. Obviously the console.log() is no longer here, but it was helpful to
// not have to write the json myself.

export default function App() {

    const [items, setItems] = useState([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
    async function load() {
        try {
        const data = await loadItems();
        setItems(data);
        } 
        catch (err) {
        setError(err instanceof Error ? err.message : "Failed to load items.");
        } 
        finally {
        setLoading(false);
        }
    }
    load();
    }, []);

    const [favoriteIds, setFavoriteIds] = useState(() => {
        const saved = localStorage.getItem('favorites');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favoriteIds));
    }, [favoriteIds]);

    function handleToggleFavorite(itemId) {
        setFavoriteIds(current =>
            current.includes(itemId)
                ? current.filter(id => id !== itemId) : [...current, itemId]
        );
    }

    if (loading) return <p>Loading items...</p>;
    if (error) return <p>Error: {error}</p>;

// This is less confusing than dealing with react for the first time, though I am still confused.
    return (
        <>
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home
                            items={items}
                            favoriteIds={favoriteIds}
                            onToggleFavorite={handleToggleFavorite}
                        />
                    }
                />
                <Route path="/About" element={<About />} />
                <Route path="/add" element={<AddItem setItems={setItems} />} />
            </Routes>
        </>
    );
}