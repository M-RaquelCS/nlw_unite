import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, MoreHorizontal, Search } from "lucide-react";

export function AttendeeList(){
  return (
    <div className="flex flex-col gap-4">

      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-bold">Participantes</h1>

        <div className="w-[280px] px-3 py-1.5 border border-white/10 rounded-[10px] flex items-center gap-3">
          <Search className="size-4 text-[#9FF9CC]" />
          <input className="bg-transparent flex-1 outline-none border-0 p-0 text-sm" placeholder="Buscar participante..." />
        </div>
      </div>

      <div className="border border-white/10 rounded-[10px]">

        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="w-16 py-3 px-4 text-sm font-semibold text-left">
                <input type="checkbox" className="size-4 bg-black/20 rounded border border-white/10"/>
                </th>
              <th className="py-3 px-4 text-sm font-semibold text-left">Código</th>
              <th className="py-3 px-4 text-sm font-semibold text-left">Participantes</th>
              <th className="py-3 px-4 text-sm font-semibold text-left">Data de inscrição</th>
              <th className="py-3 px-4 text-sm font-semibold text-left">Data do check-in</th>
              <th className="w-16 py-3 px-4 text-sm font-semibold text-left"></th>
            </tr>
          </thead>

          <tbody>
            {Array.from({length: 8}).map((_, index) => {
              return(
                <tr key={index} className="border-b border-white/10 hover:bg-white/5">
                  <td className="py-3 px-4 text-sm font-semibold text-zinc-300">
                    <input type="checkbox" className="size-4 bg-black/20 rounded border border-white/10 accent-orange-400" />
                    </td>
                  <td className="py-3 px-4 text-sm font-semibold text-zinc-300">12345</td>
                  <td className="py-3 px-4 text-sm font-semibold text-zinc-300">
                    <div className="flex flex-col gap-1">
                      <span className="font-semibold text-white">Maria Raquel Cordeiro Santos</span>
                      <span>M-Raquel@outlook.com.br</span>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-sm font-semibold text-zinc-300">7 dias atrás</td>
                  <td className="py-3 px-4 text-sm font-semibold text-zinc-300">3 dias atrás</td>
                  <td className="py-3 px-4 text-sm font-semibold text-zinc-300">
                    <button className="bg-black/20 border border-white/10 rounded-[10px] p-1.5 ">
                      <MoreHorizontal className="size-4" />
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>

          <tfoot>
            <tr>
              <td className="py-3 px-4 text-sm text-zinc-300" colSpan={3}>Mostrando 10 de 228 itens</td>
              <td className="py-3 px-4 text-sm text-zinc-300 text-right" colSpan={3}>
                <div className="inline-flex gap-8 items-center">
                  <span>Página 1 de 23</span>

                  <div className="flex gap-1.5">
                    <button className="bg-white/10 border border-white/10 rounded-[10px] p-1.5 ">
                      <ChevronsLeft className="size-4" />
                    </button>
                    <button className="bg-white/10 border border-white/10 rounded-[10px] p-1.5 ">
                      <ChevronLeft className="size-4" />
                    </button>
                    <button className="bg-white/20 border border-white/10 rounded-[10px] p-1.5 ">
                      <ChevronRight className="size-4" />
                    </button>
                    <button className="bg-white/20 border border-white/10 rounded-[10px] p-1.5 ">
                      <ChevronsRight className="size-4" />
                    </button>
                  </div>

                </div>
              </td>
            </tr>
          </tfoot>

        </table>

      </div>
      
    </div>
  )
}