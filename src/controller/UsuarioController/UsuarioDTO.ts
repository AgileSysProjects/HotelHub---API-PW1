import { password } from "bun";
import { z } from "zod";

const UsuarioSchema = z.object({
    cpf: z.string().regex(/^\d{3}.\d{3}.\d{3}-\d{2}$/, "Invalid CPF"),
    email: z.string().email("Invalid email"),
    nome: z.string().min(1, "Name is required"),
    telefone: z.string().min(8, "Invalid phone number"),
    password: z.string().regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
})

type UsuarioDTO = z.infer<typeof UsuarioSchema>;

export { UsuarioDTO, UsuarioSchema };

