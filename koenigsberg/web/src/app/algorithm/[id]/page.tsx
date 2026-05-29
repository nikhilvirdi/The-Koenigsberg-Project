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

      {/* Two-column layout container */}
      <div className="flex gap-8 items-start w-full">
        {/* Left Column - Centered Content */}
        <div className="flex-grow flex-1 flex flex-col items-center justify-center min-h-[400px] text-center">
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

        {/* Right Column - Sidebar */}
        <div className="w-64 flex-shrink-0 sticky top-6 flex flex-col gap-4">
          {/* Box: New Algorithms */}
          <div className="border border-[#C8C0B4] bg-[#FAFAF8] rounded-[6px] text-left">
            <div className="bg-[#6B4C3B] text-white sidebar-header font-mono py-[6px] px-[12px] uppercase rounded-[5px_5px_0_0]">
              &rarr; New Algorithms
            </div>
            <div className="p-[12px] py-[8px] leading-[1.8] flex flex-col sidebar-body">
              <Link href="/algorithm/1" className="text-[#1a0dab] font-serif no-underline hover:underline">
                Breadth-First Search (BFS)
              </Link>
              <Link href="/algorithm/2" className="text-[#1a0dab] font-serif no-underline hover:underline">
                Depth-First Search (DFS)
              </Link>
              <Link href="/algorithm/3" className="text-[#1a0dab] font-serif no-underline hover:underline">
                Lexicographic BFS
              </Link>
              <Link href="/algorithm/4" className="text-[#1a0dab] font-serif no-underline hover:underline">
                Random Walk on Graphs
              </Link>
              <Link href="/algorithm/5" className="text-[#1a0dab] font-serif no-underline hover:underline">
                Dijkstra's Algorithm
              </Link>
              <Link href="/algorithm/6" className="text-[#1a0dab] font-serif no-underline hover:underline">
                Bellman-Ford Algorithm
              </Link>
              <Link href="/algorithm/7" className="text-[#1a0dab] font-serif no-underline hover:underline">
                Floyd-Warshall Algorithm
              </Link>
              <Link href="/algorithm/8" className="text-[#1a0dab] font-serif no-underline hover:underline">
                Johnson's Algorithm
              </Link>
              <Link href="/algorithm/9" className="text-[#1a0dab] font-serif no-underline hover:underline">
                A* Search Algorithm
              </Link>
              <Link href="/algorithm/10" className="text-[#1a0dab] font-serif no-underline hover:underline">
                Jump Point Search (JPS)
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
