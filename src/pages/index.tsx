import Image from "next/image";
import Link from "next/link";

import IconGithub from '../../public/icons/github.png'
import IconUser from '../../public/icons/users.png';

const Home = () => {
    return (
        <section className="h-[82.9vh]">
            <article className='text-white mt-20 text-center'>
                <h1 className="my-2 text-8xl">Bienvenido</h1>
                <p className="mt-10 text-3xl">Desarollo de prueba crud de usuarios</p>
            </article>
            <article className='text-white text-center mt-[20rem] m-auto w-[40rem]'>
                <p className="text-2xl font-bold">Información del desarrollo:</p>
                <div className="flex justify-around items-center mt-16">
                    <Link
                        className="rounded-lg p-2 flex justify-center items-center w-48 bg-white text-[#445962] transition ease-in-out hover:scale-105 hover:bg-[#ffffffc9]"
                        href="/"
                        target='_blank'
                    >
                        <Image
                            src={IconGithub}
                            width={50}
                            height={50}
                            alt="icono github"
                        />
                        <p className="ml-4 text-xl font-bold">Github</p>
                    </Link>
                    <Link
                        className="rounded-lg p-2 flex justify-center items-center w-96 bg-white text-[#445962] transition ease-in-out hover:scale-105 hover:bg-[#ffffffc9]"
                        href='https://portfolio-ang.vercel.app/'
                        target='_blank'
                    >
                        <Image
                            src={IconUser}
                            width={50}
                            height={50}
                            alt="icono github"
                        />
                        <p className="ml-4 text-xl font-bold">
                            Mas sobre el desarrollador
                        </p>
                    </Link>
                </div>
            </article>
        </section>
    )
}

export default Home;