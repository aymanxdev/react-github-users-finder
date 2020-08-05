import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function Navbar(props) {
    return (
        <div className='navbar bg-primary'>
            <h1>
                <i className={props.icon}>  {props.title} </i>
            </h1>
            <ul className='bg-primary'>
                <li>
                    <Link to='/'> Home </Link>
                </li>
                <li>
                    <Link to='about'> About </Link>
                </li>
            </ul>
        </div>
    );
}

Navbar.defaultProps = {
    title: 'Github Wiki',
    icon: 'fab fa-github'
}
Navbar.propTypes ={ 
    title:PropTypes.string.isRequired,
    icon:PropTypes.string.isRequired
}

export default Navbar 