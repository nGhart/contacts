import React, { Component } from 'react';
import Stack from 'react-bootstrap/Stack';
import PP from './Avatar.jpeg';
import Image from 'react-bootstrap/Image';

class Contacts extends Component {
    deleteContact = (e) => {
        e.preventDefault();
        this.props.deleteContact(this.props.items.id);
    }
    render() {
        return (
            <>
                {this.props.items.map((item) => (
                    <Stack
                        direction="horizontal"
                        gap={3}
                        className='now todo-row'>
                        <Image
                            src={PP}
                            alt=''
                            width={40}
                            roundedCircle />
                        <h6>{item.name}</h6>
                        <h6>{item.number}</h6>
                        <div
                            className=" ms-auto">
                            <h6>{item.location}</h6>
                        </div>
                        <div
                            className='icons'>
                            <span
                                className='editIcon'>
                                ✎
                            </span>
                            <span
                                className='deleteIcon'
                                onClick={() => this.props.deleteContact(item)}>
                                ✖
                            </span>
                        </div>
                    </Stack>
                ))}
            </>
        );
    }
}

export default Contacts;
