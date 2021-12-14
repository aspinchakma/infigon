import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import './FormModal.css';

const FormModal = ({ show, handleClose }) => {
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >

            <Modal.Body>
                <h4>Get In Touch</h4>
                <form onSubmit={handleSubmit} className='submit_form'>
                    <input type="text" placeholder='Write Your Full Name' required />
                    <input type="email" name="" id="" placeholder='Write Your Email' required />
                    <input type="text" name="" id="" placeholder='Write Your School Name' required />
                    <input type="text" name="" id="" placeholder='Write Your College Name' />
                    <input type="submit" className='submit_button' value="Submit" />
                    <Button variant="danger" onClick={handleClose}>
                        Close
                    </Button>
                </form>
            </Modal.Body>

        </Modal>
    );
};

export default FormModal;