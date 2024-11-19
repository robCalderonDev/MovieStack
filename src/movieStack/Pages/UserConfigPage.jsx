import React from "react";
import UserConfigForm from "../forms/UserConfigForm";

const UserConfigPage = () => {
  return (
    <div className="w-full flex justify-center ">
      <div className="w-2/3  p-2">
        <h1 className="text-3xl font-bold mt-16 lg:mx-0 mx-5 text-gray-600 text-left">Cuenta | Robert Calderon</h1>
        <hr className="border-1 border-blue-600 my-2" />
        <UserConfigForm />
      </div>
    </div>
  );
};

export default UserConfigPage;
