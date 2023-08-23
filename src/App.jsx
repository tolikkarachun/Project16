import Copyright from "./components/Copyright";
import Form from "./components/Form";
import Logo from "./components/Logo/Logo";
import Background from "./components/Background";

export default function App() {
  return (
    <div className="sing-in">
      <div className="sing-in__info">
        <Logo />
        <Form />
        <Copyright />
      </div>
      <div className="sing-in__bg">
        <Background />
      </div>
    </div>
  );
}
