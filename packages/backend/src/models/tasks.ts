import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({});

export default mongoose.model('task', taskSchema);