import React from 'react';
import Form from './Form';
import axios from 'axios';
import PropTypes from 'prop-types';


class App extends React.Component{

     constructor(props) {
    super(props);
    this.state = {
        data: this.props.data
    };
}


    componentDidMount(){

        axios.get('/api/notes')
            .then(resp => {

            this.setState({
                data: resp.data.notes
                  });
                console.log(resp.data.notes, "NOTES")
            })
            .catch(console.error)
    }
    render(){
            console.log(this.state, "STATE")
            console.log(this.state.data, "This.state.data")
    return (
    <div>
    <Form data={this.state.data}/>
    </div>

  )}
}

App.defaultProps = {
    data : [
    {
        "id":1,
        "title": "Hello! Please enter a task",
        "content": ""

    }
    ]
};



export default App;

