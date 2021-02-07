import React from 'react';


const ToDoItem = props => {
    const id = props.id;
    const task = props.task;
    const status = props.status;

    const removeBtn = id => {
        return <p className={status === true ? 'btn btn-remove' : 'btn btn-remove-disabled'} onClick={() => props.remove(id)}>❌</p>
    }

    const doneBtn = (id, status) => {     
        return <p
            className={status === true ? 'btn btn-done' : 'btn btn-done-disabled'}
            onClick={status === true ? () => props.done(id, status) : null}>{status === true ? '✅' : null}</p>
    }
    

    return (      
            <li className={status !== true ? 'task-wrapper task-wrapper-disabled' :'task-wrapper'}>
                <p>{task}</p>
                <span className={'btns'}>{doneBtn(id, status)}{removeBtn(id)}</span>
                
            </li>
    )
}

export default ToDoItem;