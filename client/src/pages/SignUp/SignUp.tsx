import { Page } from "../../components";
import { useAccountContext } from "../../context";
import { ServiceAPI } from "../../infrastructure";
import "./SignUp.style.scss";
import { useState, useEffect } from "react";

function SignUp() {

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [message, setMessage] = useState(null);

  // const { SignedUp, signup } = useAccountContext();


  const changeEmail = Event => {
    setEmail(Event.target.value);
  }
  const changePassword = Event => {
    setPassword(Event.target.value);
  }

  const attemptSignin = async() => {
    try {
      const message = await ServiceAPI.signUp(email, password);
      setMessage(message);
    } catch (error) {
      
    }
  };
  return (
    <Page>
      <div className="signup-page">
        <h1>Sign Up</h1>
      </div>
        <div>
         <input placeholder="email" onChange={changeEmail}/>
        </div>

        <div>
          <input placeholder="password" onChange={changePassword}/>
        </div>
      <button onClick={() => attemptSignin()}>Sign Up</button>

    </Page>
  );
}

export default SignUp;
