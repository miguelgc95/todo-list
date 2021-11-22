import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    name: {
        require: true,
        type: String,
    },
    done: {
        require: true,
        type: Boolean,
    },
});

const AllTasksModel = mongoose.model('AllTask', taskSchema);

export default AllTasksModel;
