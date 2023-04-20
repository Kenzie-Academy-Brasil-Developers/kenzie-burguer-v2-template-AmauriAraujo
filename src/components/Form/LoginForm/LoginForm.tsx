import { SubmitHandler, useForm } from "react-hook-form";
import { StyledButton } from "../../../styles/button";
import { StyledForm } from "../../../styles/form";
import Input from "../Input/Input.";
import { useContext, useState } from "react";
import { UserContext } from "../../../providers/UserContext/UserContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { ValideteFormLogin } from "./formValidateLogin";

export interface ILoginFormData {
  email: string;
  password: string;
}

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormData>({ resolver: zodResolver(ValideteFormLogin) });
  const [loading, setLoading] = useState(false);
  const { userLogin } = useContext(UserContext);

  const submit: SubmitHandler<ILoginFormData> = (FormData) => {
    userLogin(FormData, setLoading);
  };
  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input
        type="email"
        id={"E-mail"}
        register={register("email")}
        error={errors.email}
      />
      <Input
        type="password"
        id={"Senha"}
        register={register("password")}
        error={errors.password}
      />
      <StyledButton
        $buttonSize="default"
        $buttonStyle="green"
        disabled={loading}
      >
        {loading ? "Entrando..." : "Logar"}
      </StyledButton>
    </StyledForm>
  );
};

export default LoginForm;
