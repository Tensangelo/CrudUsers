'use client';
import { useState, ChangeEvent, FormEvent } from 'react';
import { useForm } from 'react-hook-form';

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    dateOfBirth: string;
    gender: string;
}

const FormCreate = () => {
    const Api = process.env.NEXT_PUBLIC_API;
    const token = process.env.NEXT_PUBLIC_TOKEN;

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const [ status, setStatus ] = useState<number>();

    const onSubmit = handleSubmit( async(data) => {
        const response = await fetch(`${Api}/create`, {
            'method': 'POST',
            'headers': {
                'Content-Type': 'application/json',
                'app-id': `${token}`,
            },
            'body': JSON.stringify(data),
        })

        setStatus(response.status);
    });

    return (
        <>
            {status !== undefined && (
                <div className=' flex justify-end max-w-[95%]'>
                    {status === 200 ? (
                        <div className="bg-green-200 p-4 rounded-md mb-4">
                            <p>Usuario creado exitosamente</p>
                        </div>
                    ) : (
                        <div className="bg-red-200 p-4 rounded-md mb-4">
                            <p>Error al crear usuario, por favor intenta nuevamente <strong>Si el error persiste comuníquese con administración</strong></p>
                        </div>
                    )}
                </div>
            )}
            <div className="w-full max-w-lg m-auto">
                <form
                    className="bg-[#3b3b3bb5] rounded px-8 pt-6 pb-8 mb-4"
                    onSubmit={onSubmit}
                >
                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="nameUser">
                            Nombre
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                            id="nameUser"
                            type="text"
                            placeholder="Nombre de usuario"
                            {...register('firstName', {
                                minLength: {
                                    value: 3,
                                    message: 'Minimo 3 caracteres'
                                },
                                required: {
                                    value: true,
                                    message: 'Este campo es obligatorio'
                                }
                            })}
                        />
                        {errors.firstName && <p className='text-red-500 text-sm' >{errors.firstName?.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="lastNameUser">
                            Apellido
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                            id="lastNameUser"
                            type="text"
                            placeholder="Apellido de usuario"
                            {...register('lastName', {
                                minLength: {
                                    value: 3,
                                    message: 'Minimo 3 caracteres'
                                },
                                required: {
                                    value: true,
                                    message: 'Este campo es obligatorio'
                                }
                            })}
                        />
                        {errors.lastName && <p className='text-red-500 text-sm' >{errors.lastName?.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Email"
                            {...register('email', {
                                required: {
                                    value: true,
                                    message: 'El email es obligatorio'
                                }
                            })}
                        />
                        {errors.email && <p className='text-red-500 text-sm' >{errors.email?.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="dateBorn">
                            Fecha de nacimiento
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                            id="dateBorn"
                            type="date"
                            {...register('dateOfBirth', {
                                required: {
                                    value: true,
                                    message: 'Fecha de nacimiento es obligatorio'
                                }
                            })}
                        />
                        {errors.dateOfBirth && <p className='text-red-500 text-sm' >{errors.dateOfBirth?.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2" htmlFor="gender">
                            Género
                        </label>
                        <select
                            id="gender"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                            {...register('gender', {
                                required: {
                                    value: true,
                                    message: 'Debe seleccionar genero'
                                }
                            })}
                        >
                            <option></option>
                            <option value="male">Hombre</option>
                            <option value="female">Mujer</option>
                            <option value="other">Otro</option>
                        </select>
                        {errors.gender && <p className='text-red-500 text-sm' >{errors.gender?.message}</p>}
                    </div>
                    <div className="flex items-center justify-end">
                        <button
                            className="bg-lime-600 hover:bg-lime-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Crear usuario
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default FormCreate;