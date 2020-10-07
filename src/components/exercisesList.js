import React, { Component } from 'react'
import axios from 'axios';
import Exercise from './exercise';
import moment from 'moment'

export default class ExercisesList extends Component {
    constructor(props) {
        super(props);

        this.deleteExercise = this.deleteExercise.bind(this);
        //this.fetchExercises = this.fetchExercises.bind(this);

        this.state = {
            exercises: []
        }
    }

    componentDidMount() {
        this.fetchExercises();
    }

    fetchExercises() {
        axios.get('http://localhost:5000/exercises')
            .then(res => {
                this.setState({ exercises: res.data })
            })
            .catch((error) => { console.log(error); });
    }

    deleteExercise(id) {
        console.log('id: ' + id);

        axios.delete('http://localhost:5000/exercises/' + id)
            .then(res => console.log(res.data));

        this.fetchExercises();
    }

    render() {
        return (
            <div>
                <div>
                    {
                        this.state.exercises.map((item) => {
                            return (<Exercise
                                        key={item._id}
                                        description={item.description}
                                        username={item.username}
                                        date={moment(item.date).format('L')}
                                        deleteExercise={() => this.deleteExercise(item._id)}
                                    />)
                        })
                    }
                </div>
            </div>
        )
    }
}
