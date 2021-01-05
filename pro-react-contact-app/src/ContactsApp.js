import React, { Component} from 'react';
import PropTypes from 'prop-types';
import SearchBar from "./SearchBar";
import ContactList from "./ContactList";

// Main (stateful) component.
// Renders a SearchBar and a ContactList
// Passes down filterText state and handleUserInput callback as props
class ContactsApp extends Component {
    initialState = {
        filterText: ''
    }

    state = this.initialState;

    handleUserInput = searchTerm => {
        this.setState({filterText:searchTerm})
    }

    render(){
        return(
            <div>
                <SearchBar filterText={this.state.filterText}
                onUserInput = {this.handleUserInput}/>
                <ContactList contacts={this.props.contacts}
                             filterText={this.state.filterText}/>
            </div>
        )
    }
}
ContactsApp.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object),
    filterText: PropTypes.string,
}

export default ContactsApp;