import React from 'react';
import { Button } from "antd";
import { Link } from "react-router-dom";

export default function ExternalViewQuestion({id, optionOne, optionTwo}) {
    return (
        <div>
            <p className="par mt-3 font-bold">- {optionOne.text}</p>
            <span className="secondary-color main-bg rounded-circle p-2">Or</span>
            <p className="par mt-3 font-bold">- {optionTwo.text}</p>
            <Link to={`/question/${id}`}>
                <Button className="shadow radius main-bg secondary-color font-bold">Show Question</Button>
            </Link>
        </div>
    )
}
