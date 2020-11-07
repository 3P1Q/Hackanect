import React from 'react';
import Name from './ProfileEdit/Name';
import Tags from './ProfileEdit/Tags';
import Description from './ProfileEdit/Description';
import {Modal,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Edit = () => {

    function MyVerticallyCenteredModal(props) {
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
              <Name />
              <Description/>
              <Tags />
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={props.onHide} style={{backgroundColor: "#363062",borderColor: "#363062"}}>Update</Button>
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
