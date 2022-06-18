import React, { Component } from 'react'
import nopic from "../assets/images/noimagep.png"
export default class NewsItem extends Component {
    render() {
        return (
            <>
                <div className="card">
                    <img src={this.props.pic?this.props.pic:nopic} height="200px" className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title" style={{height:"100px"}}>{this.props.title.slice(0,60)+"..."}</h5>
                            <p className="card-text" style={{height:"200px"}}>{this.props.description.slice(0,200)}</p>
                            <a href={this.props.url} className="background w-100 text-light text-decoration-none p-2 d-block text-center rounded">Read full Article</a>
                        </div>
                </div>
            </>
        )
    }
}
