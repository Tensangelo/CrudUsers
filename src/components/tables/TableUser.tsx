import { useState } from 'react';

import Modal from '@/components/modal/ModalBase';
import ViewUser from '@/components/users/View';
import UpdateUser from '@/components/users/Update';
import DeleteUser from '@/components/users/Delete';

type TableUsersProps = {
    isLoading: boolean;
    dataUser: [];
}

const TableUsers = (props: TableUsersProps) => {
    const {
        isLoading,
        dataUser,
    } = props;

    const [isModalOpen, setModalOpen] = useState(false);
    const [typeModal, setTypeModal] = useState(0);
    const [selectedUserId, setSelectedUserId] = useState(String);

    const openModal = (userId: string, typeModalId: number) => {
        setSelectedUserId(userId)
        setTypeModal(typeModalId);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <>
            <div className="text-center max-h-[30rem] overflow-y-auto m-auto w-[65rem]">
                <table className="w-full m-auto bg-[#2b2555b5] border">
                    <thead className="bg-[#077282] text-white">
                        <tr className="border-b">
                            <th className="border-b p-1">Id Usuario</th>
                            <th className="border-b p-2">Nombre</th>
                            <th className="border-b p-2">Apellido</th>
                            <th className="border-b p-2">Acciones</th>
                        </tr>
                    </thead>
                    <tbody className='text-white'>
                        {!isLoading ? (
                            <>
                                {dataUser.map((dataUsers: any) => {
                                    const { id, firstName, lastName } = dataUsers;

                                    return (
                                        <tr key={id} className="hover:bg-[#2d2755]" >
                                            <td className="border-b p-1">
                                                {id}
                                            </td>
                                            <td className="border-b p-2">
                                                {firstName}
                                            </td>
                                            <td className="border-b p-2">
                                                {lastName}
                                            </td>
                                            <td className="border-b p-2">
                                                <button className='mx-2' type="button" onClick={() => openModal(id, 1)}>
                                                    <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M9 4.45962C9.91153 4.16968 10.9104 4 12 4C16.1819 4 19.028 6.49956 20.7251 8.70433C21.575 9.80853 22 10.3606 22 12C22 13.6394 21.575 14.1915 20.7251 15.2957C19.028 17.5004 16.1819 20 12 20C7.81811 20 4.97196 17.5004 3.27489 15.2957C2.42496 14.1915 2 13.6394 2 12C2 10.3606 2.42496 9.80853 3.27489 8.70433C3.75612 8.07914 4.32973 7.43025 5 6.82137" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
                                                        <path d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="white" stroke-width="1.5"/>
                                                    </svg>
                                                </button>
                                                <button className='mx-4' type="button" onClick={() => openModal(id, 2)}>
                                                    <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                        <path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                                    </svg>
                                                </button>
                                                <button className='mx-2' type="button" onClick={() => openModal(id, 3)}>
                                                    <svg fill="#ffffff" width="25px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5.755,20.283,4,8H20L18.245,20.283A2,2,0,0,1,16.265,22H7.735A2,2,0,0,1,5.755,20.283ZM21,4H16V3a1,1,0,0,0-1-1H9A1,1,0,0,0,8,3V4H3A1,1,0,0,0,3,6H21a1,1,0,0,0,0-2Z"/></svg>
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </>
                        ) : (
                            <tr>
                                <td className="border-b p-2" colSpan={4}>
                                    Loading...
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <Modal
                isModalOpen={isModalOpen}
                onClick={closeModal}
            >
                {typeModal === 1 && (
                    <ViewUser idUser={selectedUserId} />
                )}
                {typeModal === 2 && (
                    <UpdateUser idUser={selectedUserId} />
                )}
                {typeModal === 3 && (
                    <DeleteUser idUser={selectedUserId} />
                )}
            </Modal>
        </>
    )
}

export default TableUsers;