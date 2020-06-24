import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', margin:'5rem 0 3rem 0', border: '1px solid black', height: '800px'}}>
            {props.children}
        </div>
    );
};

export default Scroll;