import mongoose, { Schema, Document } from "mongoose";
export interface ITodo extends Document {
    text: string;
    completed?: boolean;
    completedAt?: number;
}
const TodoSchema = new Schema({
    text: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

export default mongoose.model<ITodo>("todo", TodoSchema);
