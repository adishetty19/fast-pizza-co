import { Link } from "react-router";
import SearchOrder from "../../components/order/SearchOrder";
import Username from "../../components/user/Username";
import { useSelector } from "react-redux";

export default function Header() {
  const username = useSelector((state) => state.user.userName);
  return (
    <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className="tracking-widest">
        Fast Pizza Co.
      </Link>

      <SearchOrder />
      {username && <Username />}
    </header>
  );
}
