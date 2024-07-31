import React from 'react'

const Loading = (props) => {
    const { message = "Loading" } = props;
    return <p>{message}</p>;
}

export default Loading