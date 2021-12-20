import {useSelector} from "react-redux"

const Total = () => {

    const nb = useSelector( state => {
        console.log(state)
        return state; 
    } )

    return ( 
        <span className="badge bg-primary">{ nb.length }</span>
    )
}

export default Total ; 