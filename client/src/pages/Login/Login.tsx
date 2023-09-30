import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Page } from "../../components";
import { useAccountContext } from "../../context";
import "./Login.style.scss";

function Login() {
  //when ever you change the email state it 
  //setEmail(asdsda)
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [message, setMessage] = useState(null);

  //
  const { loggedIn, login } = useAccountContext();
  const navigate = useNavigate();

  const changeEmail = Event => {
    setEmail(Event.target.value);
  }

  const changePassword = Event => {
    setPassword(Event.target.value);

  };

  const attemptLogin = async () => {
    console.log(email);
    console.log(password);
    try {
      const message = await login(email, password);
      setMessage(message);
    } catch (error) {
      
    }
  };

  useEffect(() => {
    if (loggedIn() === true) {
      navigate("/");
    }
  }, [loggedIn, navigate]);

  return (
    <Page>
      <div className="login-page">
        <h1>Login</h1>
        

        <div>
         <input placeholder="email" onChange={changeEmail}/>
        </div>

        <div>
          <input placeholder="password" onChange={changePassword}/>
        </div>

        {message && <p>{message}</p>}
      </div>
      <button onClick={() => attemptLogin()}>
          Login (as user set in code)
        </button>
    </Page>
  );
}

export default Login;
