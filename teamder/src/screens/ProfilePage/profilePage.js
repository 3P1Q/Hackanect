import React from 'react';
import ProjectCards from '../../components/ProjectCards/ProjectCards'
import NameAndAvatar from '../../components/NameAndAvatar'
import TechStack from '../../components/TechStack'
import Menu from '../../components/Menu'

//temporary json file(s)      (should be removed later)
import projectcard from '../../exampleJSONs/projectcard.json'

export default function ProfilePage(){
    return(
        <>
            <NameAndAvatar src="" name="Harshdeep Singh Pruthi"/>
            <Menu />
            <TechStack tags={["React","Mongodb","Express","Node"]}/>
            <ProjectCards deets={projectcard}/>
        </>
    );
}