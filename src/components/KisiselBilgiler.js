import React from 'react';
import profilePic from '../img/logo.jpg';

const KisiselBilgiler = () => {
  return (
    <div className="personal-info">
      <img src={profilePic} alt="Melike Mavili" className="profile-img" />
      <h1>Melike Mavili</h1>
      <p><b>İletişim Bilgileri:</b></p>
      <p>Email: melike.mavili06@gmail.com</p>
    </div>
  );
};

export default KisiselBilgiler;
