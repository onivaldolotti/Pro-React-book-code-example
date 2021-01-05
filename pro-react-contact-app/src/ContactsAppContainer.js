import React, {Component} from 'react';
import ContactsApp from "./ContactsApp";

class ContactsAppContainer extends Component {
    initialState = {
        contacts: []
    }
    state = this.initialState;

    componentDidMount(e) {
        fetch('./contacts.json')
            .then((response) =>response.json())
            .then((responseData) => {
                this.setState({contacts: responseData});
            }).catch((error) => {
            console.log('Error fetching and parsing data', error);
        });
    }

    render() {
        return (
            <ContactsApp contacts={this.state.contacts}/>
        );
    }
}

export default ContactsAppContainer;