import { Link } from 'react-router';

export default function Header(){
    return(
    <header className="content-width">
        <p className="site-name">Andrew Powers Favorite Games Project</p>
        <nav aria-label="Main navigation">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/add">Add Item</Link>
        </nav>  
    </header>
    )
}