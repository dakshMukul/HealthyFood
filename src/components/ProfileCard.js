import React from "react";

const ProfileCard = () => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg cursor-pointer">
      <img className="w-full" src="../img/logo.png" alt="Profile" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">name</div>
      </div>
    </div>
  );
};

export default ProfileCard;
