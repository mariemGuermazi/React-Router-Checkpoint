import React, {useState} from 'react'
import{Modal, Button} from 'react-bootstrap'
import ReactPlayer from 'react-player'



const Trailer = ({ trailerURL }) => {
    const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

    return (
        <div>
    <Button variant="dark" onClick={handleShow}>
      Watch Trailer
    </Button>

    <Modal show={show} onHide={handleClose} >
      <Modal.Header>
        <Modal.Title>Movie Trailer</Modal.Title>
      </Modal.Header>
      
      <Modal.Body >
      <ReactPlayer controls url={trailerURL} width='466px' height='240px' />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>


        </div>
    )
}

export default Trailer
