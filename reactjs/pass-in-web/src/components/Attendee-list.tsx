import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, MoreHorizontal, Search } from "lucide-react";
import { IconButton } from "./icon-button";
import { Table } from "./table/table";
import { TableHeader } from "./table/table-header";
import { TableCell } from "./table/table-cell";
import { TableRow } from "./table/table-row";
import { ChangeEvent, useState } from "react";

export function AttendeeList(){
  const [search, setSearch] = useState('')

  function onSearchInputChanged(event: ChangeEvent<HTMLInputElement>){
    console.log(event.target.value);
  }

  return (
    <div className="flex flex-col gap-4">

      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-bold">Participantes</h1>

        <div className="w-[280px] px-3 py-1.5 border border-white/10 rounded-[10px] flex items-center gap-3">
          <Search className="size-4 text-[#9FF9CC]" />
          <input onChange={onSearchInputChanged} className="bg-transparent flex-1 outline-none border-0 p-0 text-sm" placeholder="Buscar participante..." />
        </div>
      </div>

      <Table>
        <thead>
          <tr className="border-b border-white/10">
            <TableHeader style={{width: 64}}>
              <input type="checkbox" className="size-4 bg-black/20 rounded border border-white/10"/>
            </TableHeader>
            <TableHeader>Código</TableHeader>
            <TableHeader>Participantes</TableHeader>
            <TableHeader>Data de inscrição</TableHeader >
            <TableHeader>Data do check-in</TableHeader>
            <TableHeader style={{width: 64}}></TableHeader>
          </tr>
        </thead>

        <tbody>
          {Array.from({length: 8}).map((_, index) => {
            return(
              <TableRow key={index} className="border-b border-white/10 hover:bg-white/5">
                <TableCell>
                  <input type="checkbox" className="size-4 bg-black/20 rounded border border-white/10" />
                </TableCell>
                <TableCell>12345</TableCell>
                <TableCell>
                  <div className="flex flex-col gap-1">
                    <span className="font-semibold text-white">Maria Raquel Cordeiro Santos</span>
                    <span>M-Raquel@outlook.com.br</span>
                  </div>
                </TableCell>
                <TableCell>7 dias atrás</TableCell>
                <TableCell>3 dias atrás</TableCell>
                <TableCell>
                  <IconButton transparent >
                    <MoreHorizontal className="size-4" />
                  </IconButton>
                </TableCell>
              </TableRow>
            )
          })}
        </tbody>

        <tfoot>
          <tr>
            <TableCell colSpan={3}>Mostrando 10 de 228 itens</TableCell>
            <TableCell className="text-right" colSpan={3}>
              <div className="inline-flex gap-8 items-center">
                <span>Página 1 de 23</span>

                <div className="flex gap-1.5">
                  <IconButton className="bg-white/10">
                    <ChevronsLeft className="size-4" />
                  </IconButton>
                  <IconButton className="bg-white/10">
                    <ChevronLeft className="size-4" />
                  </IconButton>
                  <IconButton className="bg-white/20">
                    <ChevronRight className="size-4" />
                  </IconButton>
                  <IconButton className="bg-white/20">
                    <ChevronsRight className="size-4" />
                  </IconButton>
                </div>

              </div>
            </TableCell>
          </tr>
        </tfoot>
      </Table>
    </div>
  )
}