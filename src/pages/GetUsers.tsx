import React from "react";
import GetAllUsers from "@/components/users/Get";

const GetUsers = () => {
    return (
        <section className='mt-14 h-[85.5vh]'>
            <article className="w-full">
                <p className="text-center font-bold my-8 text-3xl text-white">Tabla de usuarios</p>
            </article>
            <div className="bg-white w-[50%] h-[1px] m-auto my-8 " />
            <GetAllUsers />
        </section>
    )
}

export default GetUsers;