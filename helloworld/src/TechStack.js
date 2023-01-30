


function TechStack(props) {
    return(
        <>
          My name is {props.name} and I am a {props.Work}. <br/> 
          I formerly worked as an {props.PastJob}. <br/>
          At the moment, I am studying the following Tech Stacks: <br/>
            {/* <ul style={{listStyle: 'none'}}>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>Git</li>
                <li>React JS</li>
            </ul> */}
            HTML <br/>
            CSS <br/> 
            Javascript <br/>
            Git <br/>
            React JS
        </>
    )
    
}

export default TechStack;