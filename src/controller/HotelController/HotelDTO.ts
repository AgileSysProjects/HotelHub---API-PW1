import { z } from "zod";

const geolocalizacaoSchema = z.object({
    type: z.literal('Point'),
    coordinates: z.tuple([z.number(), z.number()]) // Array com latitude e longitude
  });

const HotelSchema = z.object({
    cnpj: z.string().regex(/^\d{2}\.\d{3}\.\d{3}\/\d{4}\-\d{2}$/,"Invalid CNPJ"),
    nome: z.string().regex(/^[A-Za-zÀ-ÖØ-öø-ÿ0-9' -]{2,100}$/, "Invalid Name"),
    descricao: z.string().min(20, "Invalid description"),
    imagem: z.string().optional(),
    classificacao: z.string().regex(/^[1-5]$/, "Invalid classification"),
    localizacao: geolocalizacaoSchema
});

type HotelDTO = z.infer<typeof HotelSchema>;

export { HotelDTO, HotelSchema };