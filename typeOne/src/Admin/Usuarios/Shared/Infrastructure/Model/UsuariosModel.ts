import mongoose from 'mongoose';

const UsuariosSchema = new mongoose.Schema(
    {
        nombre:
        {
            type: String,
            required: true
        },
        email:
        {
            type: String,
            required: true
        },
        password:
        {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);

export default mongoose.model('Usuarios', UsuariosSchema);