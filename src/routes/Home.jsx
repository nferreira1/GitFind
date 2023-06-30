// React
import { Fragment, useEffect, useState } from 'react'

// Images
import githubsvg from '../assets/github.svg'
import houseCheck from '../assets/house-check.svg'
import houseDash from '../assets/house-dash.svg'
import portfolio from '../assets/person-workspace.svg'

// Components
import ListRepos from '../components/ListRepos'

const Home = () => {

  // API GitHub
  const [user, setUser] = useState('')
  const [currentUser, setCurrentUser] = useState(null)
  const [repos, setRepos] = useState([])

  const handleGetData = async () => {
    const userData = await fetch(`https://api.github.com/users/${user}`)
    const newUser = await userData.json()

    if (newUser.name) {
      const { avatar_url, name, bio, login, html_url, blog } = newUser
      setCurrentUser({ avatar_url, name, bio, login, html_url, blog })

      const reposData = await fetch(`https://api.github.com/users/${user}/repos`)
      const newRepos = await reposData.json()

      if (newRepos.length) {
        setRepos(newRepos)
      }

      console.log(newRepos)

    }

    console.log(newUser)
  }

  // Pagination
  const [itensPerPage, setItensPerPage] = useState(5)
  const [currentPage, setCurrentPage] = useState(0)

  const pages = Math.ceil(repos.length / itensPerPage)
  const startIndex = currentPage * itensPerPage
  const endIndex = startIndex + itensPerPage
  const currentItens = repos.slice(startIndex, endIndex)

  useEffect(() => {
    setCurrentPage(0)
  }, [itensPerPage])

  return (
    <Fragment>
      <header className='flex justify-around max-sm:justify-between'>
        <img src={githubsvg} className='mt-3 max-sm:ml-3' width='32' height='32' />
        <h1 className='flex items-center text-xl font-semibold text-white select-none max-sm:pr-3'>GitFind</h1>
        <div></div>
      </header>

      <div className='flex items-start justify-end'>
        <img src={githubsvg} className='h-[90vh] absolute -translate-x-[50%] translate-y-[5%] opacity-30 left-0 max-lg:hidden' />

        <div className='text-white w-3/5 m-12 max-lg:w-screen max-sm:m-8 flex flex-col'>

          <div className='flex justify-between mb-16 max-sm:mb-8'>
            <input type='text' name='user' placeholder='@username' className='w-3/4 placeholder:italic placeholder:text-slate-400 block bg-transparent border border-slate-400 rounded-xl p-2 shadow-sm focus:outline-none focus:ring-gray-400 focus:ring-1 sm:text-sm max-sm:w-4/6' value={user} onChange={e => setUser(e.target.value)} />
            <button type='button' onClick={handleGetData} className='w-2/12 bg-transparent border border-slate-400 hover:ring-gray-400 hover:ring-1 rounded-xl shadow-sm max-sm:w-1/4'>Buscar</button>
          </div>

          {currentUser?.name ? (
            <Fragment>
              <div className='flex max-sm:flex-col'>
                <div className='max-sm:flex max-sm:justify-center'>
                  <a href={currentUser.html_url} target='_blank' rel='noopener noreferrer'>
                    <img src={currentUser.avatar_url} alt='' className='w-56 h-56 rounded-[50%] border-solid border-4 border-slate-400 hover:ring-gray-400 hover:ring-1' />
                  </a>
                </div>

                <div className='ml-12 text-secondary max-sm:mt-8 max-sm:ml-0'>
                  <h3 className='text-2xl max-sm:text-xl'>{currentUser.name}</h3>
                  <span className='text-xl max-sm:text-lg'>@{currentUser.login}</span>
                  <p className='text-xl mt-12 max-sm:mt-4 max-sm:text-lg italic'>
                    {currentUser.bio === null ? 'There is no description' : currentUser.bio}
                  </p>
                </div>

                <div className='flex justify-end grow max-sm:justify-start max-sm:mt-4'>
                  {currentUser.blog && typeof currentUser.blog === 'string' ? (
                    <a href={currentUser.blog} target='_blank' rel='noopener noreferrer'>
                      <img src={portfolio} alt='' width='32' height='32' />
                    </a>
                  ) : (
                    null
                  )}
                </div>
              </div>

              <hr />
            </Fragment>
          ) : null}

          {repos?.length ? (
            <div>
              <h4 className='flex justify-center text-2xl mb-4'>Repos</h4>
              {currentItens.map(repo => (
                <ListRepos
                  key={repo.id}
                  repoURL={repo.html_url}
                  title={repo.name}
                  description={repo.description === null ? 'There is no description' : repo.description}
                  homepage={repo.homepage}
                  image={repo.homepage && typeof repo.homepage === 'string' ? houseCheck : houseDash} />
              ))}
            </div>
          ) : null}

          <div className='flex justify-between'>
            <div>
              {Array.from(Array(pages), (_, index) => {
                return (
                  <button
                    key={index}
                    value={index}
                    onClick={e => setCurrentPage(Number(e.target.value))}
                    className='border px-4 py-2 ring-gray-400 bg-transparent'
                    style={index === currentPage ? { backgroundColor: '#999', color: '#1D2128' } : null}
                  >
                    {index + 1}
                  </button>
                )
              })}
            </div>
            {pages > 0 ? (
              <select
                value={itensPerPage}
                onChange={e => setItensPerPage(Number(e.target.value))}
                className='outline-none border border-slate-400 px-4 py-2 bg-transparent '
              >
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
              </select>
            ) : null}

          </div>


        </div>

      </div>

      <footer>
        a
      </footer>
    </Fragment >
  )
}

export default Home