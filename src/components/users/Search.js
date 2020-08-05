import React, { useState, useContext } from 'react'
import GithubContext from '../../context/github/githubContext'
import AlertContext from '../../context/alert/alertContext'
import { makeStyles, TextField, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
    },
  ButtonDesign: {
      width: '100%'
  }  
  },
}));

const Search = () => {
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

    const classes = useStyles();
    return (
        <div>
            <form className={classes.root} onSubmit={onSubmit}>
                <TextField  label="Search" type='text' variant="outlined" name='text' value= {text} onChange={onChangeInput}> </TextField>
                <Button value='Search' type='submit' variant="contained" color="primary"> Search</Button>
            </form>
            {
                githubContext.users.length > 0  && (
                <Button className={classes.ButtonDesign} variant="outlined" color="primary" onClick={githubContext.clearUsers}>Clear</Button>
                )
            }
            
        </div>
    )
    
}



export default Search
