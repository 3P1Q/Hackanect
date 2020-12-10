import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

import {userDataContext} from './profilePage';
import Name from '../ProfileEdit/Name';
import Tags from '../ProfileEdit/Tags';
import Description from '../ProfileEdit/Description';
import Social from '../ProfileEdit/Social';
import Project from '../ProfileEdit/Project'


const useStyles = makeStyles((theme) => ({
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Edit = (props) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  function Modal(props){
        const [data,setData] = React.useContext(userDataContext); 
        const [name,setName] = React.useState(data.name || "");
        const [desc,setDesc] = React.useState(data.description || "");
        const [tags, setTags] = React.useState(data.techStack || []);
        const [social, setSocial] = React.useState(data.social ? data.social : {facebook:"#", github:"#", twitter:"#", linkedin:"#"});
        const [projects,setProjects] = React.useState(data.projects ? data.projects : []);

        async function update(e){
                e.preventDefault();
                console.log("update clicked");
                props.onHide();
                // setOpen(false);
                setData((prev) => ({
                ...prev,
                name:name,
                description: desc,
                techStack: tags,
                socialString: JSON.stringify(social),
                social: social,
                projects: projects,
                projectsString: JSON.stringify(projects)
                }));
        }
        return (
            <Dialog fullScreen open={open} onClose={() => props.onHide()} TransitionComponent={Transition}>
            <AppBar style={{position: "relative", background: "#363062"}}>
            <Toolbar >
                <IconButton edge="start" color="inherit" onClick={() => props.onHide()} aria-label="close">
                <CloseIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                Edit Profile
                </Typography>
                <Button color="inherit" onClick={update}>
                save
                </Button>
            </Toolbar>
            </AppBar>
            <div style={{margin: "3% 5%"}}>
                <Name name={name} setName={setName}/>
                <Description desc={desc} setDesc={setDesc}/>
                <Tags tags={tags} setTags={setTags}/>
                <Social social={social} setSocial={setSocial}/>
                <Project projects={projects} setProjects={setProjects}/>
            </div>
        </Dialog>
        );
  }
  
//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

  return (
    <div>
      <span onClick={() => setOpen(true)}>
                Edit
      </span>
      <Modal 
          show={open}
          onHide={() => setOpen(false)}
      />
    </div>
  );
}

export default Edit;
