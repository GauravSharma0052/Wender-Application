import React from 'react'
import nopic from "../assets/images/noimagep.png"
export default function NewsItem(props) {
    return (
        <>
            <div className="card">
                <img src={props.pic ? props.pic : nopic} height="200px" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title" style={{ height: "100px" }}>{props.title.slice(0, 60) + "..."}</h5>
                    <p className="card-text" style={{ height: "200px" }}>{props.description.slice(0, 200)}</p>
                    <a href={props.url} className="background w-100 text-light text-decoration-none p-2 d-block text-center rounded">Read full Article</a>
                </div>
            </div>
        </>
    )
}
