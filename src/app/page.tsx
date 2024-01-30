import {
  Home as HomeIcon,
  Search,
  Library,
  ChevronLeft,
  ChevronRight,
  Play,
} from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <nav className="space-y-4">
            <a
              href=""
              className="flex items-center gap-4 text-sm font-semibold text-zinc-400"
            >
              <HomeIcon />
              Home
            </a>
            <a
              href=""
              className="flex items-center gap-4 text-sm font-semibold text-zinc-400"
            >
              <Search />
              Search
            </a>
            <a
              href=""
              className="flex items-center gap-4 text-sm font-semibold text-zinc-400"
            >
              <Library />
              Your Library
            </a>
          </nav>

          <nav className="mt-6 pt-6 border-t border-zinc-800 flex flex-col gap-4">
            <a
              href=""
              className="text-xs font-semibold text-zinc-400 hover:text-zinc-100"
            >
              Top Brasil
            </a>
            <a
              href=""
              className="text-xs font-semibold text-zinc-400 hover:text-zinc-100"
            >
              Heavy Metal
            </a>
            <a
              href=""
              className="text-xs font-semibold text-zinc-400 hover:text-zinc-100"
            >
              Coding
            </a>
            <a
              href=""
              className="text-xs font-semibold text-zinc-400 hover:text-zinc-100"
            >
              Top Mix Brasil
            </a>
          </nav>
        </aside>

        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 p-1">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 p-1">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-semibold text-3xl mt-6">Good Afternoon</h1>

          <div className="grid grid-cols-3 gap-4 mt-6">
            <a
              href=""
              className="flex items-center gap-4 bg-white/10 rounded-md overflow-hidden text-xs hover:bg-white/20 transition-colors group group"
            >
              <Image
                width={100}
                height={100}
                src="/album.jpeg"
                alt="Capa do album Wasting Light da banda Foo Fighters"
              />
              Wasting Light
              <button className="w-12 h-12 pl-1 text-black flex items-center justify-center bg-green-500 rounded-full ml-auto mr-6 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href=""
              className="flex items-center gap-4 bg-white/10 rounded-md overflow-hidden text-xs hover:bg-white/20 transition-colors group"
            >
              <Image
                width={100}
                height={100}
                src="/album.jpeg"
                alt="Capa do album Wasting Light da banda Foo Fighters"
              />
              Wasting Light
              <button className="w-12 h-12 pl-1 text-black flex items-center justify-center bg-green-500 rounded-full ml-auto mr-6 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href=""
              className="flex items-center gap-4 bg-white/10 rounded-md overflow-hidden text-xs hover:bg-white/20 transition-colors group"
            >
              <Image
                width={100}
                height={100}
                src="/album.jpeg"
                alt="Capa do album Wasting Light da banda Foo Fighters"
              />
              Wasting Light
              <button className="w-12 h-12 pl-1 text-black flex items-center justify-center bg-green-500 rounded-full ml-auto mr-6 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href=""
              className="flex items-center gap-4 bg-white/10 rounded-md overflow-hidden text-xs hover:bg-white/20 transition-colors group"
            >
              <Image
                width={100}
                height={100}
                src="/album.jpeg"
                alt="Capa do album Wasting Light da banda Foo Fighters"
              />
              Wasting Light
              <button className="w-12 h-12 pl-1 text-black flex items-center justify-center bg-green-500 rounded-full ml-auto mr-6 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href=""
              className="flex items-center gap-4 bg-white/10 rounded-md overflow-hidden text-xs hover:bg-white/20 transition-colors group"
            >
              <Image
                width={100}
                height={100}
                src="/album.jpeg"
                alt="Capa do album Wasting Light da banda Foo Fighters"
              />
              Wasting Light
              <button className="w-12 h-12 pl-1 text-black flex items-center justify-center bg-green-500 rounded-full ml-auto mr-6 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a
              href=""
              className="flex items-center gap-4 bg-white/10 rounded-md overflow-hidden text-xs hover:bg-white/20 transition-colors group"
            >
              <Image
                width={100}
                height={100}
                src="/album.jpeg"
                alt="Capa do album Wasting Light da banda Foo Fighters"
              />
              Wasting Light
              <button className="w-12 h-12 pl-1 text-black flex items-center justify-center bg-green-500 rounded-full ml-auto mr-6 invisible group-hover:visible">
                <Play />
              </button>
            </a>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
        footer
      </footer>
    </div>
  );
}
