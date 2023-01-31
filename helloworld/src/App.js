// import HelloWorld from "./HelloWorld";
// import Location from "./Location";
// import Work from "./Work";
import Profile from "./Profile";
// import PastJob from "./PastJob";
// import TechStack from "./TechStack";

function App() {

  // const number=1;
  const profileImage='https://wallpapers.com/images/hd/cool-neon-blue-profile-picture-u9y9ydo971k9mdcf.jpg'
  
  return (
    <p style={{textAlign:'center', color:'blue'}}>
    
      <img src={profileImage} alt="My Img" height="100" width="100"></img> <br/> 
      <Profile></Profile>    
    </p>
  )
}

export default App;
