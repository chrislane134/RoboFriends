import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '5px solid black', height: '700px'}}> {/*adds style to the div using double {{}} and must use camel case} */}
            {props.children}      {/*is used to add them to the children*/}
        </div>
    )
}




export default Scroll;