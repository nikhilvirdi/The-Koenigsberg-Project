import Link from "next/link";

const algorithms = [
  { id: 1, name: "Breadth-First Search (BFS)", technique: "Traversal", domain: "Classical CS" },
  { id: 2, name: "Depth-First Search (DFS)", technique: "Traversal", domain: "Classical CS" },
  { id: 3, name: "Lexicographic BFS", technique: "Traversal", domain: "Graph Theory" },
  { id: 4, name: "Random Walk on Graphs", technique: "Traversal", domain: "AI / ML" },
  { id: 5, name: "Dijkstra's Algorithm", technique: "Shortest Path", domain: "Classical CS" },
  { id: 6, name: "Bellman-Ford Algorithm", technique: "Shortest Path", domain: "Classical CS" },
  { id: 7, name: "Floyd-Warshall Algorithm", technique: "All-Pairs Shortest Path", domain: "Classical CS" },
  { id: 8, name: "Johnson's Algorithm", technique: "All-Pairs Shortest Path", domain: "Classical CS" },
  { id: 9, name: "A* Search Algorithm", technique: "Heuristic Pathfinding", domain: "AI / Robotics" },
  { id: 10, name: "Jump Point Search (JPS)", technique: "Pathfinding", domain: "AI / Mapping" },
  { id: 11, name: "Contraction Hierarchies", technique: "Hierarchical Routing", domain: "Route Planning" },
  { id: 12, name: "RAPTOR", technique: "Multi-Criteria Routing", domain: "Transit Systems" },
  { id: 13, name: "Yen's K-Shortest Paths", technique: "Shortest Path", domain: "Network Routing" },
  { id: 14, name: "Suurballe's Algorithm", technique: "Disjoint Paths", domain: "Network Routing" },
  { id: 15, name: "Kruskal's Algorithm", technique: "Minimum Spanning Tree", domain: "Classical CS" },
  { id: 16, name: "Prim's Algorithm", technique: "Minimum Spanning Tree", domain: "Classical CS" },
  { id: 17, name: "Borůvka's Algorithm", technique: "Minimum Spanning Tree", domain: "Distributed Systems" },
  { id: 18, name: "Camerini's Algorithm", technique: "Minimum Bottleneck Tree", domain: "Operations Research" },
  { id: 19, name: "Edmonds' Arborescence", technique: "Directed Spanning Tree", domain: "Network Theory" },
  { id: 20, name: "Gallager-Humblet-Spira (GHS)", technique: "Distributed MST", domain: "Distributed Systems" },
  { id: 21, name: "Karger-Klein-Tarjan", technique: "Randomized MST", domain: "Theoretical CS" },
  { id: 22, name: "Tarjan's Offline LCA", technique: "Tree Query", domain: "Data Structures" },
  { id: 23, name: "Heavy-Light Decomposition", technique: "Tree Decomposition", domain: "Algorithmic Theory" },
  { id: 24, name: "Euler Tour Technique", technique: "Tree Processing", domain: "Graph Theory" },
  { id: 25, name: "Link-Cut Tree Algorithm", technique: "Dynamic Trees", domain: "Advanced CS" },
  { id: 26, name: "Ford-Fulkerson Algorithm", technique: "Max Flow", domain: "Optimization" },
  { id: 27, name: "Edmonds-Karp Algorithm", technique: "Max Flow", domain: "Optimization" },
  { id: 28, name: "Dinic's Algorithm", technique: "Max Flow", domain: "Optimization" },
  { id: 29, name: "Push-Relabel Algorithm", technique: "Max Flow", domain: "Optimization" },
  { id: 30, name: "Boykov-Kolmogorov Algorithm", technique: "Graph Cut", domain: "Computer Vision" },
  { id: 31, name: "Karger's Min-Cut Algorithm", technique: "Randomized Cut", domain: "Theoretical CS" },
  { id: 32, name: "Stoer-Wagner Algorithm", technique: "Deterministic Min-Cut", domain: "Optimization" },
  { id: 33, name: "Gomory-Hu Tree (Gusfield's)", technique: "Equivalent Flow Tree", domain: "Optimization" },
  { id: 34, name: "Successive Shortest Path", technique: "Min-Cost Flow", domain: "Optimization" },
  { id: 35, name: "Cycle Canceling Algorithm", technique: "Min-Cost Flow", domain: "Optimization" },
  { id: 36, name: "Network Simplex Algorithm", technique: "Min-Cost Flow", domain: "Optimization" },
  { id: 37, name: "Hopcroft-Karp Algorithm", technique: "Bipartite Matching", domain: "Optimization" },
  { id: 38, name: "Edmonds' Blossom Algorithm", technique: "General Matching", domain: "Optimization" },
  { id: 39, name: "Gale-Shapley Algorithm", technique: "Stable Matching", domain: "Economics / OR" },
  { id: 40, name: "Hungarian Algorithm", technique: "Max-Weight Matching", domain: "Optimization" },
  { id: 41, name: "Greedy Graph Coloring", technique: "Vertex Coloring", domain: "Classical CS" },
  { id: 42, name: "Welsh-Powell Algorithm", technique: "Vertex Coloring", domain: "Classical CS" },
  { id: 43, name: "DSATUR Algorithm", technique: "Vertex Coloring", domain: "Operations Research" },
  { id: 44, name: "Recursive Largest First (RLF)", technique: "Vertex Coloring", domain: "Operations Research" },
  { id: 45, name: "Wigderson's Algorithm", technique: "Vertex Coloring", domain: "Theoretical CS" },
  { id: 46, name: "Tarjan's SCC Algorithm", technique: "Connectivity", domain: "Classical CS" },
  { id: 47, name: "Kosaraju's Algorithm", technique: "Connectivity", domain: "Classical CS" },
  { id: 48, name: "Gabow's SCC Algorithm", technique: "Connectivity", domain: "Classical CS" },
  { id: 49, name: "Hopcroft-Tarjan Articulation / Bridges", technique: "Biconnectivity", domain: "Classical CS" },
  { id: 50, name: "Schmidt's Chain Decomposition", technique: "Edge Decomposition", domain: "Graph Theory" },
  { id: 51, name: "Even-Shiloach Algorithm", technique: "Decremental Connectivity", domain: "Dynamic Graphs" },
  { id: 52, name: "Holm-Lichtenberg-Thorup (HLT)", technique: "Fully Dynamic Connectivity", domain: "Dynamic Graphs" },
  { id: 53, name: "Kahn's Algorithm", technique: "Topological Sort", domain: "Classical CS" },
  { id: 54, name: "Coffman-Graham Algorithm", technique: "Topological Scheduling", domain: "Operations Research" },
  { id: 55, name: "Floyd's Cycle Detection", technique: "Cycle Detection", domain: "Classical CS" },
  { id: 56, name: "Johnson's Elementary Circuits", technique: "Cycle Enumeration", domain: "Graph Theory" },
  { id: 57, name: "Rocha-Thatte Algorithm", technique: "Distributed Cycle Detection", domain: "Distributed Systems" },
  { id: 58, name: "Lengauer-Tarjan Algorithm", technique: "Dominator Tree", domain: "Compiler Design" },
  { id: 59, name: "Bron-Kerbosch Algorithm", technique: "Clique Detection", domain: "Social Networks" },
  { id: 60, name: "Girvan-Newman Algorithm", technique: "Community Detection", domain: "Network Science" },
  { id: 61, name: "Louvain Algorithm", technique: "Community Detection", domain: "Network Science" },
  { id: 62, name: "Leiden Algorithm", technique: "Community Detection", domain: "Network Science" },
  { id: 63, name: "Label Propagation Algorithm", technique: "Community Detection", domain: "AI / ML" },
  { id: 64, name: "Spectral Clustering", technique: "Graph Partitioning", domain: "Machine Learning" },
  { id: 65, name: "Markov Clustering (MCL)", technique: "Flow Simulation", domain: "Computational Biology" },
  { id: 66, name: "Graclus Algorithm", technique: "Multilevel Graph Clustering", domain: "Machine Learning" },
  { id: 67, name: "PageRank Algorithm", technique: "Centrality", domain: "Web Search" },
  { id: 68, name: "HITS Algorithm", technique: "Centrality", domain: "Web Search" },
  { id: 69, name: "Brandes' Algorithm", technique: "Betweenness Centrality", domain: "Social Networks" },
  { id: 70, name: "Katz Centrality", technique: "Centrality", domain: "Social Networks" },
  { id: 71, name: "iFUB Algorithm", technique: "Exact Graph Diameter", domain: "Network Science" },
  { id: 72, name: "Hopcroft-Tarjan Planarity Test", technique: "Planarity", domain: "Theoretical CS" },
  { id: 73, name: "Boyer-Myrvold Planarity Test", technique: "Planarity", domain: "VLSI Design" },
  { id: 74, name: "Lempel-Even-Cederbaum (PQ-Tree)", technique: "Planarity", domain: "VLSI Design" },
  { id: 75, name: "Sugiyama Framework", technique: "Graph Drawing", domain: "Visualization" },
  { id: 76, name: "Fruchterman-Reingold Algorithm", technique: "Force-Directed Layout", domain: "Visualization" },
  { id: 77, name: "Kamada-Kawai Algorithm", technique: "Force-Directed Layout", domain: "Visualization" },
  { id: 78, name: "Link-State Routing Algorithm", technique: "Network Routing", domain: "Telecommunications" },
  { id: 79, name: "Path Vector Routing (BGP)", technique: "Network Routing", domain: "Telecommunications" },
  { id: 80, name: "Merlin-Segall Algorithm", technique: "Distributed Routing", domain: "Distributed Systems" },
  { id: 81, name: "Spanning Tree Protocol (STP)", technique: "Network Bridging", domain: "Network Engineering" },
  { id: 82, name: "Paxos Algorithm", technique: "Distributed Consensus", domain: "Distributed Systems" },
  { id: 83, name: "Raft Consensus Algorithm", technique: "Distributed Consensus", domain: "Distributed Systems" },
  { id: 84, name: "Bully Algorithm", technique: "Leader Election", domain: "Distributed Systems" },
  { id: 85, name: "Chang-Roberts Election Algorithm", technique: "Leader Election", domain: "Distributed Systems" },
  { id: 86, name: "Chandy-Lamport Snapshot Algorithm", technique: "Causal Graph Analysis", domain: "Distributed Systems" },
  { id: 87, name: "Dijkstra-Scholten Algorithm", technique: "Termination Detection", domain: "Distributed Systems" },
  { id: 88, name: "Pregel Computation Model", technique: "Vertex-Centric Processing", domain: "Big Data" },
  { id: 89, name: "DeepWalk Algorithm", technique: "Graph Embedding", domain: "AI / ML" },
  { id: 90, name: "Node2Vec Algorithm", technique: "Graph Embedding", domain: "AI / ML" },
  { id: 91, name: "Graph Convolutional Network (GCN)", technique: "Graph Neural Networks", domain: "AI / Deep Learning" },
  { id: 92, name: "GraphSAGE", technique: "Graph Neural Networks", domain: "AI / Deep Learning" },
  { id: 93, name: "Weisfeiler-Lehman Isomorphism Test", technique: "Graph Isomorphism", domain: "AI / ML" },
  { id: 94, name: "VF2 Algorithm", technique: "Subgraph Isomorphism", domain: "Computational Biology" },
  { id: 95, name: "LAD Algorithm", technique: "Subgraph Isomorphism", domain: "Constraint Logic" },
  { id: 96, name: "Nauty Algorithm", technique: "Canonical Labeling", domain: "Mathematics" },
  { id: 97, name: "UPGMA Algorithm", technique: "Phylogenetic Trees", domain: "Computational Biology" },
  { id: 98, name: "Neighbor-Joining Algorithm", technique: "Phylogenetic Trees", domain: "Computational Biology" },
  { id: 99, name: "Maximum Parsimony (Fitch's)", technique: "Phylogenetic Networks", domain: "Computational Biology" },
  { id: 100, name: "De Bruijn Graph Assembly", technique: "Genome Assembly", domain: "Computational Biology" },
  { id: 101, name: "Kernighan-Lin Algorithm", technique: "Graph Partitioning", domain: "VLSI Design" },
  { id: 102, name: "Fiduccia-Mattheyses Algorithm", technique: "Graph Partitioning", domain: "VLSI Design" },
  { id: 103, name: "Lee Algorithm (Maze Routing)", technique: "Grid Routing", domain: "VLSI Design" },
  { id: 104, name: "Christofides Algorithm", technique: "Metric TSP Approximation", domain: "Operations Research" },
  { id: 105, name: "Held-Karp Algorithm", technique: "Exact TSP Optimization", domain: "Operations Research" }
];

