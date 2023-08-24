import { LogoIcon } from "../icons/LogoIcon";
import style from "./Logo.module.scss";
export default function Logo() {
  return (
    <div className={style.logo}>
      <LogoIcon />
      PNFT Market
    </div>
  );
}