import mongoose, { Schema, Document } from "mongoose";
export interface IUser extends Document {
    email: string;
    password: string;
}
const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: false,
        trim: true,
        minlength: 1
    },
    password: {
        type: String,
        required: true,
        unique: false
    }
});
export default mongoose.model<IUser>("user", UserSchema);
