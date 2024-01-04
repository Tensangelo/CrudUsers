
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-transparent text-white p-4 flex justify-between items-center">
      <div className="text-lg font-semibold">
        <Link href="/">
          <p className="hover:bg-[#666693] hover:text-white px-4 py-2 rounded">Inicio</p>
        </Link>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link href="/CreateUser">
              <p className="hover:bg-[#228093] hover:text-white px-4 py-2 rounded">Crear usuarios</p>
            </Link>
          </li>
          <li>
            <Link href="/GetUsers">
              <p className="hover:bg-[#228093] hover:text-white px-4 py-2 rounded">Lista de usuarios</p>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;