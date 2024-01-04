import { useState, useEffect } from "react";
import TableUsers from "../tables/TableUser";

const ListUser = () => {
    const Api = process.env.NEXT_PUBLIC_API;
    const token = process.env.NEXT_PUBLIC_TOKEN;

    const [ loading, setLoading ] = useState(true)
    const [ items, setItems ] = useState<null | { data: any }>([] as any);

    useEffect(() => {
        const getUsers = async() => {
            const res = await fetch(`${Api}`, {
                "method": "GET",
                "headers": {
                    "app-id": `${token}`,
                }
            })

            const data = await res.json();
            setItems(data);
            setLoading(false);
        }

        getUsers();
    }, [Api, token])

    return (
        <>
            <TableUsers
                isLoading={loading}
                dataUser={items?.data}
            />
        </>
    )
}

export default ListUser;