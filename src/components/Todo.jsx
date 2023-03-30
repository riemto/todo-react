import React from 'react'

function Todo({ task, done, onDelete }) {
    return (
        <div>
            {task}
            <button onClick={() => onDelete()}>
                x
            </button>
        </div >
    )
}

export default Todo