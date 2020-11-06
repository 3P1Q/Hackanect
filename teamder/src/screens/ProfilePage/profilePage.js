import React from 'react';
import ProjectCards from '../../components/ProjectCards/ProjectCards';
import NameAndAvatar from '../../components/NameAndAvatar';
import TechStack from '../../components/TechStack';
import Menu from '../../components/Menu';
import {Grid, Container, Typography} from '@material-ui/core';

import '../../components/Profile.css'

//temporary json file(s)      (should be removed later)
import projectcard from '../../exampleJSONs/projectcard.json'

export default function ProfilePage(){
    return(
        <div className="fullpage" style={{display:"flex", flexDirection:"column", flexWrap:"wrap"}}>
            <div className="topsection" style={{display:"flex", flexDirection:"row", flexWrap:"wrap"}}>
                <NameAndAvatar style={{minWidth:"300px"}} className="NaA"  src="" name="Random User"/>
                <Typography className="bio">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
            </div>
            <div className="bottomsection" style={{display:"flex", flexDirection:"row", flexWrap:"wrap", justifyContent:"space-between"}}>    
                <Menu className="menu"/>
                <div style={{display:"flex", flexDirection:"column", flexWrap:"wrap", minWidth:"60vw"}}>
                    <TechStack className="stack" tags={["React","Mongodb","Express","Node", "html", "css"]}/>
                    <ProjectCards className="projects" deets={projectcard}/>
                </div>
                
            </div>
        </div>

//         <>
//             <Container style={{maxWidth:"100%", margin:"2% 5%"}}>
//             <Grid 
//                 container
//                 direction="row"
//                 spacing={0}
//             >
//                 <Grid item sm={12} md={12} lg={4} xs>
//                     <NameAndAvatar  src="" name="Random User"/>
//                     <Menu />
//                 </Grid>
                
//                 <Grid 
//                 container
//                 xs
//                 spacing={3}
//                 direction="row"
//   justify="flex-start"
//   alignItems="stretch"
// >


                    /* <Grid item sm={12} md={12} lg={4}>
                        <NameAndAvatar  src="" name="Random User"/>
                        <Menu />
                    </Grid> */
  
                    /* <Grid item sm={12} md={12} lg={8}>
                        <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
                    </Grid> */

        //             <Grid item sm={12} md={12} lg={8}>
        //             <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
                   
        //                 <TechStack tags={["React","Mongodb","Express","Node"]}/>
        //                 <ProjectCards deets={projectcard}/>
        //             </Grid>
        //         </Grid>
        //     </Grid>
        // </Container>
        // </>
    );
}