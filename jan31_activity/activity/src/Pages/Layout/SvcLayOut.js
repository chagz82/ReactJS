import { Outlet } from "react-router-dom";
import SvcFooter from "../Services/SvcFooter";
import SvcHeader from "../Services/SvcHeader";




function SvcLayOut() {
    return(
        <>
            <SvcHeader />
                < Outlet/>
            <SvcFooter/>
        </>
    )
}

export default SvcLayOut;