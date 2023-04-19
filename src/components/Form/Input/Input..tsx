import { FieldError, UseFormRegisterReturn } from "react-hook-form";
import { StyledInputContainer } from "../../../styles/form";
import { StyledParagraph } from "../../../styles/typography";

interface IRegisterProps {
  type: string;

  id: string;
  register: UseFormRegisterReturn<string>;
  error?: FieldError;
}

const Input = ({ type, id, register, error }: IRegisterProps) => {
  return (
    <div>
      <StyledInputContainer>
        <input type={type} id={id} placeholder=" " {...register} />

        <label htmlFor={id}>{id}</label>
      </StyledInputContainer>
      {error ? (
        <StyledParagraph fontColor="red">{error.message}</StyledParagraph>
      ) : null}
    </div>
  );
};

export default Input;
