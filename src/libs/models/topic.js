// models/topic.js
import mongoose from 'mongoose';

const { Schema } = mongoose;

const TopicSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, { timestamps: true });

// Check if the model already exists to avoid recompilation issues in watch mode
const Topic = mongoose.models.Topic || mongoose.model('Topic', TopicSchema);

export default Topic;
