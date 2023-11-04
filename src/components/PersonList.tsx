

import React from 'react'

type PersonList = {
    personList: {
        id: number,
        name: string,
        age: number
    }[]
}

const PersonList = (props: PersonList) => {
    return (
        <div>
            {props.personList.map((person)=>{
                return <h1>{person.name}</h1>
            })}
        </div>
    )
}

export default PersonList