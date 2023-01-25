export const taskReducer = (state, action) => {
    const generateId = () => Math.random().toString(36).substring(2, 18);

    switch (action.type) {
        case "add":
            const newTask = {
                ...action.payload,
                id: generateId(),
                active: false,
                completed: false,
                date: new Date().toLocaleString()
            };

            return [...state, newTask]
    
        case "update":
                const taskPayload = action.payload
                const taskUpdate = state.map(task => {
                    if(task.id === taskPayload.id) {
                        return {
                            ...task,
                            ...taskPayload,
                            date: new Date().toLocaleString()
                        }
                    }
                    return task
                })

                return taskUpdate
        case "delete":
                const idTask = action.payload
                const restTask = state.filter(task => task.id !== idTask)
            return restTask
        case "toggle_active":
            const idTaskActive = action.payload
            const taskUpdated = state.map(task => {
                if(task.id === idTaskActive) {
                    return {
                        ...task,
                        active: !task.active,
                        completed: task.completed? false : task.completed
                    }
                }
                return task
            })
            return taskUpdated
        case "toggle_completed":
            const idTaskCompleted = action.payload
            const taskUpdatedCompleted = state.map(task => {
                if(task.id === idTaskCompleted) {
                    return {
                        ...task,
                        completed: !task.completed,
                        active: task.active? false : task.active
                    }
                }
                return task
            })
            return taskUpdatedCompleted
        default:
            return state
    }
}
