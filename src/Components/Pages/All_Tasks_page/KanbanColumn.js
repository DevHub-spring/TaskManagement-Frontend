import { useDroppable } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import { List, AutoSizer } from "react-virtualized";
import TaskCard from "../Task/TaskCard";

const KanbanColumn = ({ status, tasks }) => {
  const { setNodeRef } = useDroppable({ 
    id: status,
    data: {
      type: "column",
      status,
    },
  });

  const rowRenderer = ({ index, key, style }) => (
    <div key={key} style={{ ...style, margin: '0 8px' }}>
      <TaskCard task={tasks[index]} />
    </div>
  );

  return (
    <div
      ref={setNodeRef}
      className="w-[300px] min-w-[300px] bg-gray-100 rounded-lg border border-gray-200"
    >
      {/* Column Header */}
      <div className="bg-white p-3 rounded-t-lg border-b border-gray-200">
        <h2 className="text-lg font-semibold text-gray-700">{status}</h2>
      </div>

      {/* Virtualized Task List */}
      <div className="h-[500px]">
        <SortableContext items={tasks.map(t => t.id)}>
          <AutoSizer>
            {({ width, height }) => (
              <List
                width={width}
                height={height}
                rowCount={tasks.length}
                rowHeight={108}
                rowRenderer={rowRenderer}
                className="no-scrollbar" // Changed class name
                style={{ overflow: 'hidden' }} // Additional style
              />
            )}
          </AutoSizer>
        </SortableContext>
      </div>
    </div>
  );
};

export default KanbanColumn