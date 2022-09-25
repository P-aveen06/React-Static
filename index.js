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
    // style={{marginLeft:"540px",marginRight:"100px"}}
    <div>
      <h1>About Me</h1>
      <p>
        Hii, Everyone My self Paveen Kumar,
        <ul style={{ listStyle: "none" }}>
          <li>I'm Engineering Student</li>
          <li>20-year old Software Developer</li>
          <li>Crazy on Technology</li>
        </ul>
      </p>
    </div>
  );
};

const Image = () => {
  return (
    <div>
      <img src="icon.png" alt="No Image" width="200px" height="200px" />
    </div>
  );
};

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul
          style={{
            display: "flex",
            justifyContent: "space-around",
            listStyle: "none",
            width: "600px",
            margin:"auto",
            marginTop:"20px",
            // backgroundColor:"rgba(255,255,255,0.5)",
            height:"40px"
          }}
        >
          <img src="logo.jpg" alt="No image" />
          <li>Home</li>
          <li>Contact</li>
          <li>About</li>
        </ul>
      </nav>
    </div>
  );
};

const Footer=()=>{
  return <p>© 2022 paveen kumar</p>
}

const Page=()=>{
  return(
    <div>
      <Navbar/>
      <Greeting/>
      <Detail/>
      <AboutMe/>
      <Image/>
      <Footer/>
    </div>
  );
}
const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(<Page/>);
