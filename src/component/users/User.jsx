import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';

function User({user}) {
    const navigate = useNavigate();
 
    const {id, name, email, phone} = user;
    const handleDetail = ()=>{
        navigate(`/user/${id}`)
    }
  return (
    <div className='border-gray-200 rounded-md shadow p-5'>
        <h2>{name}</h2>
        <h4 className='py-3'>{email}</h4>
        <small>{phone}</small>
        <Link to={`/user/${id}`} className='w-full bg-indigo-500 text-white block text-center rounded-full  mt-4'>View Details</Link>
        <button onClick={handleDetail} className='mt-3 bg-red-500 text-white py-2 rounded-full text-center w-full'>Click to See Details</button>
    </div>
  )
}
User.propTypes = {
    user: PropTypes.object.isRequired
}

export default User