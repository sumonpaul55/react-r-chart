/* eslint-disable react/no-unescaped-entities */

import { Link, useRouteError } from 'react-router-dom'

function NotFound() {

    const error = useRouteError();
    
    return (
    <div className='text-center mt-20'>
        <h1 className='text-4xl'>Opps</h1>
        <p>{`${error.status} ${error.statusText}`}</p>
        {/* or */}
        <p>{error.status || error.statusText}</p>

        <Link to="/">go home</Link>
    </div>
  )
}

export default NotFound