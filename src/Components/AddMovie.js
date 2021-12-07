import React, { useState } from "react";
import {Form, Modal, Button} from 'react-bootstrap'


const AddMovie = ({add}) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


      const [name, setName] = useState("");
      const [discription, setDiscription] = useState("");
      const [type, setType] = useState("");
      const [date, setDate] = useState("");
      const [rating, setRating] = useState("");
      const [image, setImage] = useState("");


      const handleName = (e) => {
        setName(e.target.value)
      }
      const handleDiscription = (e) => {
        setDiscription(e.target.value)
      }
      const handleType = (e) => {
        setType(e.target.value)
      }
      const handleDate = (e) => {
        setDate(e.target.value)
      }
      const handleRating = (e) => {
        setRating(e.target.value)
      }
      const handleImage = (e) => {
        setImage(e.target.value)
      }

const handleMovie = () => {
  add({id:Math.random(), name, discription, type, date, rating, image})
}


  return (
    <div className= "addBtn">
      <>
      
    <Button classNames="addBtn" variant="dark" onClick={handleShow}>Add Movie</Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form.Label>Movie Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Movie Name" value= {name} onChange={(e) => handleName(e)} />
            <Form.Label>Movie Year</Form.Label>
            <Form.Control type="number" placeholder="Enter Movie Year" value= {date} onChange={(e) => handleDate(e)}/>
            <Form.Label>Movie Type</Form.Label>
            <Form.Control type="text" placeholder="Enter Movie Type" value= {type} onChange={(e) => handleType(e)}/>
            <Form.Label>Movie Rate</Form.Label>
            <Form.Control type="number" placeholder="Enter Movie Rate" value= {rating} onChange={(e) => handleRating(e)}/>
            <Form.Label>Movie Discription</Form.Label>
            <Form.Control type="text" placeholder="Enter Movie Discription" value= {discription} onChange={(e) => handleDiscription(e)}/>
            <Form.Label>Movie Poster</Form.Label>
            <Form.Control type="url" placeholder="Enter Movie Poster URL" value= {image} onChange={(e) => handleImage(e)}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="dark" onClick= {handleMovie}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    </div>
  );
}

export default AddMovie
