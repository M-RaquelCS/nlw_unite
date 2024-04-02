import UniteIcon from '../assets/nlw-unite-icon.svg'

export function Header(){
  return(
    <div className='flex items-center gap-5 py-2'>

      <img src={UniteIcon} alt="" />

      <nav className='flex items-center gap-5'>
        <a href="" className='font-medium text-sm text-zinc-400'>Eventos</a>
        <a href="" className='font-medium text-sm'>Participantes</a>
      </nav>

    </div>
  )
}