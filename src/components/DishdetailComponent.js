import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
import { Link } from 'react-router-dom';

import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

class CommentForm extends Component {
    constructor(props) {
        super(props);
        
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
          isModalOpen: false
        }
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values) {
        this.toggleModal();
        alert("Values: " + "\ndishId: " + this.props.dishId/* + " \nrating: " + this.values.rating + "\nauthor: " + this.values.author + "\ncomments: " + this.values.comment*/);
        //event.preventDefault();
    }

/*
// TODO Check if this is needed
    handleSubmit(values) {
        this.toggleModal();
        alert("Values:" + "\ndishid: " + this.props.dishId + "\nrating: " + values.rating + "\nauthor: " + values.author + "\ncomments: " + values.comment);
        this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);
        // For debuggin purposes
        console.log("Values:" + "\ndishid: " + this.props.dishId + "\nrating: " + values.rating + "\nauthor: " + values.author + "\ncomments: " + values.comment);
    }*/

    render() {
        return (// value={this.state.contactType}onChange={this.handleInputChange}
            <div className="container">
                <div className="row">
                    <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>
                    <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                        <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                        <ModalBody>
                            <LocalForm onSubmit={this.handleSubmit}>
                                <FormGroup>
                                    <Label htmlFor="rating">Rating</Label>
                                    <Control.select model=".rating" name="rating" className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="author">Author</Label>
                                    <Control.text model=".author" id="author" name="author"
                                    className="form-control"
                                    validators={{
                                        required, minLength: minLength(3), maxLength: maxLength(15)
                                    }} />
                                    <Errors
                                        className="text-danger"
                                        model=".author"
                                        show="touched"
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater 3 or more characters',
                                            maxLength: 'Must be 15 characters or less'
                                        }}
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="comment">Comment</Label>	
                                    <Control.textarea model=".comment" id="comment" name="comment" rows="6" className="form-control" />
                                </FormGroup>
                                <Button type="submit" value="submit" color="primary">Submit</Button>
                            </LocalForm>
                        </ModalBody>
                    </Modal>
                </div>
            </div>
        )
    }
}

function RenderDish({dish}) {
    return (
        <div>
            <Card>
                <CardImg top width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle tag="h5">{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>
    )
}

function RenderComments({comments, dishId}) {
    const commentsDiv = comments.map((comment) => { 
        return (
            <div>
                <ul class="list-unstyled">
                    <li>{comment.comment}<br/><br/></li>
                    <li>--{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
                </ul>
            </div>
        )
    });

    if (comments != null)
        return (
            <div>
                <h4>Comments</h4>
                {commentsDiv}
                <CommentForm dishId={dishId}/>
            </div>
        )
    else
        return(
            <div></div>
        );
}

const DishDetail = (props) => {
    if (props.dish != null)
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} dishId={props.dish.id} />
                    </div>
                </div>
            </div>
        );
    else
        return(
            <div></div>
        );
}

export default DishDetail;