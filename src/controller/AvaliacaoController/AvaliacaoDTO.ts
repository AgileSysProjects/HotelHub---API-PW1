import { z } from "zod";

const AvaliacaoSchema = z.object({
    id: z.string().uuid("Invalid UUID"),
    comentario: z.string().min(1, "Comment is required"),
    nota: z.number().min(1, "Rating must be at least 1").max(5, "Rating must be at most 5"),
    usuarioId: z.string().uuid("Invalid UUID"),
    hotelId: z.string().uuid("Invalid UUID"),
});

type AvaliacaoDTO = z.infer<typeof AvaliacaoSchema>;

export { AvaliacaoDTO, AvaliacaoSchema };