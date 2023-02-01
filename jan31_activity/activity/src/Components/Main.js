import Count from '../count'
import Login from './Login';



function Main() {
    return(
        <div className="main-body">
            <div className="row">
                <div className='col-8 bg-light'>
                    <img src="https://wallpapers.com/images/hd/binary-code-code-numbers-green-glow-agx3h70ga36galq2.webp" alt='Matrix'></img>
                    
                </div>
                
                <div className='col-4 bg-light'>
                    <Login />
                    <br />
                        
                        <div className="row">
                            <div className='col-4 bg-light'>
                                <Count></Count>
                            </div>
                            
                        </div>

                </div>
                
            </div>
        </div>
    )
}

export default Main;