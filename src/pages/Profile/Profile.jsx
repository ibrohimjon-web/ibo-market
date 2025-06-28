import React from 'react';
import './Profile.css';

const Profile = () => {
  const user = {
    name: 'Ibrohimjon',
    email: 'ibrohimjon@example.com',
    avatar:
      'https://media.istockphoto.com/id/1332100919/vector/man-icon-black-icon-person-symbol.jpg?s=612x612&w=0&k=20&c=AVVJkvxQQCuBhawHrUhDRTCeNQ3Jgt0K1tXjJsFy1eg=',
  };

  const handleLogout = () => {
    alert('Chiqildi!');
    // localStorage.clear() yoki navigatsiya qo‘shiladi
  };

  return (
    <div className='profile-container'>
      <div className='profile-card'>
        <img src={user.avatar} alt='Avatar' className='profile-avatar' />
        <h2 className='profile-name'>{user.name}</h2>
        <p className='profile-email'>{user.email}</p>
        <button className='logout-btn' onClick={handleLogout}>
          Chiqish
        </button>
      </div>
    </div>
  );
};

export default Profile;
