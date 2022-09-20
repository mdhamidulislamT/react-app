import Card from "./components/Card";
import Register from "./components/register";

const logindata ={id:1, name:"Md Hamidul Islam", uName:"Admin"};

const App=()=>{
    return(
        <>
        <Card txt="this is test props from card" txt2="this is for distructure"/>
        <Card  />
        <Register logindata={logindata}/>
        </>
    );
}

export default App;