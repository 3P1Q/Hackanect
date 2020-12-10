import React from 'react';
import AddCircleSharpIcon from '@material-ui/icons/AddCircleSharp';
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
            props.projects[index] = {
                title: trg.value,
                description: props.projects[index].description,
                githubLink: props.projects[index].githubLink
            }
        else if(trg.id === "outlined-multiline-static description")
            props.projects[index].description = trg.value;
        else
            props.projects[index].githubLink = trg.value;
        props.setProjects(arr);
        // setProjects();
    }

    return( 
        <div>
            <div style={{fontWeight: '700',marginRight: "15px", color: 'black',marginTop: "30px",fontSize: "20px"}}>Projects <span onClick={addNewProject}><AddCircleSharpIcon /></span></div>
            {props.projects.map((project,index) => {
                return(
                    <div style={{border: "2px solid #4D4C7D", padding: "2%",margin: "20px auto 10px auto", borderRadius: "5px" }}>
                        <TextField  
                            style={{margin: "1% 0"}} 
                            fullWidth 
                            value={project.title} 
                            onChange={(e) => valChanged(e,index)} 
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
                            onChange={(e) => valChanged(e,index)}
                            inputProps={{maxLength: 200}}
                            fullWidth
                            style={{margin: "1% 0"}}
                        />
                        <TextField 
                            style={{margin: "1% 0"}}
                            fullWidth 
                            value={project.githubLink} 
                            onChange={(e) => valChanged(e,index)} 
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