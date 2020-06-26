import React, { useState, useContext } from 'react'
import GithubContext from '../../context/github/githubContext'
import AlertContext from '../../context/alert/alertContext'


const Search = ({ showClear, clearUsers}) => {
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext)

    const [text, setText] = useState('')

    
    const onChangeInput = (e) =>{
        setText( e.target.value)
    }

   const onSubmit =(e) => {
            e.preventDefault();
            if (text === ''){
                alertContext.setAlert('please enter something', 'light')
            }else {

                githubContext.searchUsers(text);
                setText(' ')
            }
            
            
    }

        
        return (
            <div>
                <form className='form' onSubmit={onSubmit}>
                    <input type='text' name='text' value= {text} placeholder='Search Users...' onChange={onChangeInput} ></input>
                    <input className='btn btn-dark btn-block' value='Search' type='submit'></input>
                </form>
                {
                    githubContext.users.length > 0  && (
                    <button className='btn btn-light btn-block' onClick={githubContext.clearUsers}>Clear</button>
                    )
                }
                
            </div>
        )
    
}



export default Search
