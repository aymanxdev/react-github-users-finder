import React, {useContext} from 'react';
import UserItem from './UserItem';
import Spinner from '../Spinner';
import GithubContext from '../../context/github/githubContext'

const Users = () => {

    const githubContext = useContext(GithubContext);

    const {users, loading} = githubContext;

    if(loading){
        return <Spinner />
    }else {
        return (
            <div style ={usersStyle}>
                
                    {users.map(user => (
                        <UserItem 
                        key={user.id}
                        user={user} />
                    ))}
            </div>
            
        )
    }
}


const usersStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gridGap: '2rem'
}

export default Users