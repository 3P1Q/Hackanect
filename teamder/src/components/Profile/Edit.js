import React, { useState, useContext} from 'react';
import {userDataContext} from './profilePage';
import Name from '../ProfileEdit/Name';
import Tags from '../ProfileEdit/Tags';
import Description from '../ProfileEdit/Description';
import Social from '../ProfileEdit/Social';
import {Modal,Button} from 'react-bootstrap';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

axios.defaults.withCredentials = true;


const Edit = (props) => {

  

    function MyVerticallyCenteredModal(props) {
      const [data,setData] = useContext(userDataContext);         // when updated, db gets updated through profilePage.js via context

      const [name,setName] = useState(data.name || "");
      const [desc,setDesc] = useState(data.description || "");
      const [tags, setTags] = useState(data.techStack || []);
      const [social, setSocial] = useState(data.social ? data.social : {facebook:"#", github:"#", twitter:"#", linkedin:"#"});

      async function update(e)
      {
        e.preventDefault();
        console.log("update clicked");
        props.onHide();
        setData((prev) => ({
          ...prev,
          name:name,
          description: desc,
          techStack: tags,
          //socialString: social?JSON.stringify(social):'',
          social: social
        }));

        // await updateDB(data);
      }
        return (
          <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Edit Profile
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Name name={name} setName={setName}/>
              <Description desc={desc} setDesc={setDesc}/>
              <Tags tags={tags} setTags={setTags}/>
              <Social social={social} setSocial={setSocial}/>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={update} style={{backgroundColor: "#363062",borderColor: "#363062"}}>Update</Button>
            </Modal.Footer>
          </Modal>
        );
      }
        const [modalShow, setModalShow] = React.useState(false);

        return (
          <>
            <span onClick={() => setModalShow(true)}>
                Edit
            </span>
      
            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </>
        );
}

export default Edit;
