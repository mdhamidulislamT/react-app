
const Register=(props)=>{
    const {logindata} = props;
    console.log(logindata);
    return(
        <div className="reg">
            <h1> Register Form || {logindata.uName}</h1>
            <form className="frm">
                <br/>
                <label>Name:</label>
                <input className="input" type="text" placeholder="Enter a name" name="name" id="name"  />
                <br/>
                <label>Phone:</label>
                <input className="input" type="text" placeholder="Enter a phone" name="phone" id="phone"  />
                <br/>
                <button className="input" >Submit</button>
            </form>
        </div>
    );
}

export default Register;