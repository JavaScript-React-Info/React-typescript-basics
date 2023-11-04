import { PersonObjt } from "./Person.types"

const Person = (props: PersonObjt) => {
    return (
        <div>
            {props.name.first} {props.name.last}
        </div>
    )
}

export default Person