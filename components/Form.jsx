'use client'

import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'

const EnquireForm = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Button
        className="rounded-0 border-0 enquire-btn ms-lg-4 mt-2 mt-md-0 align-self-start"
        onClick={handleShow}
      >
        Enquire Now
      </Button>

      <Modal
        size="lg"
        className="p-5 custom-modal"
        show={show}
        onHide={handleClose}
      >
        <Modal.Header
          className="border border-0 p-5"
          closeButton
        ></Modal.Header>
        <Modal.Header className="border border-0 px-5">
          <Modal.Title>
            <h1 className="mb-0">PROJECTS</h1>
            <h1 className="fs-2 mt-0">ENQUIRE</h1>
            <div className="horizontal-line mb-4" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="py-3 px-5">
          <Form>
            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
              <Form.Select
                className="no-focus-outline p-3"
                aria-label="Default select example"
              >
                <option>Select Project</option>
                <option value="1">Hummingbird</option>
                <option value="2">Grasshopper</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Name"
                className="no-focus-outline p-3"
              />
            </Form.Group>
            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Phone Number"
                className="no-focus-outline p-3"
              />
            </Form.Group>
            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="email"
                placeholder="Email ID"
                className="no-focus-outline p-3"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer className="d-flex flex-row justify-content-center border border-0 pb-5">
          <Button
            className="rounded-0 border-0 px-4 enquire-btn"
            onClick={handleClose}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default EnquireForm
