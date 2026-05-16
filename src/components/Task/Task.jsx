import './task.style.scss'
import { FaPenToSquare, FaTrash, FaCircleExclamation, FaCircleXmark, FaCheck } from 'react-icons/fa6'

function Task({ task, index, handleRemove, handleButtonFunction }) {

    return (
        <div className='add-task-list' style={{border: task.important ? '2px solid #008000' : '1px solid #213547'}}>
            <div className='modalWindow' style={{display: task.modalWindow ? 'flex' : 'none'}}>
                <p>Are you sure you want to delete this task list?</p>
                <div>
                    <button onClick={() => handleRemove(index)}>Yes</button>
                    <button onClick={() => handleButtonFunction(index, 'modalWindow')}>No</button>
                </div>
            </div>

            <div className='title-task-list' style={{border: task.important ? '2px solid #008000' : '1px solid #213547'}}>
                <span>Title</span>
                <p>{task.completed ? <del>{task.Title}</del> : task.Title}</p>
            </div>

            <div className='description-task-list' style={{border: task.important ? '2px solid #008000' : '1px solid #213547'}}>
                <span>Description</span>
                <p>{task.completed ? <del>{task.Description}</del> : task.Description}</p>
            </div>

            <div className='container-icon'>
                <FaCircleExclamation className='icon-important'
                                     style={{color: task.important ? '#008000' : '#94a3b8'}}
                                     onClick={() => handleButtonFunction(index, 'important')}/>
                <FaPenToSquare
                    className='icon-editing'
                    onClick={() => handleButtonFunction(index, 'edit')}/>
                <FaTrash
                    className='icon-remove'
                    onClick={() => handleButtonFunction(index, 'modalWindow')}/>
                <button onClick={() => handleButtonFunction(index, 'completed')}>

                    {task.completed ? (
                        <div>
                            <span>completed</span>
                            <FaCheck className='icon-completed' />
                        </div>
                    ) : (
                        <div>
                            <span>not completed</span>
                            <FaCircleXmark className='icon-completed not'/>
                        </div>
                    )}
                </button>
            </div>
        </div>
    )
}

export default Task