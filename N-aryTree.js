const graph = [
  {
    id: "parent1",
    name: "parent1",
    children: [
      {
        id: "parent1-1",
        name: "parent1-1",
      },
      {
        id: "parent1-2",
        name: "parent1-2",
        children: [
          {
            id: "parent1-2-1",
            name: "parent1-2-1",
          },
          {
            id: "parent1-2-2",
            name: "parent1-2-2",
          },
        ],
      },
    ],
  },
  {
    id: "parent2",
    name: "parent2",
  },
];

const checkedState = ["parent1-2-1", "parent1-2-2"];

function getAllCheckedNodes(data, checkedState, acc = []) {
  let currentChecked = [];

  data.forEach((node) => {
    if (Array.isArray(node.children) && node.children.length > 0) {
      const innerGraph = getAllCheckedNodes(node.children, checkedState, acc);

      if (innerGraph.currentChecked.length === node.children.length) {
        const checked = innerGraph.currentChecked.every((node) => node.checked);
        const item = {
          id: node.id,
          checked,
          indeterminate: !checked,
          hasChildren: true,
        };
        currentChecked.push(item);
        acc.push(item);
      } else if (innerGraph.currentChecked.length > 0) {
        const item = {
          id: node.id,
          checked: false,
          indeterminate: true,
          hasChildren: true,
        };
        currentChecked.push(item);
        acc.push(item);
      }
    } else if (checkedState.includes(node.id)) {
      const item = {
        id: node.id,
        checked: true,
        indeterminate: false,
        hasChildren: false,
      };
      currentChecked.push(item);
      acc.push(item);
    }
  });

  return { result: acc, currentChecked };
}

console.log(getAllCheckedNodes(graph, checkedState).result);
