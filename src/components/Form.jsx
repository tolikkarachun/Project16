import Button from "./UI/Button/Button";
import { Input } from "./UI/Input/Input";
import { Checkbox } from "./UI/Checkbox/Checkbox";
import { GoogleIcon } from "./icons/GoogleIcon";

export default function Form() {
  return (
    <form className="form">
      <div className="form__title">NFT Access</div>
      <div className="form__desc">
        Please fill your detail to access your account.
      </div>
      <Input title="Emeil" type="emeil" name="emeil" placeholder="Your emeil" />
      <Input
        title="Password"
        type="password"
        name="password"
        placeholder="Your passwordl"
      />
      <div className="row">
        <Checkbox label="Remember me" />
        <a href="/">Forgot Password?</a>
      </div>
      <div className="form__btn">
        <Button className="btn _primary">Sign in</Button>
        <Button className="btn _secondary">
          <GoogleIcon />
          Sign in with Google
        </Button>
      </div>
      <div className="row _center">
        Don’t have an account?
        <a href="/">Sign up</a>
      </div>
    </form>
  );
}
