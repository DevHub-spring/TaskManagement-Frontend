import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { FaEdit } from "react-icons/fa";

const TaskCard = ({ task, onEdit, expandedTaskId, setExpandedTaskId }) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({
      id: task.id,
      data: { type: "task", task, status: task.status },
    });

  const getStatusColor = (status) => {
    switch (status) {
      case "In Progress":
        return "bg-yellow-300";
      case "Done":
        return "bg-green-300";
      default:
        return "bg-sky-300";
    }
  };

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: transition || "transform 200ms ease",
    opacity: isDragging ? 0.5 : 1,
    position: "relative",
    zIndex: isDragging ? 999 : "auto",
    touchAction: "none",
  };

  const isExpanded = expandedTaskId === task.id;
  const maxLength = 100;

  const toggleExpand = (e) => {
    e.stopPropagation();
    setExpandedTaskId((prev) => (prev === task.id ? null : task.id));
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`p-3 rounded-lg shadow-sm hover:shadow-md cursor-grab active:cursor-grabbing h-auto overflow-hidden m-[10px] mr-[18px] ${getStatusColor(task.status)}`}
    >
      <div {...attributes} {...listeners}>
        <div className="text-gray-800 text-sm text-center font-semibold">
          {task.title}
        </div>

        {task.description && (
          <div className="mt-2 text-gray-700 text-xs">
            {isExpanded ? task.description : `${task.description.slice(0, maxLength)}...`}
            {task.description.length > maxLength && (
              <span
                style={{ pointerEvents: "auto" }}
                onClick={toggleExpand}
                className="text-blue-600 cursor-pointer underline ml-1"
              >
                {isExpanded ? "less" : "more"}
              </span>
            )}
          </div>
        )}
      </div>

      <button
        style={{ pointerEvents: "auto" }}
        className="absolute bottom-2 right-2 text-gray-700 hover:text-gray-900"
        onClick={(e) => {
          e.stopPropagation();
          onEdit(task);
        }}
      >
        <FaEdit />
      </button>
    </div>
  );
};

export default TaskCard;