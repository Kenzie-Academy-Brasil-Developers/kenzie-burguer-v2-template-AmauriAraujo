import { z } from "zod";

export const validateFormRegister = z
  .object({
    name: z.string().min(3, "O nome é obrigatório"),
    email: z
      .string()
      .min(1, "O e-mail é obrigatório")
      .email("Forneça um e-mail válido"),

    password: z
      .string()
      .min(7, "A senha precisa de pelo menos 7 caracteres.")
      .regex(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maiúscula")
      .regex(/(?=.*?[a-z])/, "É necessário pelo menos uma letra")
      .regex(/(?=.*[0-9])/, "É necessário pelo menos um número")
      .regex(/(?=.*[$*&@#!])/, "É necessário pelo menos um caracter especial"),

    confirmPassword: z.string().min(1, "Confirme sua senha"),
  })
  .refine(({ password, confirmPassword }) => confirmPassword === password, {
    message: "As senhas não correspondem",
    path: ["confirmPassword"],
  });
