import React from 'react';
import SingleContact from './SingleContact';

const Contacts = (props) => {

    return (
        <>
            {props.usersData.map((user) => {
                return <SingleContact userInfo={user} key={user.id} deleteContact={props.deleteContact} editContact={props.editContact} />
            })}
        </>
    );
}


export default Contacts;
