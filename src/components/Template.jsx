import React from 'react'

function Template({template}) {
    return (
        <div dangerouslySetInnerHTML={{__html: template}}></div>
    )
}

export default Template
