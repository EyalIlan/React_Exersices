import React,{ useState } from 'react'
// import Text from './Text'

export default function ex18() {
    
    const name = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem commodi, quasi sequi aliquid accusamus tempore! Exercitationem molestias commodi, libero praesentium consequuntur perferendis debitis, similique repellat rerum minima laboriosam et nisi.'
    const MaxLength = 100

    return (
        <div>
            <Text text={name} Length={MaxLength}></Text>
        </div>
    )
}
