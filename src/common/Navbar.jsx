import React, {Component} from 'react';
import '../assets/css/navbar.css';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class CustomNavbar extends Component {    
    render() {
        return(   
                    <Navbar default collapseOnSelect>
                        <Navbar.Header>
                                <a href="/"><img src="" alt=""/></a>
                                <Link to="/">MeatUp</Link>
                            <Navbar.Brand>
                            </Navbar.Brand>
                        </Navbar.Header>
                    </Navbar>             
        )
    }
}

export default CustomNavbar;