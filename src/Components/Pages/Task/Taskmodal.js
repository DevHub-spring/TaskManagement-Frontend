import {useState}  from 'react';



const Taskmodal = ({ setShowModal, setTasks }) => {
    const [taskTitle, setTaskTitle] = useState("");
    const [taskStatus, setTaskStatus] = useState("To Do");
    const [taskDescription, setTaskDescription] = useState("");

const handleCreate = () => {
        setTasks((prev) => [
          ...prev,
          { id: Date.now().toString(), title: taskTitle, status: taskStatus,description:taskDescription },
        ]);
        setShowModal(false);
      };

return(
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center">
    <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
      <button
        className="absolute top-2 right-2 text-gray-500"
        onClick={() => setShowModal(false)}
      >
        ✕
      </button>
      <h2 className="text-lg font-semibold mb-4">Create a New Task</h2>

      <input
        type="text"
        placeholder="Task Title"
        value={taskTitle}
        onChange={(e) => setTaskTitle(e.target.value)}
        className="w-full p-2 border rounded mb-2"
      />
    <textarea
        type="text"
        placeholder="Description"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        className="w-full p-2 border rounded mb-2 h-32"
      />
      <select
        value={taskStatus}
        onChange={(e) => setTaskStatus(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      >
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>

    

      <div className="flex justify-end gap-2">
        <button
          onClick={() => setShowModal(false)}
          className="bg-gray-300 px-4 py-2 rounded"
        >
          Cancel
        </button>
        <button
          onClick={handleCreate}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Create
        </button>
      </div>
    </div>
  </div>
);
};

export default Taskmodal;
