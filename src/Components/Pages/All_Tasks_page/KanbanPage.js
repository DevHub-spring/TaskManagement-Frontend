import { useState } from "react";
import { DndContext, closestCorners } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import KanbanColumn from "./KanbanColumn";
import TaskModal from "../Task/Taskmodal";
import SideBarPage from "../SideBar/SideBarPage";
import kanban from "../../../images/kanban.jpeg";

const initialTasks = [
  { id: "1", title: "Form Builder", status: "To Do", description: "Detailed description for Form Builder. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus." },
  { id: "2", title: "Hard docs", status: "To Do", description: "Some description for Hard docs." },
  { id: "3", title: "Portlets view", status: "To Do", description: "Another long description for Portlets view which might be really long to test the expansion feature. Pellentesque habitant morbi." },
  { id: "4", title: "Hard jet", status: "To Do", description: "Description for Hard jet." },
  { id: "5", title: "Backend integration", status: "To Do", description: "Backend integration description goes here." },
  { id: "6", title: "Kanban setup", status: "To Do", description: "Setup description." },
  { id: "7", title: "Performance tests", status: "In Progress", description: "Performance tests description." },
  { id: "8", title: "Webix optimizations", status: "In Progress", description: "Optimizations description." },
  { id: "9", title: "Kanban tutorial", status: "In Progress", description: "Tutorial description." },
  { id: "10", title: "Jet framework", status: "In Progress", description: "Jet framework details." },
  { id: "11", title: "Spreadsheet NodeJS", status: "In Progress", description: "Spreadsheet details." },
  { id: "12", title: "Webix Jet 2.0", status: "In Progress", description: "Webix Jet 2.0 description." },
  { id: "13", title: "Code Snippet", status: "Done", description: "Code snippet description." },
  { id: "14", title: "Webix Jet Easy", status: "Done", description: "Webix Jet Easy description." },
  { id: "15", title: "Chat app interface", status: "Done", description: "Chat app interface details." },
  { id: "16", title: "Bug fixes", status: "Done", description: "Bug fixes description." },
];

const columns = ["To Do", "In Progress", "Done"];

const KanbanPage = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [showModal, setShowModal] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const [expandedTaskId, setExpandedTaskId] = useState(null);

  const onDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;

    const draggedTaskId = active.id;
    const sourceColumn = active.data.current?.status;
    const targetColumn = over.data.current?.status || over.id;
    if (sourceColumn === targetColumn) return;

    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === draggedTaskId ? { ...task, status: targetColumn } : task
      )
    );
  };

  // Edit button handler from TaskCard
  const handleEdit = (task) => {
    console.log("Edit clicked for task:", task); // Debug log
    setTaskToEdit(task);
    setShowModal(true);
  };

  return (
    <div>
      {/* Fixed Sidebar */}
      <div>
        <SideBarPage />
      </div>

      {/* Main Content */}
      <div className="flex flex-1 p-6 gap-6">
        {/* Kanban Board */}
        <div className="flex flex-col h-[calc(100vh-10px)] w-full">
          {/* Header Card */}
          <div className="bg-white p-6 rounded-xl shadow-md sticky top-0 z-20 w-full">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-gray-800">All Tasks</h1>
              <button
                onClick={() => {
                  setTaskToEdit(null);
                  setShowModal(true);
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all"
              >
                + Create Task
              </button>
            </div>
          </div>

          {/* Columns Container */}
          <div className="flex-1 mt-4">
            <DndContext collisionDetection={closestCorners} onDragEnd={onDragEnd}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-2">
                {columns.map((status) => (
                  <SortableContext
                    key={status}
                    items={tasks.filter((t) => t.status === status).map((t) => t.id)}
                  >
                    <KanbanColumn
  status={status}
  tasks={tasks.filter((t) => t.status === status)}
  onEdit={handleEdit}
  expandedTaskId={expandedTaskId}        // ✅ Make sure this is being passed
  setExpandedTaskId={setExpandedTaskId}  // ✅ And this too!
/>
                  </SortableContext>
                ))}
              </div>
            </DndContext>
          </div>
        </div>

        {/* Image Preview */}
        <div className="w-[300px] bg-white rounded-xl shadow-md sticky top-6 h-[calc(100vh-44px)]">
          <div 
            className="h-full flex items-center justify-center bg-gray-50 rounded-xl overflow-hidden" 
            style={{ marginRight: "-141px" }}
          >
            <img 
              src={kanban} 
              alt="kanban-image" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Render Modal for Create/Edit Task */}
      {showModal && (
        <TaskModal
          setShowModal={setShowModal}
          setTasks={setTasks}
          taskToEdit={taskToEdit}
        />
      )}
    </div>
  );
};

export default KanbanPage;
