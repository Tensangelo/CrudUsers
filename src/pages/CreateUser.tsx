import React from "react";
import FormCreate from "@/components/users/Create";

const CreateUser = () => {
    return (
        <section className='mt-14 h-[85.5vh]'>
            <article className="w-full">
                <p className="text-center font-bold my-6 text-3xl text-white">Formulario creacion de usuarios</p>
            </article>
            <div className="bg-white w-[50%] h-[1px] m-auto my-8 " />
            <FormCreate />
        </section>
    )
}

export default CreateUser;