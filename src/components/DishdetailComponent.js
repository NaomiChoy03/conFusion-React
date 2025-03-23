import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


function RenderDish({dish}) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg top width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    )
}

function RenderComments({comments}) {
    const commentsDiv = comments.map((comment) => { 
        return (
            <div>
                {comment.comment}
                {" "}
                {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
            </div>
        )
    });

    return (
        <div className="container">
            <div className="row">
                {commentsDiv}
            </div>
        </div>
        //{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
    )

    //const test = typeof comments;
    //return (
    //    <div>{test}</div>
    //);
}

const DishDetail = (props) => {
    if (props.dish != null) 
        return (
            <div>
                <RenderDish dish={props.dish} />
                <RenderComments comments={props.dish.comments} />
            </div>
        );
    else
        return(
            <div></div>
        );
}

export default DishDetail;