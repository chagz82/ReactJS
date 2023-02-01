import { Outlet, useOutletContext } from "react-router-dom";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";




function MainLayout() {
    const user=useOutletContext();
    
    return(
        <>                
        <Header />
            <Outlet context={{user: 'Mark'}}/>
        <Footer />
        </>
    )
}

export default MainLayout;