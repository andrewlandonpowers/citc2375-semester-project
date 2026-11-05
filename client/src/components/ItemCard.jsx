export default function ItemCard({
    item,
    isFavorite,
    onToggleFavorite
}) {
    return (
        <article className ="item-card">
            <h3>{item.name}</h3>
            <button
                type="button"
                aria-pressed={isFavorite}
                onClick={() => onToggleFavorite(item.id)}
            >
                {isFavorite ? "★  Favorited!" : "☆  Favorite?"}
            </button>
            <p>{item.type}</p>
            <img src={item.img}/>
            <p>{item.description}</p>
            <p>My rating: {item.rating}/10</p>
            <a href={item.link}>The steam page for: {item.name}</a>
        </article>
    );
}