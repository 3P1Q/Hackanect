import React from 'react';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 350,
    backgroundColor: '#827397',
    margin: 10,
    color: '#FFF'
  },
  card: {
    paddingBottom: 10
  },
  title: {
    color: '#FFF',
    marginTop: 10,
    marginLeft: 10
  },
  link: {
    width: "10px",
    position: "relative",
    top: 15,
    alignItems: "right",
    left: 285,
    right: 0
    // paddingLeft: "90%"
  }
});

export default function ProjectCard({deets}) {
  const classes = useStyles();
  const preventDefault = (event) => event.preventDefault();

  return (
    <>  
        {deets.projects.map((card) => {
            return <Card className={classes.root}>
                <CardContent className={classes.carda}>
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
        })}
        
    </>
  );
}
