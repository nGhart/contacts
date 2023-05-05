import React, { Component } from 'react';

export default class UserForm
    extends Component {
    constructor(props) {
        super(props);
        this.state = {
            persons: [
                {
                    name: "",
                    number: "",
                    location: ""
                },
            ]
        }
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.newUser(this.state);
        this.setState({
            name: "",
            number: "",
            location: "",
        });
        console.log(this.state.persons);
    };
    render() {
        return (
            <div
                className='signupForm '>
                <form
                className="to-do-form "
                    onSubmit={this.handleSubmit}>
                    <div className="mb-3" >
                        <label>Name </label>
                        <br/>
                        <input type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="mb-3" >
                        <label>Phone Number </label>
                        <br/>
                        <input className='.to-do-input'
                            type="number"
                            name="number"
                            value={this.state.number}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="mb-3" >
                        <label>Location </label>
                        <br/>
                        <input
                            type="text"
                            name="location"
                            value={this.state.location}
                            onChange={this.handleChange}
                        />
                    </div>
                    <button>Submit</button>
                </form> 

                {this.state.persons.map((item, index) => {
                    return (
                        <div
                            key={index}>
                        </div>
                    )
                })}
            </div>
        )
    }
}


