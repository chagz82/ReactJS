


function Login() {
    return(
        <>
            <div className="card">
                <div className="card-body">
                    <form from-group>
                        <label 
                        htmlFor="username">Username:
                            <input name="username"
                            className="form-control"></input>
                        </label> <br />
                        
                        <label 
                        htmlFor="password">Password:
                            <input type="password"
                            className="form-control"></input>
                        </label>
                        <br />
                        <button className="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
        </>
    )
}
export default Login;