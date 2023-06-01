import { ButtonContainer } from "./styles";
import { IButtonProps } from "./types";

const Button = ({ title, onClick, disabled }: IButtonProps) => {
  return <ButtonContainer hidden={!disabled} onClick={onClick}>{title}</ButtonContainer>;
};

export default Button;
