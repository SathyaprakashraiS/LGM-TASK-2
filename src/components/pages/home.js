import '../../App.css';
import { Link } from 'react-router-dom';

function Home()
{
    return(
        <>
        <p>hello</p>
        <Link to="/vera" className="navbar-links">Get users</Link>
        </>
    );
}

export default Home;