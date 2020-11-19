import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../components/Button/Button";
import TextInput from "../../../components/TextInput/TextInput";
import './Login.scss';

const Login = () => {
  return <div className="login_container" style={styles.container}>
      <div className="d-flex flex-column align-items-center card py-4 px-5">
          <h5 className="text-reflector" style={{fontWeight: 600}}>Login to your Dashboard</h5>

          <TextInput otherClass="w-100 login_style" label={"Username"} />
          <TextInput otherClass="w-100 login_style" label={"Email Address"} />
          <TextInput otherClass="w-100 login_style margin_bottom_0" label={"Password"} />
          <div className="m-0 p-0 w-100 text-right">Forgot Password?</div>

          <div className="mt-3 w-100">
          <Button text="Join Us" solid={true} full={true} />
          </div>
          <p className="mt-1 w-100">Love others to enjoy this benefit? <Link to="/register"><span className="text-reflector ml-1">Invite</span></Link> </p>


      </div>


  </div>;
};

const styles = {
  container: {
    backgroundImage: "url('/images/login_bg.svg')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: 'absolute',
    top: 80,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundPosition: "center",
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

  }
};

export default Login;
