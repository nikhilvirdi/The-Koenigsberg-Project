import Link from "next/link";

export default function Page() {
  return (
    <div className="w-full pt-[32px] pb-[40px] px-[40px] font-serif">
      {/* Centered placeholder line */}
      <div className="w-full text-center py-[24px] mb-[36px]">
        <span className="text-[#6B6B6B] font-mono text-[14px]">
          [ Author header &mdash; to be rebuilt ]
        </span>
      </div>

      {/* Opening Intro Paragraphs */}
      <div className="mb-[40px] text-[#1A1A1A] leading-[1.9]">
        <p className="mb-[20px]">
          okay so. nik. second year CSE at MSRIT bangalore. came from J&amp;K which is easily the most
          beautiful place in india and yes that's a hill i will die on (literally, it's a hill, there
          are many hills, that's the whole point).
        </p>
        <p>
          backend dev, devops, distributed systems &mdash; that's the actual love. frontend? not his thing.
          and yet somehow every side project ends up needing a full UI. life is funny like that.
        </p>
      </div>

      <div className="border-b border-[#D4D4D4] w-full mb-[32px]"></div>

      {/* Section: Currently Working On */}
      <div className="mb-[32px]">
        <h2 className="mb-[12px]">Currently Working On</h2>
        <p className="mb-[16px] text-[#6B6B6B]">
          things that are either shipping, half-built, or dangerously close to becoming a notion page:
        </p>
        <div className="flex flex-col gap-[12px] text-[16px]">
          <div>
            <span style={{ fontFamily: "'Alegreya SC', serif" }} className="text-[#1A1A1A] font-semibold text-[17px]">The Koenigsberg Project</span>
            <span className="text-[#6B6B6B] font-sans"> &mdash; a graph algorithm encyclopedia covering theory, history, math, and real-world significance. you're literally on it right now.</span>
          </div>
          <div>
            <span style={{ fontFamily: "'Alegreya SC', serif" }} className="text-[#1A1A1A] font-semibold text-[17px]">RedFlag CI</span>
            <span className="text-[#6B6B6B] font-sans"> &mdash; an AI-powered security analysis system that scans pull requests to detect vulnerabilities in both AI-generated and human-written code. risk scoring, automated fixes, the works.</span>
          </div>
          <div>
            <span style={{ fontFamily: "'Alegreya SC', serif" }} className="text-[#1A1A1A] font-semibold text-[17px]">Scorynox</span>
            <span className="text-[#6B6B6B] font-sans"> &mdash; a zero-knowledge OSINT platform that correlates fragmented breach data, models adversarial attack scenarios, and generates custom security playbooks.</span>
          </div>
          <div>
            <span style={{ fontFamily: "'Alegreya SC', serif" }} className="text-[#1A1A1A] font-semibold text-[17px]">AstraNET</span>
            <span className="text-[#6B6B6B] font-sans"> &mdash; a multi-service platform for global-scale astronomical observation. TypeScript/Express orchestration layer with Python engines processing large time-series data via TimescaleDB hypertables.</span>
          </div>
          <div>
            <span style={{ fontFamily: "'Alegreya SC', serif" }} className="text-[#1A1A1A] font-semibold text-[17px]">Mnemosyne</span>
            <span className="text-[#6B6B6B] font-sans"> &mdash; (in ideation) tackling the amnesia problem in AI models &mdash; context switching, session limits, memory loss. the problem is real. the solution is being figured out.</span>
          </div>
          <div>
            <span style={{ fontFamily: "'Alegreya SC', serif" }} className="text-[#1A1A1A] font-semibold text-[17px]">Design, Develop and Operate</span>
            <span className="text-[#6B6B6B] font-sans"> &mdash; public repo. notes and documentation on backend engineering, DevOps, and system design. ongoing.</span>
          </div>
        </div>
      </div>

      <div className="border-b border-[#D4D4D4] w-full mb-[32px]"></div>

      {/* Section: The CS Stuff */}
      <div className="mb-[32px]">
        <h2 className="mb-[12px]">The CS Stuff</h2>
        <div className="leading-[1.9] text-[#1A1A1A]">
          <p className="mb-[16px]">
            java is home. 300+ leetcode problems, 80-something on gfg &mdash; decent enough to not embarrass
            himself in a DSA round. also knows JS, TS, and C. python is next because ignoring AI tooling
            at this point is just cope.
          </p>
          <p>
            favourite subjects: OOP, system design, OS. least favourite: DBMS (sorry not sorry).
            computer networks is genuinely fun though, which probably explains why distributed systems
            became the obsession. second year academically. mentally already dealing with prod outages at 3am.
          </p>
        </div>
      </div>

      <div className="border-b border-[#D4D4D4] w-full mb-[32px]"></div>

      {/* Section: Outside the Terminal */}
      <div className="mb-[32px]">
        <h2 className="mb-[12px]">Outside the Terminal</h2>
        <div className="leading-[1.9] text-[#1A1A1A]">
          <p className="mb-[16px]">
            cricket. hours of it. don't test him.
          </p>
          <p className="mb-[16px]">
            also genuinely obsessed with the himalayas &mdash; not just the mountains, but the whole thing.
            languages, history, culture, civilisations, people. there's an ongoing research compilation
            called "The Highland Civilisation Compendium" which sounds unhinged but is actually serious work.
          </p>
          <p>
            spends too much time on notion building roadmaps. github is where the actual stuff lives.
            the plans-to-shipped ratio is getting better. slowly. we move.
          </p>
        </div>
      </div>

      <div className="border-b border-[#D4D4D4] w-full mb-[32px]"></div>

      {/* Section: Retirement Plan */}
      <div className="mb-[32px]">
        <h2 className="mb-[12px]">Retirement Plan</h2>
        <p className="text-[#1A1A1A]">
          build stuff for years. then go meditate somewhere in zanskar and never think about merge conflicts again.
        </p>
      </div>

      <div className="border-b border-[#D4D4D4] w-full mb-[32px]"></div>

      {/* Section: Life Philosophy */}
      <div className="mb-[32px]">
        <h2 className="mb-[12px]">Life Philosophy</h2>
        <div className="leading-[1.6]">
          <p className="font-mono text-[#1A1A1A] font-semibold mb-1 text-[16px]">
            Spread hate.
          </p>
          <p className="text-[#6B6B6B] italic text-[16px]">
            (jk. spread knowledge.)
          </p>
        </div>
      </div>

      {/* Bottom: Links bar */}
      <div className="border-t border-[#D4D4D4] w-full pt-[24px] mt-[40px] flex gap-[12px] items-center text-[14px] font-mono text-[#6B6B6B]">
        <Link 
          href="https://github.com/nikhilvirdi" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[#6B4C3B] no-underline hover:underline font-semibold"
        >
          GitHub
        </Link>
        <span>&middot;</span>
        <Link 
          href="https://www.linkedin.com/in/nikhil-virdi-819nv/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[#6B4C3B] no-underline hover:underline font-semibold"
        >
          LinkedIn
        </Link>
        <span>&middot;</span>
        <Link 
          href="https://www.instagram.com/nikhilvirdi_" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[#6B4C3B] no-underline hover:underline font-semibold"
        >
          nikhilvirdi_
        </Link>
      </div>
    </div>
  );
}
