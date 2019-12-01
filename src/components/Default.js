import React, { Component } from 'react';

class Default extends Component {
    render() {
        return (
            <div className="container-fluid">
                <h1 className="mt-5 text-center display-4">Error: 400</h1>
                <h5 class="mt-3 alert alert-info">Sorry, but page with url <strong className="text-danger">"{this.props.location.pathname}"</strong> was not found :(</h5>  
            </div>
        );
    }
}

export default Default;