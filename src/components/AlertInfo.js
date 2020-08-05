import React, {useContext} from 'react'
import AlertContext from '../context/alert/alertContext'
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const AlertInfo =() => {
   
   const classes = useStyles();
   const  alertContext = useContext(AlertContext)
   const {alert } = alertContext

    return (

            alert !== null && (
            <div className={classes.root}>

                <Alert severity="warning" >{alert.msg}</Alert>

            </div>
            )
    )
}

export default AlertInfo

