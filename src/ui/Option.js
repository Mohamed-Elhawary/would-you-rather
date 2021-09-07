import React from 'react';
import { Progress, Badge, Radio } from 'antd';

const Option = ({
    questionType,
    option, 
    percentage, 
    optionVotes, 
    totalVotes, 
    authedUser }) => {

    return (
        questionType === "answered" ? (
            <div className="mt-5">
                <h4 className="font-bold main-color text-center">{option.text}</h4>
                <div className="radius shadow third-border p-4 m-auto" style={{width: "250px"}}>
                    <Progress type="circle" percent={percentage} />
                    <h5 className="font-bold third-color mt-3">{optionVotes} votes of {totalVotes}</h5>
                    {option.votes.includes(authedUser) && <Badge.Ribbon text="Your Vote" />}
                </div>
            </div>
        ) : (
            <Radio 
                className="third-color"
                value={option.text}
            >{option.text}</Radio>
        )
    )
}

export default Option;