import React, { useState } from 'react';

const Profile = ({ user }) => {
  const [name, setName] = useState(user ? user.name : '');
  const [email, setEmail] = useState(user ? user.email : '');
  const [phone, setPhone] = useState(user ? user.phone : '');
  const [district, setDistrict] = useState(user ? user.district : '');
  const [school, setSchool] = useState(user ? user.school : '');
  const [className, setClassName] = useState(user ? user.className : '');
  const [image, setImage] = useState(user ? user.avatar : null);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className="container mx-auto p-4 my-8">
      <div className="bg-yellow-200 p-8 rounded-lg shadow-md max-w-md mx-auto">
        <h2 className="text-3xl font-bold mb-8">Profile</h2>
        <div className="flex flex-col items-center">
          <div
            className="relative w-32 h-32 rounded-full overflow-hidden bg-gray-200 hover:bg-gray-300 cursor-pointer"
            onClick={() => document.getElementById('fileInput').click()}
          >
            {image ? (
              <img src={image} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-500">No Image</div>
            )}
            <input
              type="file"
              id="fileInput"
              onChange={handleImageChange}
              className="hidden"
            />
          </div>
          <h3 className="text-xl font-bold mt-4">{name}</h3>
          <p className="text-gray-700 mt-2">{email}</p>
          <p className="text-gray-700 mt-2">{phone}</p>
          <p className="text-gray-700 mt-2">{district}</p>
          <p className="text-gray-700 mt-2">{school}</p>
          <p className="text-gray-700 mt-2">{className}</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
