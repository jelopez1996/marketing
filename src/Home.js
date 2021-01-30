import React from 'react';
import { makeStyles } from '@material-ui/core';
import cuteImage from './assets/cuteness.jpeg';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
    root: {
        background: "#f0ead6",
        backgroundColor: "#f0ead6",
        width: "100vw",
        height: "100vh",
        color: "gray"

    },
    cardContainer: {
        position: "relative",
        top: "15vh",
        left: "5vw",
        width: "90vw",
        height: "50vh"
    },
    card: {
        float: "left",
        marginLeft: "4vw",
        width: "25vw",
        height: "50vh",
        [theme.breakpoints.only("md")]: {
            height: "57vh",
        },

    },
    media: {
        width: "30vw",
        height: "25vh",
        backgroundPositionY: "-6vh",
        position: "relative",
    },
    button: {
        backgroundColor: "#ffdcdb",
        marginLeft: "7vw",
        '&:hover': {
            backgroundColor: "#F7CAC9",
        }
    },
    header: {
        fontSize: 24,
        fontWeight: 900
    },
    body: {

    }
}))

export default function Home() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.cardContainer}>
                <Card raised className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={cuteImage}
                        title="Contemplative Doggo"
                        />
                        <CardContent>
                        <Typography gutterBottom className={classes.header}>
                            Who is the best doggo?
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            The question of the best doggo has been asked since the dawn of mankind. 
                            Well, we have the answer and her name is Lady.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="medium" variant="contained" className={classes.button}>
                        Learn More
                        </Button>
                    </CardActions>
                </Card>
                <Card raised className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={cuteImage}
                        title="Contemplative Doggo"
                        />
                        <CardContent>
                        <Typography gutterBottom className={classes.header}>
                            Who is the best doggo?
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            The question of the best doggo has been asked since the dawn of mankind. 
                            Well, we have the answer and her name is Lady.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="medium" variant="contained" className={classes.button}>
                        Learn More
                        </Button>
                    </CardActions>
                </Card>
                <Card raised className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                        className={classes.media}
                        image={cuteImage}
                        title="Contemplative Doggo"
                        />
                        <CardContent>
                        <Typography gutterBottom className={classes.header}>
                            Who is the best doggo?
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            The question of the best doggo has been asked since the dawn of mankind. 
                            Well, we have the answer and her name is Lady.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="medium" variant="contained" className={classes.button}>
                        Learn More
                        </Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    )
}