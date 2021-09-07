import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Button } from 'antd';

class NotFound extends Component { 
    render() {
        return (
            <div className="view-page">
                <div className="text-center my-5">
                    <h1 className="font-bold main-color">404</h1>
                    <p className="par">Page Not Found..</p>
                    <Link to="/"><Button className="shadow radius main-bg secondary-color font-bold mt-4">Got To Home</Button></Link>
                </div>
            </div>
        )
    }
}

export default NotFound;