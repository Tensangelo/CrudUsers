import { MouseEventHandler, ReactNode } from 'react';

type ModalProps = {
    isModalOpen: boolean;
    onClick: MouseEventHandler<HTMLButtonElement>;
    children?: ReactNode;
}

const Modal = (props: ModalProps) => {
    const {
        isModalOpen,
        onClick,
        children,
    } = props;

    return (
        <>
            {isModalOpen && (
                <div className="fixed inset-0 z-50 overflow-auto bg-gray-500 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-[#2d2755] p-10 pt-2 pb-0 rounded-md min-w-[60rem]">
                        <div className="flex items-center justify-end">
                            <button type="button" onClick={onClick} className="mt-4 bg-lime-600 hover:bg-lime-700 text-white py-2 px-4 rounded">
                                X
                            </button>
                        </div>
                        {children}
                        <br />
                    </div>
                </div>
            )}
        </>
    )
}

export default Modal;