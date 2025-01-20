import React from "react";

function HomeSectionCard() {
  return (
    <div className="cursor-pointer mt-4 flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-auto sm:mx-3">
      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-cover object-top w-full h-full"
          src="https://static.zara.net/assets/public/368b/a4ef/8f8147439afc/99144763aa6c/01887455500-p/01887455500-p.jpg?ts=1735554270224&w=563"
          alt="Men t-shirt"
        />
      </div>
      <div className="p-4 ">
        <h3 className="text-lg font-medium text-gray-900">Title</h3>
        <p className="mt-2 text-sm text-gray-500">Men t-shirt</p>
      </div>
    </div>
  );
}

export default HomeSectionCard;
