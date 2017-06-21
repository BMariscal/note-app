import React from 'react';

function ListItem(props) {

  return (
    <li className="list-group-item">
        <form  method="post">
        <input className="overflow ellipsis input_field" type="text" name="content" size="100" defaultValue={props.value}/>

      <div className="my_buttons">


            <button type="submit" className="btn btn-primary btn-sm" onClick={props.onClick0}>Save</button>
               <form action="/task" method="get">
              <button type="submit" className="btn btn-primary btn-sm" name="id"onClick={props.onClick2} itemID={props.itemID} value={props.itemID} >Details</button>
                </form>
                <form action="/" method="post">
            <button type="submit" className="btn btn-primary btn-sm" onClick={props.onClick1}>Delete</button>
                </form>
            </div>
        </form>



    </li>
  );
}


export default ListItem;