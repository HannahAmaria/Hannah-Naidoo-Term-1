import { NavLink } from "react-router-dom";

const Header = () => {
    return(
        
        <div className="Nav">
            <div className="Logo"></div>
            
            <div className="navItems">
                <NavLink to="/"><p>Home</p></NavLink>
                <NavLink to="/Comparative"><p>Comparative Data</p></NavLink>
                <NavLink to="/Timeline"><p>Timeline Data</p></NavLink>
            </div>
        </div>

    );
}

export default Header;