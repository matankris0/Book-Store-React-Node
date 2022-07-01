import React, { useContext } from "react";
import { Link, useNavigate } from 'react-router-dom'
import './sidebar.styles.css';
import { AuthContext } from "../../../contexts/Auth.context";

const Sidebar = (props) => {
    const navigate = useNavigate()
    const authContextValue = useContext(AuthContext)

    const handleClick = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/users/logout',
                {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${authContextValue.userToken}`,
                    },
                });
            
            if (!response.ok) {
                throw new Error();
            };
            const responseObj = await response.json();
            const message = responseObj.message
            alert(message)

            localStorage.removeItem('user-token')
            authContextValue.setUserToken(null)

            props.hideSidebar()
            navigate('/');
        }
        
        catch (err) {
            alert('Something went wrong')
        }
    }

    return (
        <div className={`main-navbar ${props.className}`}>
            <nav className="navbar">
                <button type="button" className="close-navbar" onClick={props.hideSidebar}>X</button>
                <ul>
                    <li className="noDot">
                        <Link to={'/'} onClick={props.hideSidebar} className="item">Home</Link>
                    </li>
                    
                    { !authContextValue.userToken && (<li className="noDot">
                        <Link to={'/login'} onClick={props.hideSidebar} className="item">Login</Link>
                    </li>)
                    }
                    
                    {!authContextValue.userToken && (<li className="noDot">
                        <Link to={'/signup'} onClick={props.hideSidebar} className="item">Signup</Link>
                    </li>)
                    }

                    {authContextValue.userToken && (<li className="noDot">
                            <Link to={'/cart'} onClick={props.hideSidebar} className="item">Cart</Link>
                        </li>)
                    }
                    {authContextValue.userToken && (<button type="button" className="logout-button" onClick={handleClick}>
                            Logout
                        </button>)
                    }
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar