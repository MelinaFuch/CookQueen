import mongoose from "mongoose";

const RecipeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Por favor, ingrese un título']
    },
    category: {
        type: String,
        enum: ['Dulce', 'Salado', 'Vegetariano', 'Pasta', 'Desayuno/Merienda', 'Almuerzo', 'Mascotas'],
        required: [true, 'Por favor, seleccione al menos una categoría']
    },
    ingredients: {
        type: String,
        required: [true, 'Por favor, ingrese los ingredientes']
    },
    description: {
        type: String,
        required: [true, 'Por favor, ingrese una descripción']
    },
    image: {
        type: Buffer,
        required: [true, 'Por favor, sube una foto de la comida'],
        default: 'https://c8.alamy.com/compes/2jbxacb/panqueques-de-comida-kawaii-2jbxacb.jpg'
    },
    video: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
    // FALTARIA LIKES Y COMENTARIOS
});


export default mongoose.models.Recipe || mongoose.model('Recipe', RecipeSchema);