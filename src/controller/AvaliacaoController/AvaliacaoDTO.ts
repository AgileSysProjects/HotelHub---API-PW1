import { z } from "zod";

const AvaliacaoSchema = z.object({
    codigo: z.string().min(1, "Invalid Data"),
    feedback: z.string().min(1, "Comment is required"),
    usuarioCPF: z.string().regex(/^\d{3}.\d{3}.\d{3}-\d{2}$/, "Invalid CPF"),
    hotelCNPJ: z.string().regex(/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/,"Invalid CNPJ"),
});

type AvaliacaoDTO = z.infer<typeof AvaliacaoSchema>;

export { AvaliacaoDTO, AvaliacaoSchema };