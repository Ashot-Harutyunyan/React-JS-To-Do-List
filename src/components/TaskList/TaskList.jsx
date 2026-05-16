import './taskList.style.scss'
import Task from '../Task/Task.jsx'
import EditTaskForm from '../EditTaskForm/EditTaskForm.jsx'

function TaskList({ todoList, handleRemove, handleButtonFunction, handleEditSubmit }) {
    
    return (<div className='container-add-task-list'>
      
        {todoList.map((task, index) => (
          task.edit ? 
            <EditTaskForm 
              key={index} 
              task={task} 
              index={index} 
              handleEditSubmit={handleEditSubmit} 
            /> 
            : 
            <Task 
              key={index} 
              task={task} 
              index={index} 
              handleRemove={handleRemove}
              handleButtonFunction={handleButtonFunction}
            />
        ))}
      
    </div>)
  }

export default TaskList