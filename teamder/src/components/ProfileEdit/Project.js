import React from 'react';
import AddCircleSharpIcon from '@material-ui/icons/AddCircleSharp';
import DeleteIcon from '@material-ui/icons/Delete';
import {TextField} from '@material-ui/core';

const Project = (props) => {
    // const [projects,setProjects] = React.useState([]);
    const addNewProject = (e) => {
        props.setProjects((prev) => {
            return [...prev,{
                title: "",
                description: "",
                githubLink: ""
            }]
        })
    }
    const valChanged = (e,index) => {
        const trg = e.target;
        let arr = [...props.projects];
        if(trg.id === "outlined-basic title")
            arr[index].title = trg.value;
        else if(trg.id === "outlined-multiline-static description")
            arr[index].description = trg.value;
        else
            arr[index].githubLink = trg.value;
        props.setProjects(arr);
        // setProjects();
    }

    const deleteProject = (indexToRemove) => {
        props.setProjects([...props.projects.filter((_, index) => index !== indexToRemove)]);
    }

    return( 
        <div>
            <div style={{fontWeight: '700',marginRight: "15px", color: 'black',marginTop: "30px",fontSize: "20px"}}>Projects <span onClick={addNewProject}><AddCircleSharpIcon style={{cursor: "pointer"}}/></span></div>
            {props.projects.map((project,index) => {
                return(
                    <div style={{border: "2px solid #4D4C7D", padding: "2%",margin: "20px auto 10px auto", borderRadius: "5px" }}>
                        <div style={{display: "flex", justifyContent: "flex-end"}}><DeleteIcon onClick={() => {deleteProject(index)}} style={{cursor: "pointer"}}/></div>
                        <TextField  
                            style={{margin: "1% 0"}} 
                            fullWidth 
                            value={project.title} 
                            onChange={(e) => {valChanged(e,index)}} 
                            id="outlined-basic title" 
                            label="Title" 
                            variant="outlined"
                        />
                        <TextField
                            id="outlined-multiline-static description"
                            label="Description ( Max 100 characters )"
                            multiline
                            rows={4}
                            variant="outlined"
                            value={project.description}
                            onChange={(e) => {valChanged(e,index)}}
                            inputProps={{maxLength: 100}}
                            fullWidth
                            style={{margin: "1% 0"}}
                        />
                        <TextField 
                            style={{margin: "1% 0"}}
                            fullWidth 
                            value={project.githubLink} 
                            onChange={(e) => {valChanged(e,index)}} 
                            id="outlined-basic githubLink" 
                            label="Github Link" 
                            variant="outlined"
                        />
                    </div>
                );
            })}
        </div>
    );
}

export default Project;