'use client'

import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'

const EnquireForm = () => {
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  const [projectEnquire, SetProjectEnquire] = useState({
    projectName: '',
    name: '',
    phone: '',
    email: '',
  })

  const [project, setProject] = useState()
  const [name, setName] = useState()
  const [phone, setPhone] = useState()
  const [email, setEmail] = useState()

  const handleSubmit = (e) => {
    e.preventDefault()
    SetProjectEnquire({
      projectName: project,
      name,
      phone,
      email,
    })

    setProject('')
    setName('')
    setPhone('')
    setEmail('')
  }

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
        className="p-lg-5 custom-modal"
        show={show}
        onHide={handleClose}
      >
        <Modal.Header
          className="border border-0 p-3 p-lg-5"
          closeButton
        ></Modal.Header>
        <Modal.Header className="border border-0 px-4 px-lg-5">
          <Modal.Title>
            <h1 className="mb-0">PROJECTS</h1>
            <h1 className="fs-2 mt-0">ENQUIRE</h1>
            <div className="horizontal-line mb-4" />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="py-3 px-lg-5">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
              <Form.Select
                className="no-focus-outline p-3"
                aria-label="Default select example"
                onChange={(e) => setProject(e.target.value)}
                value={project}
              >
                <option>Select Project</option>
                <option value="1956">1956</option>
                <option value="Hummingbird">Hummingbird</option>
                <option value="Grasshopper">Grasshopper</option>
                <option value="Veda">Veda</option>
              </Form.Select>
            </Form.Group>
            <Form.Group
              className="mb-4"
              controlId="exampleForm.ControlInput1"
              value={name}
            >
              <Form.Control
                type="text"
                placeholder="Name"
                className="no-focus-outline p-3"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-4"
              controlId="exampleForm.ControlInput1"
              value={phone}
            >
              <Form.Control
                type="text"
                placeholder="Phone Number"
                className="no-focus-outline p-3"
                onChange={(e) => setPhone(e.target.value)}
              />
            </Form.Group>
            <Form.Group
              className="mb-4"
              controlId="exampleForm.ControlInput1"
              value={email}
            >
              <Form.Control
                type="email"
                placeholder="Email ID"
                className="no-focus-outline p-3"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Modal.Footer className="d-flex flex-row justify-content-center border border-0 pb-5">
              <Button
                className="rounded-0 border-0 px-lg-4 enquire-btn"
                type="submit"
                onClick={handleClose}
              >
                Submit
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default EnquireForm
