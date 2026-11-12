import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router';
import Header from './components/Header.jsx';
import Home from './views/Home.jsx';
import About from './views/About.jsx';
import AddItem from './views/AddItem.jsx';
import { items as initialItems } from './data.js';
import './App.css';

export default function App() {
    const [items, setItems] = useState(initialItems);

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
//adding a comment to force github to show this as updated.
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