export default function Page() {
  return (
    <div className="w-full pt-[32px] pb-[40px] px-[40px] font-serif">
      <h1 className="font-bold mb-[4px] text-[#1A1A1A]">Algorithms</h1>
      <p className="text-[#6B6B6B] mb-[24px]">
        A catalog of graph algorithms spanning classical computer science, AI, network systems, distributed computing, and beyond.
      </p>
      <div className="border-b border-[#D4D4D4] w-full mb-[28px]"></div>

      {/* Algorithms Table */}
      <table className="w-full table-fixed border-collapse border border-[#D4D4D4] rounded-none">
        <thead>
          <tr className="bg-[#F4F1EE] border border-[#D4D4D4]">
            <th style={{ width: "4%" }} className="border border-[#D4D4D4] py-2 px-3 font-mono font-bold uppercase text-[#1A1A1A] text-left">#</th>
            <th style={{ width: "46%" }} className="border border-[#D4D4D4] py-2 px-3 font-mono font-bold uppercase text-[#1A1A1A] text-left">Algorithm</th>
            <th style={{ width: "28%" }} className="border border-[#D4D4D4] py-2 px-3 font-mono font-bold uppercase text-[#1A1A1A] text-left">Technique</th>
            <th style={{ width: "22%" }} className="border border-[#D4D4D4] py-2 px-3 font-mono font-bold uppercase text-[#1A1A1A] text-left">Domain</th>
          </tr>
        </thead>
        <tbody>
          {algorithms.map((algo, index) => {
            const isAlternate = index % 2 === 1;
            const rowBg = isAlternate ? "bg-[#F4F1EE]" : "bg-[#FAFAF8]";
            return (
              <tr key={algo.id} className={`${rowBg}`}>
                <td className="border border-[#D4D4D4] py-2 px-3 text-[#1A1A1A] font-mono">
                  {algo.id}
                </td>
                <td className="border border-[#D4D4D4] py-2 px-3 text-[#1A1A1A]">
                  <Link
                    href={`/algorithm/${algo.id}`}
                    className="text-[#1a0dab] no-underline hover:underline font-serif"
                  >
                    {algo.name}
                  </Link>
                </td>
                <td className="border border-[#D4D4D4] py-2 px-3 text-[#1A1A1A]">
                  {algo.technique}
                </td>
                <td className="border border-[#D4D4D4] py-2 px-3 text-[#1A1A1A]">
                  {algo.domain}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
