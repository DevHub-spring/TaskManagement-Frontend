import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const TaskCard = ({ task }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ 
    id: task.id,
    data: {
      type: "task",
      task,
      status: task.status,
    },
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: transition || "transform 200ms ease", // Force smooth transition
    opacity: isDragging ? 0.5 : 1,
    position: "relative", // Required for proper positioning
    zIndex: isDragging ? 999 : "auto", // Ensure card floats above others
    touchAction: "none", // Prevent scroll interference on mobile
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="bg-white p-3 rounded-lg shadow-sm hover:shadow-md cursor-grab active:cursor-grabbing h-[100px] overflow-hidden m-[10px] mr-[18px]"
    >
      <div className="text-gray-800 line-clamp-3 text-sm">{task.title}</div>
    </div>
  );
};

export default TaskCard;