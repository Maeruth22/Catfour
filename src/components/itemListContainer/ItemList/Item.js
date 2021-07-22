import { useState } from "react"


export default function Item (props) {
    return (
        <>
        <div>
            <h1>{props.title}</h1>
            <div>{props.description}</div>
            <div>{props.price}</div>
        </div>
       </>
    )
    }