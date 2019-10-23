import React from 'react'
import { useRouteMatch, Link } from "react-router-dom"

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import Template from "../components/Template";


const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

function TemplateSelector() {
    let match = useRouteMatch();
    const classes = useStyles();
    
    
    return (
        <div className="builder">
            <div className="control">
                <div className="controlHeader">
                
                    <p>
                        Templates
                    </p>
                </div>
                
            
            </div>
            <div>
                <div className="controlHeader">
        
                    <p>
                        Select your prefered template
                    </p>
                </div>
                    
                    <div className={classes.root}>
                        <Grid container spacing={2}>
                            <Grid item xs={4}>
                                <Link to='builder/1'>
                                    <Paper className={classes.paper}>
                                        <Template template="<h1>hola</h1>"/>
                                    </Paper>
                                </Link>
                            </Grid>
                            <Grid item xs={4}>
                                <Link to='builder/2'>
                                    <Paper className={classes.paper}>
                                        <Template template={"1"}/>
                                    </Paper>
                                </Link>
                            </Grid>
                            <Grid item xs={4}>
                                <Link to='builder/2'>
                                    <Paper className={classes.paper}>
                                        <Template template={"1"}/>
                                    </Paper>
                                </Link>
                            </Grid>
                        </Grid>
         
                        
                    </div>
            </div>
        </div>
    )
}

export default TemplateSelector
