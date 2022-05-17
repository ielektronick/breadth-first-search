import { Queue } from './queue';
import { GraphItem } from './graph-item';

export const findDepth = (
  graph: GraphItem,
  evaluator: (x: GraphItem) => boolean
): number => {
  const queue = new Queue<GraphItem>();
  queue.enqueue(graph.dependencies);
  const searched: string[] = [];

  while (!queue.isEmpty) {
    const graphItem = queue.dequeue();
    if (searched.indexOf(graphItem.id) > -1) {
      continue;
    }

    if (evaluator(graphItem)) {
      return graphItem.depth;
    } else {
      queue.enqueue(graphItem.dependencies);
      searched.push(graphItem.id);
    }
  }

  return 0;
};
