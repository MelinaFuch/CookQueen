import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  tipo: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  image: {
    type: String,
    default:
      "https://i.pinimg.com/564x/24/f3/98/24f398f5905c95998f0a86d0b27eda91.jpg",
  },
  mail: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["activo", "inactivo", "baneado"],
    default: "activo"
  }
  // FALTARIA FAVORITOS
});

export default mongoose.models.User || mongoose.model("User", UserSchema);