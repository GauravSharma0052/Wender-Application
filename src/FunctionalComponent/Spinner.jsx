import React from 'react'

export default function Spinner() {
    return (
        <div style={{ height: "250px" }} className="w-100 text-center p-5">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}
