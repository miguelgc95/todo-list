import React, { useState } from 'react';

export const TaskCreator = props => {
    const [newTaskName, setNewTaskName] = useState('');

    const updateNewTaskValue = e => setNewTaskName(e.target.value);

    const handleKeypress = e => {
        if (e.charCode === 13) {
            createNewTask();
        }
    };

    const createNewTask = () => {
        props.callback(newTaskName);
        setNewTaskName(' ');
    };

    return (
        <div className="my-1">
            <input
                type="text"
                className="form-control"
                value={newTaskName}
                onChange={updateNewTaskValue}
                onKeyPress={handleKeypress}
            />
            <button className="btn btn-primary mt-1" onClick={createNewTask}>
                +
            </button>
        </div>
    );
};
