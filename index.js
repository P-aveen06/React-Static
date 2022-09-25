const Detail = (props) => {
  return (
    <div>
      <p className="text-white font-30px">
        I am {props.fname} {props.lname}
      </p>
      <lable>First Name:</lable>
      <br />
      <input type="text" name="text" placeholder={props.fname} />
      <br />
      <lable>Last Name:</lable>
      <br />
      <input type="text" name="text" placeholder={props.lname} />
    </div>
  );
};

const Greeting = () => {
  return (
    <div>
      <p>Hey there Paveen Kumar</p>
    </div>
  );
};

const AboutMe = () => {
  return (
    <div className="text-justify" style={{marginLeft:"540px",marginRight:"100px"}}>
      <h1>About Me</h1>
      <p>
        Hii, Everyone My self Paveen Kumar,
        <ul>
          <li>I'm Engineering Student</li>
          <li>20-year old Software Developer</li>
          <li>Crazy on Technology</li>
        </ul>
      </p>
    </div>
  );
};

const Image=()=>{
    return <div>
        <img src="icon.png" alt="No Image" width="200px" height="200px"/>
    </div>
}

const text = ReactDOM.createRoot(document.getElementById("root"));
text.render(<Detail fname="Paveen" lname="Kumar" />);

const greeting = ReactDOM.createRoot(document.getElementById("mess"));
greeting.render(<Greeting fname="Paveen" lname="Kumar" />);

const aboutme=ReactDOM.createRoot(document.getElementById("aboutme"));
aboutme.render(<AboutMe />);

const img=ReactDOM.createRoot(document.getElementById("img"));
img.render(<Image />);