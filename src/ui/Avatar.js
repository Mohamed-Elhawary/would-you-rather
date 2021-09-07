import React from 'react'

const Avatar = ({width, height, src, className}) => {
    return (
        <img src={src} alt="avatar" width={width} height={height} className={["radius third-border", className].join(' ')}/>
    )
}

export default Avatar;