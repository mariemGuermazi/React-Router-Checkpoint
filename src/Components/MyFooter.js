import React from 'react'

const MyFooter = () => {

    const footerstyle = {
        color: "white",
        backgroundColor: "#212529",
        padding: 10,
        height: 50
    };

    return (
        <div className="footer"  style ={footerstyle}>
        <p>GoMyCode 2021</p>
        </div>
    )
}

export default MyFooter