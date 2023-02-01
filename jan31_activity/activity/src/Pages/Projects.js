import { useParams } from "react-router-dom";


function ViewProject() {
    const {id} = useParams()
    return(
        <>
            <p>This is a project with an ID number of {id}</p>
        </>
    )
}

export default ViewProject;