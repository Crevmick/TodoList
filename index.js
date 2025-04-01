const  express = require ('express');
const dotenv = require('dotenv');
require('dotenv').config();

const app = express();


// Sample task list
let items = [
    {id: "1", title: "buy groceries", description: "Get milk, eggs and bread"}
]

// Middleware
app.use(express.json())


//CREATE: Add a new tassk
app.get('/task', (req,res) => {
    res.json({
        items: items,
    })
})

//CREATE: Add a new task
app.post('/task', async(req, res) =>{
    const {title, description} = req.body;

    if (!title || !description) {
        return res.status(400).json({
            message: 'Title and description are required'
        });
    }
    const newTask = {
        id: (items.length + 1).toString(),
        title,
        description
    };

    items.push(newTask);

    res.status(200).json({
        message: "Task created successfully",
        task: newTask
    });    

})

//UPDATE: Modify an existing task
app.put('/task/:id', (req, res) => {
    const taskId = req.params.id;
    const { title, description } = req.body;

    if (!title || !description) {
        return res.status(400).json({ message: "Title and description are required" });
    }

    // Find the task in the items array by matching the task ID
    const taskToUpdate = items.find(t => t.id === taskId); 
     

    if (!taskToUpdate) {
        return res.status(404).json({ message: "Task not found" });
    }

    // Update the task
    taskToUpdate.title = title;
    taskToUpdate.description = description;

    res.status(200).json({ message: "Task updated successfully", items: taskToUpdate });
});


// DELETE: Remove a tasl
app.delete('/task/:id', (req, res) => {
    const taskId = req.params.id; // Get the task ID from the request params

    // Find the index of the task in the items array
    const taskIndex = items.findIndex(t => t.id === taskId);

    if (taskIndex === -1) {
        return res.status(404).json({ message: "Task not found" }); // Task not found
    }

    // Remove the task from the array
    items.splice(taskIndex, 1);

    res.status(200).json({ message: "Task deleted successfully" });
});

const PORT = 3500
app.listen (PORT,() =>{
    console.log(`Listening to http://localhost:${PORT}`)
});
