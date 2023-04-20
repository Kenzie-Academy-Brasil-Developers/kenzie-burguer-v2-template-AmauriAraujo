import Input from "../Input/Input.";
import { StyledButton } from "../../../styles/button";
import { StyledForm } from "../../../styles/form";
import { SubmitHandler, useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { UserContext } from "../../../providers/UserContext/UserContext";
import { zodResolver } from "@hookform/resolvers/zod";

import { validateFormRegister } from "./FormValidateRegister";

export interface IRegisterFormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}
export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterFormData>({
    resolver: zodResolver(validateFormRegister),
  });

  const { userRegister } = useContext(UserContext);

  const [loading, setLoading] = useState(false);
  const submit: SubmitHandler<IRegisterFormData> = (FormData) => {
    userRegister(FormData, setLoading);
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input
        type="text"
        id={"name"}
        register={register("name")}
        error={errors.name}
      />
      <Input
        type="email"
        id={"email"}
        register={register("email")}
        error={errors.email}
      />
      <Input
        type="password"
        id={"password"}
        register={register("password")}
        error={errors.password}
      />
      <Input
        type="password"
        id={"confirmPassword"}
        register={register("confirmPassword")}
        error={errors.confirmPassword}
      />
      <StyledButton
        $buttonSize="default"
        $buttonStyle="gray"
        disabled={loading}
      >
        {loading ? "Cadastrando..." : "Cadastrar"}
      </StyledButton>
    </StyledForm>
  );
};
