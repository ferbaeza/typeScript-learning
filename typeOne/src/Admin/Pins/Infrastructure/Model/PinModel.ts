import mongoose from 'mongoose';


const PinSchema = new mongoose.Schema(
    {
        titulo:
        {
            type: String,
            required: true
        },
        descripcion:
        {
            type: String,
            required: true
        },
        usuario:
        {
            type: String,
            required: true
        },
        puntuacion:
        {
            type: Number,
            required: true
        },
        latitud:
        {
            type: Number,
            required: true
        },
        longitud:
        {
            type: Number,
            required: true
        }
    },
    { timestamps: true }
);

export default mongoose.model('Pin', PinSchema);