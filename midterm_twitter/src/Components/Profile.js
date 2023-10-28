import { useState } from "react";

function Profile() {
    const [name,setName] = useState("name");
    const [surname,setSurname] = useState("surname");
    const [email,setEmail] = useState("email");
    const [bday,setBday] = useState("bday");

    return(
        <>
            <h1>Profile</h1>
                <label>Name</label><br/>
                <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}></input>
                <br/><br/>
                <label>Surname</label><br/>
                <input type="text" value={surname} onChange={(e)=>{setSurname(e.target.value)}}></input>
                <br/><br/>
                <label>Email</label><br/>
                <input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
                <br/><br/>
                <label>Bday</label><br/>
                <input type="date" value={bday} onChange={(e)=>{setBday(e.target.value)}}></input><br></br>
        </>
    );
}

export default Profile;