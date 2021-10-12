import React, { useState, useEffect } from 'react';

import { TaskBanner } from './components/TaskBanner';
import { TaskRow } from './components/TaskRow';
import { TaskCreator } from './components/TaskCreator';
import { VisibilityControl } from './components/VisibilityControl';

const App = () => {
    const [taskItems, setTaskItems] = useState([
        { name: 'task 1', done: false },
    ]);

    const [showCompleted, setshowCompleted] = useState(false);

    useEffect(() => {
        let data = localStorage.getItem('tasks');
        if (data != null) {
            setTaskItems(JSON.parse(data));
        } else {
            setTaskItems([
                { name: 'task 1 sdfgn', done: false },
                { name: 'task 2', done: false },
                { name: 'task 3', done: false },
            ]);
            setshowCompleted(true);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(taskItems));
    }, [taskItems]);

    const renderItems = doneValue => {
        return taskItems
            .filter(task => task.done === doneValue)
            .map(task => (
                <TaskRow
                    task={task}
                    key={task.name}
                    toggleTask={toggleTask}
                    deleteTask={deleteTask}
                />
            ));
    };

    const createNewTask = taskName => {
        if (!taskItems.find(t => t.name === taskName)) {
            setTaskItems([...taskItems, { name: taskName, done: false }]);
        }
    };

    const toggleTask = task => {
        return setTaskItems(
            taskItems.map(t =>
                t.name === task.name ? { ...t, done: !t.done } : t
            )
        );
    };

    const deleteTask = taskName => {
        setTaskItems(taskItems.filter(task => task.name !== taskName));
    };

    return (
        <div className="App">
            <TaskBanner taskItems={taskItems} />

            <div className="container-fluid">
                <TaskCreator callback={createNewTask} />

                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Done</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>{renderItems(false)}</tbody>
                </table>

                <div className="p-4">
                    <VisibilityControl
                        description="Completed Tasks"
                        isChecked={showCompleted}
                        callback={checked => setshowCompleted(checked)}
                    />
                </div>
                {showCompleted && (
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Description of completed tasks</th>
                                <th>Done</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>{renderItems(true)}</tbody>
                    </table>
                )}
            </div>
        </div>
    );
};
export default App;

// HACER DE ESTA PÁGINA ALGO DINÁMICO FUNCIONAL, ÚTIL E INTERESANTE
// Añadir readme al repo del scaling
// justgetflux.com investigar
// Pedir cita centro de salud
// renovación DNI
// Expedición de título US
// Certificación académica US
// cambiar el caps mayus por el esc
// corregir Desktop con desktop
// corregir el teclado para poner por dedfecto el inglés, pero añadirle al inglés la posibilidad de poner ñs y acentos
