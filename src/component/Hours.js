import React,{useState,useEffect} from "react";
import {Button,Container} from "reactstrap";

function Hours () {
    
        const [time, setTime] = useState(0);
        const [running, setRunning] = useState(false);  

        useEffect(() => {
            let interval;
            running? (interval = setInterval(() => {
                setTime((prevTime) => prevTime + 10)
              }, 10)) :(clearInterval(interval))
              
             
            return () => clearInterval(interval);
          }, [running]);
      
      
    return(
    <div style={{width:200,height:160, marginLeft:550 ,border:"2px solid black", marginTop:180, padding:20, background:"lightgreen"}}>
        <h1>
            <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
            <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
            <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
        <hr/>
            <Container>
                <Button color="success"  onClick={() => setRunning(true)}><h3>Start</h3></Button>: 
                <Button color="dander"  onClick={() => setRunning(false)}><h3>Stop</h3></Button>: 
                <Button color="info"  onClick={() => setTime(0)}><h3>Reset</h3></Button>  
                   
            </Container>
        </h1>
    </div>
    );
}

export default Hours;