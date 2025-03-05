import { useDroppable } from "@dnd-kit/core";
import { AutoSizer, List } from "react-virtualized";
import TaskCard from "../Task/TaskCard";

const KanbanColumn = ({ status, tasks, onEdit, expandedTaskId, setExpandedTaskId }) => {
  const { setNodeRef } = useDroppable({ 
    id: status,
    data: {
      type: "column",
      status,
    },
  });

  const rowRenderer = ({ index, key, style }) => (
    <div key={key} style={{ ...style, margin: "0 8px" }}>
      <TaskCard 
        task={tasks[index]}
        onEdit={onEdit}
        expandedTaskId={expandedTaskId}        // ✅ Passing state correctly
        setExpandedTaskId={setExpandedTaskId}  // ✅ And passing setter
      />
    </div>
  );

  return (
    <div
      ref={setNodeRef}
      className="flex flex-col w-[300px] min-w-[250px] max-w-full bg-gray-100 rounded-lg border border-gray-200 h-full"
    >
      {/* Column Header */}
      <div className="bg-white p-3 mb-1 rounded-t-lg border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-700">{status}</h2>
      </div>

      {/* Virtualized Task List */}
      <div className="flex-1 overflow-y-auto scrollbar-hidden">
        <AutoSizer disableHeight>
          {({ width }) => (
            <List
              width={width}
              height={window.innerHeight - 150}
              rowCount={tasks.length}
              rowHeight={108}
              rowRenderer={rowRenderer}
              className="no-scrollbar"
            />
          )}
        </AutoSizer>
      </div>
    </div>
  );
};

export default KanbanColumn;