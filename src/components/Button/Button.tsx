import "./Button.Modal.scss";
interface ButtonProps {
  children: React.ReactNode;
  variant?: "login" | "signup" | "contactUs";
}

function Button({ children, variant }: ButtonProps) {
  return <div className={`button ${variant}`}>{children}</div>;
}

export default Button;
