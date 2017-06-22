import React from 'react';

const style = {
  marginLeft: 5
};

function Buttons(props) {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
  <div style={style}>
    <a href="#" onClick={props.onClick0}><button id="save_button">
      Save
      </button>
    </a>

        <a href="#" onClick={props.onClick3}><button id="delete_button">
      Delete
      </button>
    </a>
    </div>
  );
}

export default Buttons;















