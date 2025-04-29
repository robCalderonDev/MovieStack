import React, { useState } from "react";

const LoginForm = ({ OnLogin }) => {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const onChangeCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className=" mt-4">
      <div className="lg:w-1/2 w-9/12  mx-auto  ">
        <h1 className="text-xs text-slate-500">Correo</h1>

        <input
          className="w-full h-8 mt-1
            bg-slate-100
              outline-none
               focus:border-blue-700  focus:outline-none focus:border-2  "
          type="email"
          onChange={(e) => setMail(e.target.value)}
        />

        <h1 className="text-xs mt-5 text-slate-500">Contraseña</h1>
        <input
          className="w-full h-8 mt-1
            bg-slate-100
              outline-none
               focus:border-blue-700  focus:outline-none justify-between focus:border-2  "
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="w-full mt-1 flex  justify-around">
          <div className="flex lg:mr-0 mr-10 " onClick={onChangeCheckbox}>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={onChangeCheckbox}
            />
            <p className="text-slate-400  hover:text-slate-500 pt-2.5 lg:pt-1   ml-1  text-xs">
              Recuerdame
            </p>
          </div>
          <p className=" text-xs  text-slate-400 pt-1 hover:text-slate-500">
            Olvidaste la contraseña?
          </p>
        </div>
      </div>
      <div className=" mx-auto text-center mt-5">
        <button
          className="w-[50%] h-11 rounded  bg-blue-700 text-white hover:bg-blue-600"
          onClick={()=>OnLogin(mail, password)}
        >
          Acceder
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
