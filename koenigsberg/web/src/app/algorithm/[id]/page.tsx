import Link from "next/link";

const algorithmNames: { [key: number]: string } = {
  1: "Breadth-First Search (BFS)",
  2: "Depth-First Search (DFS)",
  3: "Lexicographic BFS",
  4: "Random Walk on Graphs",
  5: "Dijkstra's Algorithm",
  6: "Bellman-Ford Algorithm",
  7: "Floyd-Warshall Algorithm",
  8: "Johnson's Algorithm",
  9: "A* Search Algorithm",
  10: "Jump Point Search (JPS)",
};

interface PageProps {
  params: {
    id: string;
  };
}

export default function Page({ params }: PageProps) {
  const idNum = parseInt(params.id, 10);
  const name = algorithmNames[idNum] || `Algorithm #${params.id}`;

  return (
    <div className="w-full pt-[32px] pb-[40px] px-[40px] font-serif">
      {/* Page Heading & Divider at the top */}
      <h1 className="mb-[8px] text-[#1A1A1A] leading-tight">{name}</h1>
      <div className="border-b border-[#D4D4D4] w-full mb-[36px]"></div>

      {/* Centered Content */}
      <div className="flex flex-col items-center justify-center min-h-[400px] text-center w-full">
        <div className="bg-[#F4F1EE] border border-[#D4D4D4] p-[32px] max-w-[500px] w-full text-center mb-[32px] rounded-none">
          <p className="font-bold text-[#1A1A1A] mb-[8px]">
            This page is under construction.
          </p>
          <p className="text-[#6B6B6B]">
            Full theory, visualizer, and wiki coming soon. Check back later.
          </p>
        </div>

        <Link 
          href="/algorithms" 
          className="text-[#4B4038] font-semibold no-underline hover:underline font-serif"
        >
          &larr; Back to Algorithms
        </Link>
      </div>
    </div>
  );
}
