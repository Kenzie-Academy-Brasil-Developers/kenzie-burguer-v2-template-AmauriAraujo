import { z } from "zod";

export const ValideteFormLogin=z.object({

    email: z.string().nonempty("O email é obrigatório"),

    password: z.string().nonempty("A Senha é obrigatória")
})