// "use client"
// import { useState } from "react";

// export default function TodoApp() {
//   // State to store the task input and the list of tasks
//   const [task, setTask] = useState("");
//   const [tasks, setTasks] = useState([]);

//   // Handle task input change
//   const handleInputChange = (e) => {
//     setTask(e.target.value);
//   };

//   // Add task to the list
//   const addTask = () => {
//     if (task.trim() !== "") { // Prevent adding empty tasks
//       setTasks([...tasks, task]); // Add new task to the tasks array
//       setTask(""); // Clear the input field
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-blue-900">
//       <div className="w-96 bg-black p-5 shadow-md rounded-md">
//         <h1 className="text-2xl font-bold mb-4 text-center">To-Do App</h1>
//         <div className="flex">
//           <input
//             type="text"
//             value={task}
//             onChange={handleInputChange}
//             placeholder="Enter a task"
//             className="flex-1 p-2 border-5 border-white text-black rounded-l-md"
//           />
//           <button
//             onClick={addTask}
//             className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-red-200"
//           >
//             Add Task
//           </button>
//         </div>
//         <ul className="mt-4">
//           {tasks.map((item, index) => (
//             <li
//               key={index}
//               className="p-2 my-2 border border-pink-700 rounded-md bg-pink-300 text-red-950"
//             >
//               {item}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }




"use client";
import { useState } from "react";

export default function TodoApp() {
  // State to store the task input and the list of tasks
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  // Handle task input change
  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  // Add task to the list
  const addTask = () => {
    if (task.trim() !== "") { // Prevent adding empty tasks
      setTasks([...tasks, task]); // Add new task to the tasks array
      setTask(""); // Clear the input field
    }
  };

  // Delete task from the list
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index); // Remove task by index
    setTasks(updatedTasks); // Update the tasks state
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-900">
      <div className="w-96 bg-black p-5 shadow-md rounded-md">
        <h1 className="text-2xl font-bold mb-4 text-center text-white">To-Do App</h1>
        <div className="flex">
          <input
            type="text"
            value={task}
            onChange={handleInputChange}
            placeholder="Enter a task"
            className="flex-1 p-2 border-2 border-white text-black rounded-l-md"
          />
          <button
            onClick={addTask}
            className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-red-200"
          >
            Add Task
          </button>
        </div>
        <ul className="mt-4">
          {tasks.map((item, index) => (
            <li
              key={index}
              className="p-2 my-2 border border-pink-700 rounded-md bg-pink-300 text-red-950 flex justify-between items-center"
            >
              <span>{item}</span>
              <button
                onClick={() => deleteTask(index)} // Pass index to delete task
                className="bg-red-500 text-white px-2 py-1 ml-2 rounded-md hover:bg-red-700"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
