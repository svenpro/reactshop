import React from 'react';

function Title({name, title}) {
    return (
        <div className="row">
            <div className="col-10 mx-auto text-center text-title">
                <h2>{name}<strong className="title-sufix"> {title}</strong></h2> 
            </div>
        </div>
    );
}

export default Title;