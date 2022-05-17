export type GraphItem = {
  id: string;
  depth: number;
  dependencies: GraphItem[];
};
