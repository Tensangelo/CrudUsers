import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';

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

const UpdateUser = (props: UserProps) => {
    const Api = process.env.NEXT_PUBLIC_API;
    const token = process.env.NEXT_PUBLIC_TOKEN;

    const { idUser } = props;
    const [ dataUser, setDataUser ] = useState<DataUser>([] as any);
    const [ isLoading, setIsLoading ] = useState(true);

    const { register, handleSubmit, formState: { errors } } = useForm<DataUser>();

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

    const legibleDate = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;

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

    const [ status, setStatus ] = useState<number>();

    const onSubmit = handleSubmit(async(data) => {
        const response = await fetch(`${Api}/${idUser}`,{
            'method': 'PUT',
            'headers': {
                'Content-Type': 'application/json',
                'app-id': `${token}`,
            },
            'body': JSON.stringify(data),
        })

        setStatus(response.status)
    });

    return (
        <>
            {status !== undefined && (
                <div className=' flex justify-start max-w-[95%] my-2'>
                    {status === 200 ? (
                        <div className="bg-green-200 p-4 rounded-md mb-4">
                            <p>Usuario modificado exitosamente</p>
                        </div>
                    ) : (
                        <div className="bg-red-200 p-4 rounded-md mb-4">
                            <p>Error al modificar usuario, por favor intenta nuevamente <strong>Si el error persiste comuníquese con administración</strong></p>
                        </div>
                    )}
                </div>
            )}
            {!isLoading ? (
                <form onSubmit={onSubmit}>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2 text-white">
                            N°. Id usuario
                        </label>
                        <input
                            className="shadow bg-[#4b418d] appearance-none border border-white rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
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
                                className="shadow bg-[#4b418d] appearance-none border border-white rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                value={firstName}
                                {...register('firstName', {
                                    minLength: {
                                        value: 3,
                                        message: 'Minimo 3 caracteres'
                                    },
                                    required: {
                                        value: true,
                                        message: 'Este campo es obligatorio no puede dejarlo vacio'
                                    }
                                })}
                            />
                            {errors.firstName && <p className='text-red-500 text-sm' >{errors.firstName?.message}</p>}
                        </div>
                        <div className="mb-4 w-[48%]">
                            <label className="block text-sm font-bold mb-2 text-white">
                                Apellido
                            </label>
                            <input
                                className="shadow bg-[#4b418d] appearance-none border border-white rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                defaultValue={lastName}
                                {...register('lastName', {
                                    minLength: {
                                        value: 3,
                                        message: 'Minimo 3 caracteres'
                                    },
                                    required: {
                                        value: true,
                                        message: 'Este campo es obligatorio no puede dejarlo vacio'
                                    }
                                })}
                            />
                            {errors.lastName && <p className='text-red-500 text-sm' >{errors.lastName?.message}</p>}
                        </div>
                    </div>
                    <div className='w-full flex justify-between'>
                        <div className="mb-4 w-[48%]">
                            <label className="block text-sm font-bold mb-2 text-white">
                                Genero
                            </label>
                            <input
                                className="shadow bg-[#4b418d] appearance-none border border-white rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                value={genderSpanish}
                                {...register('gender', {
                                    required: {
                                        value: true,
                                        message: 'Debe seleccionar genero'
                                    }
                                })}
                            />
                            {errors.gender && <p className='text-red-500 text-sm' >{errors.gender?.message}</p>}
                        </div>
                        <div className="mb-4 w-[48%]">
                            <label className="block text-sm font-bold mb-2 text-white">
                                Email
                            </label>
                            <input
                                className="shadow bg-[#4b418d] appearance-none border border-white rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                                type="text"
                                value={email}
                                {...register('email', {
                                    required: {
                                        value: true,
                                        message: 'El email es obligatorio'
                                    }
                                })}
                            />
                            {errors.email && <p className='text-red-500 text-sm' >{errors.email?.message}</p>}
                        </div>
                    </div>
                    <div className="mb-4 w-[48%]">
                        <label className="block text-sm font-bold mb-2 text-white">
                            Año de nacimiento
                        </label>
                        <input
                            className="shadow bg-[#4b418d] appearance-none border border-white rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                            type="date"
                            defaultValue={legibleDate}
                            {...register('dateOfBirth', {
                                required: {
                                    value: true,
                                    message: 'Fecha de nacimiento es obligatorio'
                                }
                            })}
                        />
                        {errors.dateOfBirth && <p className='text-red-500 text-sm' >{errors.dateOfBirth?.message}</p>}
                    </div>
                    <div className="flex items-center justify-end">
                        <button
                            className="bg-lime-600 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Guardar
                        </button>
                    </div>
                </form>
            ) : <p>Loading...</p>}
        </>
    )
}

export default UpdateUser;