import React from 'react';
import logo from '../../assets/img/logo.svg';
import '../../assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Button, Container, Modal, ModalBody, ModalHeader, FormGroup, ModalFooter } from 'reactstrap';

const data = [
    { id: 1, name: "pentagono", sides: "5" },
    { id: 2, name: "hexagono", sides: "6" },
    { id: 3, name: "heptagono", sides: "7" },
    { id: 4, name: "octagono", sides: "8" },
];
class Crud extends React.Component {
    state = {
        data: data,
        form: {
            id: '',
            name: '',
            sides: ''
        },
        modalInsert: false,
        modalEdit: false,
    };
    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        });
    }
    showInsertModal = () => {
        this.setState({ modalInsert: true });
    }
    hideInsertModal = () => {
        this.setState({ modalInsert: false });
    }

    showEditModal = (register) => {
        this.setState({ modalEdit: true, form: register });
    }
    hideEditModal = () => {
        this.setState({ modalEdit: false });
    }

    insert = () => {
        var newValue = { ...this.state.form };
        newValue.id = this.state.data.length + 1;
        var query = this.state.data;
        query.push(newValue);
        this.setState({ data: query, modalInsert: false });
    }
    edit = (dataset) => {
        var accountant = 0;
        var query = this.state.data;
        query.map((register) => {
            if (dataset.id == register.id) {
                query[accountant].name = dataset.name;
                query[accountant].sides = dataset.sides;
            }
            accountant++;
        });
        this.setState({ data: query, modalEdit: false });
    }
    delete = (dataset) => {
        var option = window.confirm("¿Realmente quieres eliminar este dato? " + dataset.name);
        if (option) {
            var accountant = 0;
            var query = this.state.data;
            query.map((register) => {
                if (register.id == dataset.id) {
                    query.splice(accountant, 1);
                }
                accountant++;
            });
            this.setState({ data: query });
        }
    }
    render() {
        return (
            <>
                <Container className='mx-4 my-4'>
                    <br />

                    <Button color='success' onClick={() => this.showInsertModal()}>Insertar nuevo dato</Button>
                    <br /><br />
                    <Table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>Lados</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.data.map((elemento) => (
                                <tr>
                                    <td>{elemento.id}</td>
                                    <td>{elemento.name}</td>
                                    <td>{elemento.sides}</td>
                                    <td><Button color='primary' onClick={() => this.showEditModal(elemento)}>Editar</Button>
                                        {"  "}
                                        <Button color='danger' onClick={() => this.delete(elemento)}>Eliminar</Button></td>
                                </tr>
                            ))}

                        </tbody>
                    </Table>

                </Container>
                <Modal isOpen={this.state.modalInsert}>
                    <ModalHeader>
                        <div>
                            <h3>Insertar registro</h3>
                        </div>
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <label>Id: </label>
                            <input className='form-control' readOnly type="text" value={this.state.data.length + 1} />
                        </FormGroup>
                        <FormGroup>
                            <label>Nombre: </label>
                            <input className='form-control' name='name' type="text" onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <label>Lados: </label>
                            <input className='form-control' name='sides' type="text" onChange={this.handleChange} />
                        </FormGroup>
                        <ModalFooter>
                            <Button color='success' onClick={() => this.insert()}>Guardar</Button>
                            <Button color='danger' onClick={() => this.hideInsertModal()}>Cancelar</Button>
                        </ModalFooter>
                    </ModalBody>
                </Modal>
                <Modal isOpen={this.state.modalEdit}>
                    <ModalHeader>
                        <div>
                            <h3>Editar registro</h3>
                        </div>
                    </ModalHeader>
                    <ModalBody>
                        <FormGroup>
                            <label>Id: </label>
                            <input className='form-control' readOnly type="text" value={this.state.form.id} />
                        </FormGroup>
                        <FormGroup>
                            <label>Nombre: </label>
                            <input className='form-control' name='name' type="text" onChange={this.handleChange} value={this.state.form.name} />
                        </FormGroup>
                        <FormGroup>
                            <label>Lados: </label>
                            <input className='form-control' name='sides' type="text" onChange={this.handleChange} value={this.state.form.sides} />
                        </FormGroup>
                        <ModalFooter>
                            <Button color='success' onClick={() => this.edit(this.state.form)}>Guardar</Button>
                            <Button color='danger' onClick={() => this.hideEditModal()}>Cancelar</Button>
                        </ModalFooter>
                    </ModalBody>
                </Modal>
            </>)
    }
}

export default Crud;
//npm i bootstrap reactstrap para instalar bootstrap en nuestro proyecto