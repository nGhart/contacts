import React, { Component } from 'react'

class EditContact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.userInfo.name,
            number: props.userInfo.number,
            location: props.userInfo.location,
            id: props.userInfo.id

        }
    }
    handleChange = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
    };
    handleEdit = (e) => {
        e.preventDefault();
        this.props.editContact(this.state.id, this.state);
        this.setState({
            name: "",
            number: "",
            location: ""
        });
        this.props.closeModal()
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleEdit} >
                    <div className='main'>
                    <div
                        >
                        <label>Name </label>
                        <input
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange} />
                    </div>
                    <div
                        className="mb-3" >
                        <label>Phone Number </label>
                        <input
                            className='.to-do-input'
                            type="number"
                            name="number"
                            value={this.state.number}
                            onChange={this.handleChange} />
                    </div>
                    <div
                        className="mb-3" >
                        <label>Location </label>
                        <input
                            type="text"
                            name="location"
                            value={this.state.location}
                            onChange={this.handleChange} />
                            </div>
                            </div>
                        <button className='button'>Save</button>
                    
                </form>

            </>
        );
    }

}

export default EditContact