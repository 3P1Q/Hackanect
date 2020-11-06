import React from 'react';
import ProjectCards from '../../components/ProjectCards/ProjectCards';
import NameAndAvatar from '../../components/NameAndAvatar';
import TechStack from '../../components/TechStack';
import Menu from '../../components/Menu';
import {Grid, Container} from '@material-ui/core';

//temporary json file(s)      (should be removed later)
import projectcard from '../../exampleJSONs/projectcard.json'

export default function ProfilePage(){
    return(
        <>
            <Container style={{maxWidth:"100%", margin:"2% 5%"}}>
                <Grid container spacing={3}>

                    <Grid item sm={12} md={12} lg={4}>
                        <NameAndAvatar  src="" name="Random User"/>
                        <Menu />
                    </Grid>

                    <Grid item sm={12} md={12} lg={8}>
                        <TechStack tags={["React","Mongodb","Express","Node"]}/>
                        <ProjectCards deets={projectcard}/>
                    </Grid>
                </Grid>
            </Container>
            
            
        </>
    );
}