import Link from "next/link";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { logout, selectName } from "../../../store/authSlice";
import { DropdownAccount } from "../../elements/dropdown";

const MainNavigation: FC = () => {
  const dispatch = useAppDispatch();
  const name = useAppSelector(selectName);

  return (
    <header className="w-full bg-purple-400 text-white px-6 py-4 flex justify-between items-center ">
      <Link href="/">
        <a>
          <div className="text-2xl font-bold">Jalur Wisata</div>
        </a>
      </Link>
      <nav>
        <ul className="flex items-center">
          <li className="px-2">
            <Link href="/destiny">All Destiny</Link>
          </li>
          <li className="px-2">
            <Link href="/destiny/create">New Destiny</Link>
          </li>
          {name ? (
            <DropdownAccount name={name} />
          ) : (
            <li className="px-2">
              <Link href="/auth">Login</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
