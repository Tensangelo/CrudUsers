import React from "react";
// Components
import Navbar from '@/components/header/Navbar';

type Props = {
    children: React.ReactNode;
}

const Layout = ({ children } : Props) => {
    return (
        <section className="bg-[url(https://images.hdqwalls.com/download/a-pink-sunset-4k-fo-1920x1200.jpg)] bg-cover">
            <Navbar />
            {children}
        </section>
    )
}

export default Layout;