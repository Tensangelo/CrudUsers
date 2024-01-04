import {useState} from 'react';

type UserProps = {
    idUser: string;
}

const DeleteUser = (props: UserProps) => {
    const Api = process.env.NEXT_PUBLIC_API;
    const token = process.env.NEXT_PUBLIC_TOKEN;

    const { idUser } = props;
    const [ status, setStatus ] = useState<number>();

    const onDeleteUser = async() => {
        const response = await fetch(`${Api}/${idUser}`, {
            'method': 'DELETE',
            'headers': {
                'Content-Type': 'application/json',
                'app-id': `${token}`,
            },
        })

        setStatus(response?.status);
    }

    return (
        <>
            <div className="bg-red-200 p-4 my-4 rounded-md mb-4">
                <p>¿Está seguro de eliminar este usuario? <strong>Estos cambios son permanentes y no se podrán recuperar.</strong></p>
            </div>
            {status !== undefined && (
                <div className=' flex justify-start max-w-[95%]'>
                    {status === 200 ? (
                        <div className="bg-green-200 p-4 rounded-md mb-4">
                            <p>Usuario Eliminado exitosamente</p>
                        </div>
                    ) : (
                        <div className="bg-red-200 p-4 rounded-md mb-4">
                            <p>Error al eliminar usuario, por favor intenta nuevamente <strong>Si el error persiste actulice la pagina</strong></p>
                        </div>
                    )}
                </div>
            )}
            <div className="flex items-center justify-end">
                <button
                    className="bg-lime-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                    onClick={onDeleteUser}
                >
                    Eliminar
                </button>
            </div>
        </>
    )
}

export default DeleteUser