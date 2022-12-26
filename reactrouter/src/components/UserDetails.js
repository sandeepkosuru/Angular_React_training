import { useParams } from "react-router-dom"
export  const UserDetails = () =>{
        const params = useParams()
        const id = params.userid
    return(
        <div>
            <h1>These are details of {id}</h1>

        </div>
    )
}