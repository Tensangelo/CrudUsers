import { useState, useEffect } from 'react';


type UserProps = {
    idUser: string;
}

interface DataUser {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
    dateOfBirth: string;
}

const ViewUser = (props: UserProps) => {
    const Api = process.env.NEXT_PUBLIC_API;
    const token = process.env.NEXT_PUBLIC_TOKEN;

    const { idUser } = props;
    const [ dataUser, setDataUser ] = useState<DataUser>([] as any);
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(() => {
        const getUser = async() => {
            const res = await fetch(`${Api}/${idUser}`, {
                "method": 'GET',
                "headers": {
                    "app-id": `${token}`
                }
            })

            const data = await res.json();
            setDataUser(data);
            setIsLoading(false);
        }

        getUser()
    },[Api, idUser, token])

    const {
        id,
        firstName,
        lastName,
        email,
        gender,
        dateOfBirth
    } = dataUser;

    const date = new Date(dateOfBirth)

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const legibleDate = `${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}-${year}`;

    let genderSpanish;

    if (gender == 'male') {
        genderSpanish = 'Hombre'
    } else if (gender === 'female') {
        genderSpanish = 'Mujer'
    } else if (gender === 'other') {
        genderSpanish = 'otro'
    } else {
        genderSpanish = 'No registrado'
    }

    return (
        <>
            {!isLoading ? (
                <>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2 text-white">
                            N°. Id usuario
                        </label>
                        <input
                            className="shadow text-white bg-[#4b418d] appearance-none border border-white rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            value={id}
                            readOnly
                        />
                    </div>
                    <div className='w-full flex justify-between'>
                        <div className="mb-4 w-[48%]">
                            <label className="block text-sm font-bold mb-2 text-white">
                                Nombre
                            </label>
                            <input
                                className="shadow text-white bg-[#4b418d] appearance-none border border-white rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                value={firstName}
                                readOnly
                            />
                        </div>
                        <div className="mb-4 w-[48%]">
                            <label className="block text-sm font-bold mb-2 text-white">
                                Apellido
                            </label>
                            <input
                                className="shadow text-white bg-[#4b418d] appearance-none border border-white rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                value={lastName}
                                readOnly
                            />
                        </div>
                    </div>
                    <div className='w-full flex justify-between'>
                        <div className="mb-4 w-[48%]">
                            <label className="block text-sm font-bold mb-2 text-white">
                                Genero
                            </label>
                            <input
                                className="shadow text-white bg-[#4b418d] appearance-none border border-white rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                value={genderSpanish}
                                readOnly
                            />
                        </div>
                        <div className="mb-4 w-[48%]">
                            <label className="block text-sm font-bold mb-2 text-white">
                                Email
                            </label>
                            <input
                                className="shadow text-white bg-[#4b418d] appearance-none border border-white rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                value={email}
                                readOnly
                            />
                        </div>
                    </div>
                    <div className="mb-4 w-[48%]">
                        <label className="block text-sm font-bold mb-2 text-white">
                            Año de nacimiento
                        </label>
                        <input
                            className="shadow text-white bg-[#4b418d] appearance-none border border-white rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                            type="text"
                            value={legibleDate}
                            readOnly
                        />
                    </div>
                </>
            ) : <p>Loading...</p>}
        </>
    )
}

export default ViewUser;