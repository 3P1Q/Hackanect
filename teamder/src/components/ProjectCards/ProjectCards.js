import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import Link from '@material-ui/core/Link';
import {Grid} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    // minWidth: 275,
    maxWidth: 350,
    backgroundColor: '#827397',
    margin: 0,
    color: '#FFF'
  },
  card: {
    paddingBottom: 10
  },
  title: {
    color: '#FFF',
    marginTop: 10,
    marginLeft: 10,
    fontFamily: "inherit"
  },
  link: {
    textAlign: "right"
  }
});

export default function ProjectCard({deets}) {
  const classes = useStyles();

  return (
    <div>  
        <Grid container>

            <Grid item sm={12} md={2}>
                <h2 style={{margin:"0"}}>Projects</h2>
            </Grid>

            <Grid item sm={12} md={10}>
                <Grid container spacing={3}>
                {deets.map((card) => {
                  return <Grid item sm={12} md={6}>
                     <Card className={classes.root}>
                      <CardContent className={classes.card}>
                          <Typography maxWid variant={"h5"} className={classes.title} color="textSecondary" gutterBottom>
                          {card.name}
                          </Typography>
                          <Typography className={classes.link}>
                          <Link href={card.link}  color="inherit">
                              <GitHubIcon></GitHubIcon>
                          </Link>
                      </Typography>
                      </CardContent>
                        
                          
                      </Card>
                      </Grid>
                  })}
                </Grid>
            </Grid>
        </Grid>
        
        
    </div>
  );
}
