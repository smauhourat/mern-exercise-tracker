import React, { Component } from 'react'
import axios from 'axios';
import DatePicker from 'react-datepicker';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-datepicker/dist/react-datepicker.css';

export default class createExercise extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            description: '',
            username: '',
            date: new Date(),
            duration: 0,
            users: []
        }

        this.onChangeInput = this.onChangeInput.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.addExercise = this.addExercise.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:5000/users')
            .then(res => {
                if(res.data.length > 0) {
                    this.setState({
                        users: res.data.map(user => user.username),
                        username: res.data[0].username
                    });
                }
            });
    }

    onChangeDate(date) {
        this.setState({
            date: date
        });
    }

    onChangeInput(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    addExercise(event) {
        event.preventDefault();

        axios.post('http://localhost:5000/exercises', this.state)
            .then(res => {
                toast.success(res.data.status);
                this.props.history.replace('/');
            })
            .catch(error => { 
                console.log(error);
                toast.error(error.description);
            });
    }

    cancelForm = () => {
        this.props.history.goBack();
    }

    render() {
        return (
            <div>
                <h3>Create Exercise</h3>
                <form onSubmit={this.addExercise}>
                    <div className="form-group">
                        <select ref="username"
                            required
                            name="username"
                            className="form-control"
                            value={this.state.username}
                            onChange={this.onChangeInput}>
                                {
                                    this.state.users.map((user) => {
                                        return (
                                            <option 
                                                key={user}
                                                value={user}>
                                                {user}
                                            </option>
                                        );
                                    })
                                }
                        </select>
                    </div>
                    <div className="form-group">
                        <input 
                            name="description"
                            type="text" 
                            value={this.state.description}
                            onChange={this.onChangeInput}
                            placeholder=" Description "
                            className="form-control"
                            />
                    </div>
                    <div className="form-group">
                        <input 
                            name="duration"
                            type="text" 
                            value={this.state.duration}
                            onChange={this.onChangeInput}
                            placeholder=" Duration "
                            className="form-control"
                            />
                    </div>
                    <div className="form-group">
                        <DatePicker 
                            selected={this.state.date}
                            onChange={this.onChangeDate}
                            className="form-control"
                            />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary mx-2">Send</button>
                        <button type="button" onClick={this.cancelForm} className="btn btn-secondary mx-2">Cancel</button>
                    </div>
                </form>
            </div>
        )
    }
}
