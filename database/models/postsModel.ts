import { Schema, model, models } from "mongoose";

const postSchema = new Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  author: { type: String, required: true },
  date: { type: Date, required: true },
  category: { type: String, required: true },
  thumbnail: { type: String, required: true },
});

// Verifica se o modelo já foi registrado antes de criá-lo
const Post = models.Posts || model("Posts", postSchema);

export default Post;
