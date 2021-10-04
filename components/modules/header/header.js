import Link from "next/link";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { logout, selectName } from "../../../store/authSlice";

function MainNavigation() {
  const dispatch = useAppDispatch();
  const name = useAppSelector(selectName);

  return (
    <header className="w-full bg-pink-800 text-white px-6 py-4 flex justify-between items-center ">
      <Link href="/">
        <a>
          <div className="text-2xl font-bold">Next Auth</div>
        </a>
      </Link>
      <nav>
        <ul className="flex">
          {name ? (
            <div className="flex items-center">
              <li>
                <Link href="/profile">{name}</Link>
              </li>
              <li className="px-3">
                <button onClick={() => dispatch(logout())}>logout</button>
              </li>
            </div>
          ) : (
            <li className="px-2">
              <Link href="/auth">Login</Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
