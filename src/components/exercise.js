import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom'

class Exercise extends Component {

    editExercise(id) {
        this.props.history.push({
            pathname: '/edit/' + id
        });        
    }

    render() {
        return (
            <div className="card mx-2 my-4">
                <div className="card-body">
                    <p>{this.props.description}</p>
                    <p className="font-italic">by: {this.props.username}</p>
                    <p className="font-italic">at: {this.props.date}</p>
                </div>
                <div className="card-footer">
                    <button type="button" className="btn btn-primary mx-2" onClick={() => this.editExercise(this.props._id)}>edit</button>
                    <button type="button" className="btn btn-danger mx-2"onClick={() => this.props.deleteExercise(this.props._id)}>delete</button>
                </div>
            </div>
        );
    }
}

export default withRouter(Exercise);