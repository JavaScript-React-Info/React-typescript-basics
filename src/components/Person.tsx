

import React from 'react'

type PersonObjt = {
    name: {
        first: string,
        last: string
    }
}

const Person = (props: PersonObjt) => {
    return (
        <div>
            {props.name.first} {props.name.last}
        </div>
    )
}

export default Person