import React from 'react';
import Form from './Form';
// import axios from 'axios';
import PropTypes from 'prop-types';



const pushState = (obj, url) =>
    window.history.pushState(obj, '',url);

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: this.props.initialnotes
        };
    }


    // componentDidMount(){


    //         this.setState({
    //             data: resp.data.notes
    //               });
    //             console.log(resp.data.notes, "NOTES")
    //         })
    //         .catch(console.error)
    // }

    fetchNote =(noteId) => {
        pushState(
            {currentNoteId: noteId},
            `/note/${noteId}`
        );

    };



    render() {
        // console.log(this.state, "STATE")
        // console.log(this.state.data, "This.state.data")
        return (
            <div>
                <Form

                    onNoteClick={this.fetchNote}

                    data={this.state.data}/>
            </div>

        )
    }
}

// App.defaultProps = {
//     data: [
//         {
//             "id": 1,
//             "title": "Hello! Please enter a task",
//             "content": ""
//
//         }
//     ]
// };


export default App;

