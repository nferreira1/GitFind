// React
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <main className='grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8 h-screen w-screen'>
      <div className='text-center'>
        <p className='text-base font-semibold text-white'>404</p>
        <h1 className='mt-4 text-3xl font-bold tracking-tight text-gray-300 sm:text-5xl'>Page not found</h1>
        <p className='mt-6 text-base leading-7 text-gray-300'>Desculpe, não encontramos a página que você está procurando.</p>
        <div className='mt-10 flex items-center justify-center gap-x-6'>
          <Link
            to='/'
            className='rounded-md bg-gray-300 px-3.5 py-2.5 text-sm font-semibold text-primary shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700'
          >
            Voltar a página inicial
          </Link>
        </div>
      </div>
    </main>
  )
}

export default NotFound

