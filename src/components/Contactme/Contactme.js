import React from 'react';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { useState } from 'react';


function Contactme() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
      window.alert('Thank you! I\'ll be in contact soon')


    }


return (
<div class="contact">

    <div id="contact">
<h2>
        Contact Me
</h2>

</div>

 



<>
<div className='contactModal'>
      <Button variant="primary" onClick={handleShow} className='modalBtn'>
        Contact Me
      </Button>
    
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Me</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          
<Form  noValidate validated={validated} onSubmit={handleSubmit}>
<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Name</Form.Label>
    <Form.Control type="name" placeholder="name" required />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="name@example.com" required />
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1" >
    <Form.Label>Subject</Form.Label>
    <Form.Control as="textarea" rows={3} required />
  </Form.Group>
  <Button variant="primary" type="submit" className='modalBtn' >
    Submit
  </Button>
</Form>
</Modal.Body>
        
      
      <Modal.Footer>
          {/* <Button variant="secondary" onClick={handleClose}>
            Close
          </Button> */}
          <Button variant="primary" onClick={handleClose} className='modalBtn' >
            Done
          </Button> 
        </Modal.Footer>
      </Modal>
      
    </div>

    </>


 {/* <div id='contactLinks'>
    <ul className='contactLinks'>                   
        <li className='contactList'>
            <a href="mailto:patrickxbrodie@hotmail.com?subject=Portfolio Intrest">Patrickxbrodie@hotmail.com</a>
        </li>
        <li className='contactList'>
            <a href="https://www.linkedin.com/in/patrick-brodie-a767261b5/" target="_blank">LinkedIn</a>
        </li>
        <li className='contactList'>
            <a href="#">555-555-5555</a>
        </li>  
        <li className='contactList'>
            <a href="https://worldofwarcraft.com/en-us/character/us/skullcrusher/staycold" target="_blank">Staycold</a>
        </li>
    </ul>
  </div> */}



</div>






)}

export default Contactme