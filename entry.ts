import { graph } from './graph';
import { findDepth } from './src/find-depth';
import { GraphItem } from './src/graph-item';

const depth = findDepth(graph, (x: GraphItem) => x.id === 'arthur');
console.log(depth); // 3
