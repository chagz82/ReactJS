import { useOutletContext } from "react-router-dom";




function AboutUs() {
    const user=useOutletContext();

    return(
        <>
            <p>This is About Us.</p>
            Hello, {user.user}!
        </>
    )
}

export default AboutUs;