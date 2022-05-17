import { findDepth } from './src/find-depth';
import { GraphItem } from './src/graph-item';

const graph: GraphItem = {
  id: 'you',
  depth: 0,
  dependencies: [
    {
      id: 'alice',
      depth: 1,
      dependencies: [
        {
          id: 'peggy',
          depth: 2,
          dependencies: [],
        },
      ],
    },
    {
      id: 'bob',
      depth: 1,
      dependencies: [
        {
          id: 'peggy',
          depth: 2,
          dependencies: [],
        },
        {
          id: 'anuj',
          depth: 2,
          dependencies: [],
        },
      ],
    },
    {
      id: 'claire',
      depth: 1,
      dependencies: [
        {
          id: 'thom',
          depth: 2,
          dependencies: [
            {
              id: 'arthur',
              depth: 3,
              dependencies: [],
            },
          ],
        },
        {
          id: 'johnny',
          depth: 2,
          dependencies: [],
        },
      ],
    },
  ],
};

const depth = findDepth(graph, (x: GraphItem) => x.id === 'arthur');
console.log(depth); // 3
