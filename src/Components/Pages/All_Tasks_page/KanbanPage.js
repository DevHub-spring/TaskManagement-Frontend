import { useState } from "react";
import { DndContext, closestCorners } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import KanbanColumn from "./KanbanColumn";
import TaskModal from "../Task/Taskmodal";
import SideBarPage from "../SideBar/SideBarPage";
import kanban from "../../../images/kanban.jpeg";

const initialTasks = [
  { id: "1", title: "Form Builder", status: "To Do" },
  { id: "2", title: "Hard docs", status: "To Do" },
  { id: "3", title: "Portlets view", status: "To Do" },
  { id: "4", title: "Hard jet", status: "To Do" },
  { id: "5", title: "Backend integration", status: "To Do" },
  { id: "6", title: "Kanban setup", status: "To Do" },
  { id: "7", title: "Performance tests", status: "In Progress" },
  { id: "8", title: "Webix optimizations", status: "In Progress" },
  { id: "9", title: "Kanban tutorial", status: "In Progress" },
  { id: "10", title: "Jet framework", status: "In Progress" },
  { id: "11", title: "Spreadsheet NodeJS", status: "In Progress" },
  { id: "12", title: "Webix Jet 2.0", status: "In Progress" },
  { id: "13", title: "Code Snippet", status: "Done" },
  { id: "14", title: "Webix Jet Easy", status: "Done" },
  { id: "15", title: "Chat app interface", status: "Done" },
  { id: "16", title: "Bug fixes", status: "Done" },
];

const columns = ["To Do", "In Progress", "Done"];

const KanbanPage = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [showModal, setShowModal] = useState(false);

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

  return (
    <div>
      {/* Fixed Sidebar */}
      <div>
        <SideBarPage />
      </div>

      {/* Main Content */}
      <div className="ml-[-5rem] flex-1 p-6 flex gap-6">
        {/* Kanban Board */}
        <div className="flex-1 flex flex-col gap-4">
          {/* Header Card */}
          <div className="bg-white p-6 rounded-xl shadow-md sticky top-0 z-20 w-[calc(100%-0rem)]">
            <div className="flex justify-between items-center">
              <h1 className="text-2xl font-bold text-gray-800">All Tasks</h1>
              <button
                onClick={() => setShowModal(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-all"
              >
                + Create Task
              </button>
            </div>
          </div>

          {/* Columns Container */}
          <div className="flex-1">
          <DndContext collisionDetection={closestCorners} onDragEnd={onDragEnd}>
  <div className="grid grid-cols-3 gap-6 h-[calc(100vh-180px)]">
    {columns.map((status) => (
      <SortableContext 
        key={status}
        items={tasks.filter(t => t.status === status).map(t => t.id)}
      >
        <KanbanColumn 
          status={status} 
          tasks={tasks.filter(t => t.status === status)}
        />
      </SortableContext>
    ))}
  </div>
</DndContext>
          </div>
        </div>

        {/* Image Preview */}
        <div className="w-60 bg-white rounded-xl shadow-md sticky top-6 h-[calc(100vh-44px)]">
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

      {showModal && <TaskModal setShowModal={setShowModal} setTasks={setTasks} />}
    </div>
  );
};

export default KanbanPage;