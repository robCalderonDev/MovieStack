import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ValidationSchemaUser } from "../../schemas/validationsForm";
import { ClipLoader } from "react-spinners";
const CreateUserForm = ({ OnGoHome }) => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(ValidationSchemaUser),
  });
  const onSubmitHandler = (data) => {
    console.log({ data });
    reset();
    setLoading(true);
    OnGoHome();
  };

  return (
    <form className=" my-4" onSubmit={handleSubmit(onSubmitHandler)}>
      <div className="lg:w-1/2 w-8/12  mx-auto  ">
        <h1 className="text-xs text-slate-500">Nombre</h1>

        <input
          {...register("nombre")}
          placeholder="Confusio flores"
          className="w-full h-8 mt-1 placeholder:text-xs pl-2
        bg-slate-100
          outline-none
           focus:border-blue-700  focus:outline-none focus:border-2  "
          type="text"
        />
        <p className="text-xs text-rose-600">{errors.nombre?.message}</p>
        <h1 className="text-xs mt-5 text-slate-500">Correo</h1>

        <input
          placeholder="ejemplo@correo.com"
          className="w-full h-8 mt-1 placeholder:text-xs pl-2
        bg-slate-100
          outline-none
           focus:border-blue-700  focus:outline-none focus:border-2  "
          type="email"
          {...register("email")}
        />
        <p className="text-xs text-rose-600">{errors.email?.message}</p>
        <h1 className="text-xs mt-5 text-slate-500">Contraseña</h1>
        <input
          {...register("password")}
          placeholder="Debe ser de almenos 6 carácteres"
          className="w-full h-8 mt-1 placeholder:text-xs pl-2
        bg-slate-100
          outline-none
           focus:border-blue-700  focus:outline-none justify-between focus:border-2  "
          type="password"
        />
        <p className="text-xs text-rose-600">{errors.password?.message}</p>
        <h1 className="text-xs mt-5 text-slate-500">Repetir Contraseña</h1>
        <input
          {...register("password2")}
          className="w-full h-8 mt-1 placeholder:text-xs pl-2
        bg-slate-100
          outline-none
           focus:border-blue-700  focus:outline-none justify-between focus:border-2  "
          type="password"
        />
        <p className="text-xs text-rose-600">{errors.password2?.message}</p>
        <div className="w-full mt-1 flex  justify-around">
          <div className="flex lg:mr-0 mr-10 ">
            <input type="checkbox" {...register("terms")} />
            <p className="text-slate-400  hover:text-slate-500 pt-2.5 lg:pt-1   ml-1  text-xs">
              Acepto los terminos y condiciones
            </p>
          </div>
        </div>
        <p className="text-xs text-rose-600">{errors.terms?.message}</p>
      </div>
      <div className=" mx-auto text-center mt-5">
        {loading ? (
          <ClipLoader
            color={"#1D4ED8"}
            loading={loading}
            size={30}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (
          <button className="w-[50%] h-11 rounded  bg-blue-700 text-white hover:bg-blue-600">
            Acceder
          </button>
        )}
      </div>
    </form>
  );
};

export default CreateUserForm;
