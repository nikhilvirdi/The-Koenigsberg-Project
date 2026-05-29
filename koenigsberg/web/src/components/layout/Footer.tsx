import Link from "next/link";

export default function Footer() {
  return (
    <footer className="h-[40px] w-full bg-[#E8E5E2] border-t border-[#D4D4D4] flex items-center font-serif text-[13px] text-[#6B6B6B] select-none">
      <div className="max-w-[1280px] w-full mx-auto px-6 flex items-center justify-between">
        <div>The Koenigsberg Project</div>
        <div>
          Built by{" "}
          <Link 
            href="/author" 
            className="text-[#4B4038] no-underline hover:underline font-semibold"
          >
            Nikhil Virdi
          </Link>
        </div>
      </div>
    </footer>
  );
}
