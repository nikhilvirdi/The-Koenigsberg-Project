import Link from "next/link";

export default function Page() {
  return (
    <div className="w-full pt-[32px] pb-[40px] px-[40px] font-serif">
      {/* Page Heading & Divider at the top */}
      <h1 className="mb-[8px]">About</h1>
      <div className="border-b border-[#D4D4D4] w-full mb-[36px]"></div>

      {/* Two-column layout container starting below the divider */}
      <div className="flex gap-8 items-start w-full">
        {/* Left Column - Main Content */}
        <div className="flex-grow flex-1 text-[#1A1A1A]">
          <div className="leading-[1.9]">
            {/* Section 1 */}
            <h2 className="mb-[8px]">What is The Koenigsberg Project?</h2>
            <p className="mb-[32px]">
              The Koenigsberg Project began the way most genuine ideas do — not from a
              plan, but from a frustration. It started with a college internal examination,
              an algorithms course, and a project that needed to be submitted. The result
              was a pathfinding visualizer — polished, animated, presentable. It did its
              job. But the moment the presentation ended, something felt wrong about it.
            </p>

            {/* Section 2 */}
            <h2 className="mb-[8px]">The Problem with Algorithm Visualizers</h2>
            <p className="mb-[32px]">
              The frustration was not with the project itself. It was with the entire
              category of thing it belonged to. Algorithm visualizer websites have existed for
              years. They show you what an algorithm does. They animate the traversal, paint the
              visited nodes, highlight the final path. And then they stop. They never tell you
              why the algorithm exists, what problem it was invented to solve, what came
              before it, or why it matters. They are, at their core, animations. Impressive
              animations, sometimes. But animations nonetheless.
            </p>

            {/* Section 3 */}
            <h2 className="mb-[8px]">What This Platform Does Differently</h2>
            <p className="mb-[32px]">
              This platform is an attempt to build something different. The Koenigsberg
              Project is a graph algorithm encyclopedia — a resource where each algorithm is
              treated not as a procedure to be demonstrated but as an idea to be understood.
              Every algorithm on this platform has its own dedicated page covering its theory,
              its mathematics, its history, its real-world engineering significance, its
              variants, its limitations, and its place in the broader story of computer
              science.
            </p>

            {/* Section 4 */}
            <h2 className="mb-[8px]">Why Koenigsberg?</h2>
            <p className="mb-[32px]">
              The name comes from the Seven Bridges of Königsberg — a problem posed in the
              eighteenth century about whether it was possible to walk through the city of
              Königsberg crossing each of its seven bridges exactly once. In 1736, Leonhard Euler
              proved that it was not. In doing so, he invented graph theory. Every algorithm
              documented on this platform exists because of that proof. The name is not a
              clever reference. It is historically accurate.
            </p>

            {/* Section 5 */}
            <h2 className="mb-[8px]">Who Is This For?</h2>
            <p className="mb-[32px]">
              The platform is not built for interview preparation. It is not optimized for
              getting you from zero to passing a technical screen as quickly as possible. It is
              built for people who are genuinely curious about how computation works — students
              who read algorithms textbooks not because they are assigned but because they find
              them interesting, researchers who need a reference that goes beyond surface-level
              definitions, educators who want to point students somewhere that actually
              explains things properly.
            </p>

            {/* Section 6 */}
            <h2 className="mb-[8px]">What the Catalog Covers</h2>
            <p className="mb-[32px]">
              The catalog currently covers graph algorithms across classical computer science
              theory, artificial intelligence, machine learning, network routing, distributed
              systems, VLSI design, bioinformatics, compiler design, social network analysis,
              and several other engineering domains. The inclusion criteria are strict. An
              algorithm earns a place in this encyclopedia only if it has a standalone
              conceptual identity, genuine educational depth, and real significance beyond the
              context in which it was first invented.
            </p>

            {/* Section 7 */}
            <h2 className="mb-[8px]">The Honest Version</h2>
            <p className="mb-[32px]">
              This is not a startup. There are no investors, no growth metrics, no roadmap
              driven by user acquisition. It is an open project built by a computer science
              undergraduate from Bangalore who became obsessed with the idea that graph
              algorithms deserve better documentation than they currently have. That is the
              entire story.
            </p>
          </div>

          <div className="border-b border-[#D4D4D4] w-full mt-[32px] mb-[24px]"></div>

          <div className="flex gap-[24px]">
            <Link 
              href="/algorithms" 
              className="text-[#4B4038] text-[15px] font-serif no-underline hover:underline"
            >
              Browse Algorithms &rarr;
            </Link>
            <Link 
              href="/theory" 
              className="text-[#4B4038] text-[15px] font-serif no-underline hover:underline"
            >
              Read the Theory &rarr;
            </Link>
          </div>
        </div>

        {/* Right Column - Sidebar */}
        <div className="w-64 flex-shrink-0 sticky top-6 flex flex-col gap-4">
          {/* Box 1: Check Out */}
          <div className="border border-[#C8C0B4] bg-[#FAFAF8] rounded-[6px]">
            <div className="bg-[#6B4C3B] text-white sidebar-header font-mono py-[6px] px-[12px] uppercase rounded-[5px_5px_0_0]">
              &rarr; Check Out
            </div>
            <div className="p-[12px] py-[8px] flex flex-col sidebar-body">
              {/* Item 1 */}
              <div className="mb-4 flex flex-col">
                <p className="text-[#6B6B6B] leading-[1.4] mb-1">
                  The Koenigsberg Project is a graph algorithm encyclopedia — built for students, researchers, and engineers who want to understand computation deeply.
                </p>
                <Link href="/algorithms" className="text-[#6B4C3B] font-serif no-underline hover:underline font-semibold">
                  Explore the Algorithms &rarr;
                </Link>
              </div>

              {/* Item 2 */}
              <div className="mb-4 flex flex-col">
                <p className="text-[#6B6B6B] leading-[1.4] mb-1">
                  Found an error in an algorithm page, or want to suggest one we haven't covered yet?
                </p>
                <Link href="/author" className="text-[#6B4C3B] font-serif no-underline hover:underline font-semibold">
                  Reach out here &rarr;
                </Link>
              </div>

              {/* Item 3 */}
              <div className="flex flex-col">
                <p className="text-[#6B6B6B] leading-[1.4] mb-1">
                  Know about the person behind this idea — why it started and what drives it.
                </p>
                <Link href="/author" className="text-[#6B4C3B] font-serif no-underline hover:underline font-semibold">
                  Know the Author &rarr;
                </Link>
              </div>
            </div>
          </div>

          {/* Box 2: New Algorithms */}
          <div className="border border-[#C8C0B4] bg-[#FAFAF8] rounded-[6px]">
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
              <Link href="/algorithm/5" className="text-[#1a0dab] font-serif no-underline hover:underline">
                Dijkstra's Algorithm
              </Link>
              <Link href="/algorithm/9" className="text-[#1a0dab] font-serif no-underline hover:underline">
                A* Search Algorithm
              </Link>
              <Link href="/algorithm/6" className="text-[#1a0dab] font-serif no-underline hover:underline">
                Bellman-Ford Algorithm
              </Link>
              <span className="text-[#6B6B6B] mt-2 font-serif">
                Many more coming soon...
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
