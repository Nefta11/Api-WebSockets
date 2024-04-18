import { Schema, model } from "mongoose";

const listasSchema = new Schema(
  {
    code: {
      type: String,
      unique: true,
      require: true,
    },
    valorPotenciometro: Number,
    TemperaturaActual: Number,
    objetoDetectado: String,
    DistanciaObjeto: Number,
    EstatusLed: String
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

export default model("listas", listasSchema);
