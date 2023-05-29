import React, { useState } from "react";
import { useSelector } from "react-redux";

import { Modal, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom"

import './profile.css'

function Followers({ text, startTab, numOfFollowers = 0 }) {
    const user = useSelector((state) => state.user);
    const [tab, setTab] = useState(startTab);

    const [show, setShow] = useState(false);



    const handleClose = () => {
        setShow(false);
    };

    const handleShow = () => {
        setShow(true);
    };

    function tabOnChange(i) {
        setTab(i);
    }

    return (
        <>
            <button className="btn border-0" onClick={handleShow}>
                <div>{text}</div>
                <div className="fs-32 text-start">{numOfFollowers}</div>
            </button>

            <Modal
                show={show}
                onHide={handleClose}
                className="modal content-border-l round-l"
                dialogClassName="modal-dialog"
                contentClassName="modal-content"
                aria-labelledby="modal"
                size="lg"
            >
                <Modal.Header className="py-0 underline" closeButton>
                    <Row className="w-100">
                        <div className="d-flex justify-content-evenly">
                            <button className={tab == 0 ? "btn-nav active p-3" : "btn-nav p-3"} onClick={() => tabOnChange(0)}>
                                <p className='nopadding s-16 fw-500'>Followers</p></button>
                            <button className={tab == 1 ? "btn-nav active p-3" : "btn-nav p-3"} onClick={() => tabOnChange(1)}>
                                <p className='nopadding s-16 fw-500'>Following</p></button>
                        </div>
                    </Row>

                </Modal.Header>
                <Modal.Body className="mt-0 pt-0 mx-3">

                    {['', '', ''].map(user => {
                        return <Row className="my-3 px-2">
                            <Col lg={2}>a</Col>
                            <Col lg={6}>
                                <div>Username</div>
                                <div>Name</div>
                                <div>description</div>
                            </Col>
                            <Col lg={3}><button className="btn btn-follower">Following</button></Col>
                        </Row>
                    })}

                </Modal.Body>


            </Modal>
        </>
    )
}

export default Followers