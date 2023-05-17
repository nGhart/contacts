import React, { useState } from 'react'
import Stack from 'react-bootstrap/Stack';
import PP from './Avatar.jpeg';
import Image from 'react-bootstrap/Image';
import EditContact from './EditContact';

import Modal from 'react-bootstrap/Modal';
function SingleContact(props) {
    const deleteContact=(e)=> {
        e.preventDefault();
        props.deleteContact(props.userInfo.id);
    }
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header className="mb3" closeButton>
                    <Modal.Title>Edit</Modal.Title>
                </Modal.Header>
                <Modal.Body className='modalMain'>
                    <EditContact userInfo={props.userInfo} editContact={props.editContact} closeModal={handleClose} />
                </Modal.Body>
            </Modal>

            <Stack
                direction="horizontal"
                gap={3}
                className='now todo-row'>
                <Image
                    src={PP}
                    alt=''
                    width={40}
                    roundedCircle />
                <h6>{props.userInfo.name}</h6>
                <h6>{props.userInfo.number}</h6>
                <div
                    className=" ms-auto">
                    <h6>{props.userInfo.location}</h6>
                </div>
                <div
                    className='icons'>
                    <span onClick={handleShow}>
                        ✎
                    </span>
                    <span
                        className='deleteIcon'
                        onClick={deleteContact}>
                        ✖
                    </span>
                </div>
            </Stack>

        </>
    );
}




export default SingleContact