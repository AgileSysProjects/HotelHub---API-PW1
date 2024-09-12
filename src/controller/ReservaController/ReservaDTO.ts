import { z } from "zod";

const ReservaSchema = z.object({
    numero: z.number().min(1, "User is required"),
    checkin: z.string().regex(/^([0-2][0-9]|(3)[0-1])\/(0[1-9]|1[0-2])\/([0-9]{4})$/, "Invalid date"),
    checkout: z.string().regex(/^([0-2][0-9]|(3)[0-1])\/(0[1-9]|1[0-2])\/([0-9]{4})$/, "Invalid date"),
    usuarioCPF: z.string().regex(/^\d{3}.\d{3}.\d{3}-\d{2}$/, "Invalid CPF"),
    quartoNumero: z.number().min(1, "Invalid number of the room"),
});

type ReservaDTO = z.infer<typeof ReservaSchema>;

export { ReservaDTO, ReservaSchema };