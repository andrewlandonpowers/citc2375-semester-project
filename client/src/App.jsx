import { useState } from 'react';
import Header from './components/Header.jsx';
import ItemList from './components/ItemList.jsx';
import { items } from './data.js';
import './App.css';

export default function App() {
    const [selectedCategory, setSelectedCategory] =
        useState(() => {
            return localStorage.getItem(
                "lastGenre"
            ) || 'All';
        });

    const [favoriteIds, setFavoriteIds] =
        useState(() => {
            const saved = localStorage.getItem(
                "favorites"
            );

            return saved ? JSON.parse(saved) : [];
        });

    function handleCategoryChange(event) {
        const category = event.target.value;

        setSelectedCategory(category);
        localStorage.setItem(
            "lastGenre",
            category
        );
    }

    function handleToggleFavorite(itemId) {
        const updated = favoriteIds.includes(itemId)
            ? favoriteIds.filter(id => id !== itemId)
            : [...favoriteIds, itemId];

        setFavoriteIds(updated);

        localStorage.setItem(
            "favorites",
            JSON.stringify(updated)
        );
    }

    const filteredItems =
        selectedCategory === 'All'
            ? items
            : items.filter(
                item => item.type === selectedCategory
            );

    const categories = [
        'All',
        ...new Set(items.map(item => item.type))
    ];

    return (
        <>
            <Header />

            <main>
                <h1>Favorite Games: </h1>
                <p>This is a list of my favorite games on steam and other platforms, allowing others to more easily see my favorite games.</p>
                <p>The people who might use this web page are those who are looking for recommendations, looking to review my capabilities, or those I show it off to. It will use a collection of games/pictures, ideally?</p>
                <h2>List of games:</h2>
                <p>This is a list of my favorite steam games of all time, in no particular order.</p>
                <label htmlFor="category-filter">
                    Sort By Genre
                </label>

            <div className="genre-sort">
                <select

                    id="category-filter"
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                >
                    {categories.map(category => (
                        <option key={category} value={category}>
                            {category === 'All' ? 'All genres' : category}
                        </option>
                    ))}
                </select>
            </div>
                <ItemList
                    items={filteredItems}
                    favoriteIds={favoriteIds}
                    onToggleFavorite={handleToggleFavorite}
                    className="item-main-list"
                />
            </main>
        </>
    );
}