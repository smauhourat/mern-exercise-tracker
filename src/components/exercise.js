import React from 'react';

const exercise = (props) => {
    return (
        <div className="card">
            <div className="card-body">
                <p>{props.description}</p>
                <p className="font-italic">by: {props.username}</p>
                <p className="font-italic">at: {props.date}</p>
            </div>
            <div className="card-footer">
                <button onClick={props.deleteExercise}>delete</button>
            </div>
        </div>
    );
};

export default exercise;