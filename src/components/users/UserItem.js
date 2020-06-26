import React from 'react'
import {Link} from 'react-router-dom'

function UserItem (props){

    const { avatar_url, login } = props.user;
    return (
        <div className="card text-center">
            <img src={avatar_url} 
            style={{width:'60px'}} 
            className='round-img'  alt= ''></img>
                <h4>{login}</h4>
             
            <Link to={`/users/${login}`} className='btn btn-dark btn-sm my-1'> More </Link>
          
        </div>
    )
}

export default UserItem