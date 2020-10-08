import React, { Component } from 'react'
import axios from 'axios';
import Exercise from './exercise';
import moment from 'moment'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class ExercisesList extends Component {
    constructor(props) {
        super(props);

        this.deleteExercise = this.deleteExercise.bind(this);
        //console.log(this.props.history);

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
        if (window.confirm('Are you sure you want to delete it?')) {
            axios.delete('http://localhost:5000/exercises/' + id)
                .then(res => { 
                    toast.success(res.data.status);
                })
                .catch(err => { 
                    console.log(err);
                    toast.error(err.description);
                });
            
                this.fetchExercises();
        }
    }

    render() {
        return (
            <div>
                <div>
                    {
                        this.state.exercises.map((item) => {
                            return (<Exercise
                                        key={item._id}
                                        _id={item._id}
                                        description={item.description}
                                        username={item.username}
                                        date={moment(item.date).format('L')}
                                        deleteExercise={this.deleteExercise}
                                    />)
                        })
                    }
                </div>
            </div>
        )
    }
}
