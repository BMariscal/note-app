import React from 'react';

function Buttons(props) {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
  <div>
    <a href="#" onClick={props.onClick0}><button>
      Save
      </button>
    </a>
        <a href="#" onClick={props.onClick2}><button>
      Details
      </button>
    </a>
        <a href="#" onClick={props.onClick3}><button>
      Delete
      </button>
    </a>
    </div>
  );
}

export default Buttons;















