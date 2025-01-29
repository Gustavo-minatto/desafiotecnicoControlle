import { StyledButton } from "./styles";
import { ButtonProps } from './button.types';

const Button: React.FC<ButtonProps> = ({ children, onClick, variant = "primary" }) => {
  return <StyledButton onClick={onClick} variant={variant}>{children}</StyledButton>;
};

export default Button;
