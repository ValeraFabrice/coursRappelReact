import {useState} from "react";
const Exo1 = () => {
    /* const [state, setState]= useState( { 
        id : 12,
        nom : "Alain",
        age : 9 } ) */
    const [id , setId] = useState(12)
    const [nom , setNom] = useState("Alain")
    const [age , setAge] = useState(9)
    const augmenterAge = () => {
        /* setState( (initialState) => {
            return {...initialState , age : initialState.age + 1}
        } ) */
        setAge( age + 1) ; 
    }
    return (<>  
            <button className="btn btn-success" onClick={augmenterAge}>Action</button>
            {/* <p>{state.nom} - {state.age}</p> */}
            <p>{nom} - {age}</p></>)
}
export default Exo1; // 