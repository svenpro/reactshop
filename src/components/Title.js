import React from 'react';

function Title({name, title}) {
    return (
        <div className="row">
            <div className="col-10 mx-auto text-center">
                <h2 className="text-title">{name}<strong className="title-sufix"> {title}</strong></h2> 
            </div>
        </div>
    );
}

export default Title;