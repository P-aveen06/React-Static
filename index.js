const Text=(props)=>{
        /*we can directly write our HTML code in .js file this is done by the help of 
        JSX -- Javascript Syntax Extension */
        return <div>
        <p className='black font-30px'>I am {props.fname} {props.lname}</p>
        <lable>First Name:</lable><br/>
        <input type='text' name='text' placeholder={props.fname} /><br/>
        <lable>Last Name:</lable><br/>
        <input type='text' name='text' placeholder={props.lname} />
        </div>
    }
    let firstName=prompt("Enter your FirstName ?");
    let lastName=prompt("Enter Your LastName ?");
    const text=ReactDOM.createRoot(document.getElementById('root'));
    text.render(<Text fname={firstName} lname={lastName}/>);

