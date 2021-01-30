import React from 'react';
import Paper from '@material-ui/core/Paper';
import cuteImage from '../assets/cuteness.jpeg';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    description: {
        paddingTop: "5vh",
        paddingLeft: "10vw",
        width: "60vw",
        height: 100,
        textAlign: "left",
        fontSize: 20,
        [theme.breakpoints.only("md")]: {
            paddingLeft: "3vw",
            width: "45vw",
            height: 300,
            
          },
    },
    title: {
        paddingTop: "5vh",
        paddingLeft: "10vw",
        fontSize: 60,
        fontWeight: 900,
        [theme.breakpoints.only("md")]: {
            fontSize: 45,
        },
      },
    topSection: {
        overflow: "auto",
        paddingTop: "70px",
        backgroundColor: "#F7CAC9",
        width: "100vw",
        height: "750px",
        
        
    },
    image: {
        marginTop: -225,
        marginLeft: "55vw",
        height: "80vh",
        width: "40vw",
        [theme.breakpoints.down("sm")]: {
          marginLeft: "15vw",
          width: 250,
          height: 250
        },
        [theme.breakpoints.only("md")]: {
          marginLeft: "50vw",
          marginTop: -415,
          height: "80vh",
          width: "45vw",
        },
        boxShadow: "8px 4px 5px gray",

        borderRadius: 10
      },
      
      
}));

const styles  = {
    paper: {
        marginLeft: "1vw",
        marginTop: "2vh",
        width: "98vw",
        height: "680px",
        borderRadius: 20,
      },
      
}
export default function TopSection() {
    const muiClasses = useStyles()

    return (
        <div className={muiClasses.topSection}>
            <Paper elevation={5} style={styles.paper} >
                <div className={muiClasses.title}>
                    Lady the Great
                </div>
                <div className={muiClasses.description}>
                    This is Lady, the most wonderful dog in the whole world and here is why:
                    <li>
                        She is super cute
                    </li>
                    <li>
                        She is the fluffiest doggo
                    </li>
                    <li>
                        She has the cutest eyes
                    </li>
                    <li>
                        She loves cuddles
                    </li>
                    <li>
                        She has the jankiest tail
                    </li>
                </div>
                <img alt="" src={cuteImage} className={muiClasses.image}/>
            </Paper>
        </div>
    )

}