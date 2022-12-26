import { Link } from "react-router-dom"
export const NavBar = () =>{
    return(
        <nav>
            <Link to='/'>Home</Link>
            <Link to='products'>Products</Link>
            <Link to='about'>About</Link>
            <Link to='users'>Users</Link>
            <Link to='contact'>Contact</Link>
</nav>
    )
}