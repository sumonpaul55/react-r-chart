import PropTypes from 'prop-types';

function User({user}) {
    const { name, email, phone} = user;
  return (
    <div className='border-gray-200 rounded-md shadow p-5'>
        <h2>{name}</h2>
        <h4 className='py-3'>{email}</h4>
        <small>{phone}</small>
    </div>
  )
}
User.propTypes = {
    user: PropTypes.object.isRequired
}

export default User