function GreetingsApp({name, studentNumber,color}){
    let greeting= "Hello";
    let buttonText="click me!";

    const alertName= () =>{
        alert(name);
    };

    return(
        <div>
        <h1 style= {{backgroundColor: color}}>
        {greeting} {name}
        </h1>
        <p>{studentNumber}</p>
        
        <button onClick={alertName}>{buttonText}</button>

        </div>

        

    );

}
export default GreetingsApp;