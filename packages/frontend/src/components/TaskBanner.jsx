import React from 'react';

export const TaskBanner = props => {
    return (
        <>
            <h4 className="text-center p-4">TODO-List</h4>
            <p className="text-center">
                {props.allTasks.filter(t => !t.done).length} tasks to do
            </p>
        </>
    );
};
