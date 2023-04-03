import React from 'react'

function Logo({title, logoClick}) {
    return (
        <div className="text-light d-flex justify-content-start">
            <h2 className="mx-3 title" onClick={logoClick}>{title}</h2>
        </div>
    )
}

export default Logo