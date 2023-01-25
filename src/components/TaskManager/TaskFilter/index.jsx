import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';
import { filterTask } from '../../constants';


function TaskFilter({onChangeFilter}) {
    return (
        <ButtonGroup aria-label="Basic example">
            <Button variant="secondary" onClick={() => onChangeFilter(filterTask.ALL)}>Todos</Button>
            <Button variant="secondary" onClick={() => onChangeFilter(filterTask.PROCESS)}>En proceso</Button>
            <Button variant="secondary" onClick={() => onChangeFilter(filterTask.PENDING)}>Pendiente</Button>
            <Button variant="secondary" onClick={() => onChangeFilter(filterTask.COMPLETED)}>Completado</Button>
        </ButtonGroup>
    );
}

export default TaskFilter;