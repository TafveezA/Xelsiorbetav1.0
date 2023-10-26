import "./Button.scss";

type tButton = {
  icon?: JSX.Element | string;
  text?: string;
};

const Button = ({ icon, text }: tButton) => {
  return (
    <button className="button">
      {icon && <div className="button__icon">{icon}</div>}
      {text && <div>{text}</div>}
    </button>
  );
};

export default Button;
