import { Schema, model } from "mongoose";

export interface UserDocument {
    name: string;
    email: string;
    password: string;
    role: "user" | "vip" | "admin";
};

export const userSchema: Schema<UserDocument> = new Schema<UserDocument>({
    name: { 
        type: String, 
        required: true 
    },
    email: {
        type: String, 
        required: true 
    },
    password: { 
        type: String, 
        required: true 
    },
    role: { 
        type: String, 
        enum: [
            "user",
            "vip", 
            "admin"
        ], 
        default: "user" 
    },
});

const User = model("Users", userSchema);

export default User;