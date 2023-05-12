import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <h2>Home Page</h2>
            <Link to="/about">About</Link>
        </>
    );
}

export default Home;