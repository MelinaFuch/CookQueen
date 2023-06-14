import mongoose from "mongoose";

const RecipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  image: {
    type: Buffer,
    default:
      "https://i.pinimg.com/236x/ab/01/43/ab01437a16fdf57072342eb1a9bc303a.jpg",
  },
  mail: {
    type: String,
    required: true,
  },
  // FALTARIA FAVORITOS
});

export default mongoose.models.Recipe || mongoose.model("Recipe", RecipeSchema);
