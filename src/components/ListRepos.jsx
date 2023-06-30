// React
import { Fragment } from 'react'

// eslint-disable-next-line react/prop-types
const ListRepos = ({ repoURL, title, description, homepage, image }) => {
  return (
    <Fragment>
      <strong className='text-repo-color text-2xl'>
        <a href={repoURL} target='_blank' rel='noopener noreferrer' >
          {title}
        </a>
      </strong>
      <p className='text-secondary text-lg italic'>{description}</p>
      {homepage && typeof homepage === 'string' ? (
        <a href={homepage} target='_blank' rel='noopener noreferrer'>
          <img src={image} alt='' className='w-8 h-8 mt-4' />
        </a>
      ) : (
        <img src={image} alt='' className='w-8 h-8 mt-4' />
      )}
      <hr />
    </Fragment>
  )
}

export default ListRepos