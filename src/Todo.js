import React from 'react'
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import db from './firebase';

const useStyles = makeStyles({
    card: {
        minWidth: 245,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 4,
        backgroundColor: 'rgba(100,100,200,0.2)',
        color: 'black',
        borderRadius: 8,

    },
    subtitle: {
        fontSize: 14,
        textAlign: 'left',
    },
})




const Todo = (props) => {
    const classes = useStyles();



    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography className={classes.title}>{props.todo.todo}</Typography>
                <Typography className={classes.subtitle}>{props.todo.description}</Typography>

            </CardContent>
            <CardActions>
                <Button
                    variant="contained"
                    size="small"
                    color="secondary"
                    className={classes.button}
                    startIcon={<EditIcon />}
                >Edit
                </Button>
                <Button
                    variant="contained"
                    size="small"
                    color="secondary"
                    className={classes.button}
                    startIcon={<DeleteIcon />}
                    onClick={e => db.collection("todos").doc(props.todo.id).delete()}
                >Delete
                </Button>
            </CardActions >
        </Card >
    )
}

export default Todo
