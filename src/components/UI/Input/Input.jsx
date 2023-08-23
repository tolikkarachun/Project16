import { useState } from "react";
import { ClearIcon } from "../../icons/Clearicon";
import { YeaIcon } from "../../icons/YeaIcon";
import "./Input.scss";
export const Input = ({ title, type, name, placeholder }) => {
  const [value, setValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);


  const handleInputChange = (e) => {
    setValue(e.target.value);
  };
  const handleClearClick = () => {
    setValue("");
  };
  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  }
  return (
    <label className="forms">
      <span className="forms__title">{title}</span>
      <div className="forms__input-wrapper">
        <input
          className="forms__input"
          type={showPassword ? "text" : type}
          name={name}
          value={value} 
          onChange={handleInputChange}
          placeholder={placeholder}
        />
        <div className="forms__input-svg">
          {type !== "password" && (
            <span onClick={handleClearClick}>
              <ClearIcon />
            </span>
          )}
          {type === "password" && (
            <span onClick={handleTogglePassword}>
            <YeaIcon />
          </span>
          )}
        </div>
      </div>
    </label>
  );
};
