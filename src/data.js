const initialData = {
  tasks: {
    "task-1": { id: "task-1", content: "Take out the garbage" },
    "task-2": { id: "task-2", content: "Wash the dishes" },
    "task-3": { id: "task-3", content: "Charge my phone" },
    "task-4": { id: "task-4", content: "Cook dinner" },
    "task-5": { id: "task-5", content: "Change baby diaper" },
    "task-6": { id: "task-6", content: "Buy groceries" },
    "task-7": { id: "task-7", content: "Do Laundry" },
    "task-8": { id: "task-8", content: "Cook Breakfast" }
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To do",
      //Maintain order
      taskIds: [
        "task-1",
        "task-2",
        "task-3",
        "task-4",
        "task-5",
        "task-6",
        "task-7",
        "task-8"
      ]
    },
    "column-2": {
      id: "column-2",
      title: "Started",
      //Maintain order
      taskIds: []
    },
    "column-3": {
      id: "column-3",
      title: "Done",
      //Maintain order
      taskIds: []
    }
  },
  // Facilitate reordering of the columns
  // Also for rendering out number of columns
  columnOrder: ["column-1", "column-2", "column-3"]
};

export default initialData;
