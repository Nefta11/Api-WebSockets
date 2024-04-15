import { Schema, model } from "mongoose";

const listasSchema = new Schema(
  {
    valorPotenciometro: Number,
    TemperaturaActual: Number,
    objetoDetectado: String,
    DistanciaObjeto: Number,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default model("listas", listasSchema);
