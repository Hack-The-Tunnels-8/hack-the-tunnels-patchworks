import { Page } from "../../components";
import "./SignUp.style.scss";

function SignUp() {
  return (
    <Page>
      <div className="signup-page">
        <h1>Sign Up</h1>
        <p>Interested in Patchworks? Sign up for our newsletter!</p>
      </div>

      <div>
        <input placeholder="email" onChange={(e) => console.log(e)}/>
      </div>

      <div>
        <input placeholder="password" onChange={() => console.log("test")}/>
      </div>
    </Page>
  );
}

export default SignUp;
