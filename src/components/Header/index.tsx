import { observer } from "mobx-react";
import { useRootStore } from "../../context";
import { Logo } from "../UI";
import { Link, useNavigate } from "react-router-dom";

export const Header = observer(() => {
  const navigate = useNavigate();
  const {
    rootStore: { loginStore },
  } = useRootStore();

  const handleLogout = () => {
    loginStore.signOut();
    navigate("/sign-in");
  };

  return (
    <header className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex items-center mx-auto p-4">
        <Logo />

        {loginStore.getUserDetails && (
          <span className="ml-auto mr-5">
            Welcome{" "}
            <p className="font-black inline uppercase">
              {loginStore.userDetails?.username}
            </p>
          </span>
        )}
        {loginStore.getToken ? (
          <button
            className="text-white bg-primary-600 hover:bg-primary-700 font-medium rounded-lg text-sm px-5 py-2.5"
            onClick={handleLogout}
          >
            Sign Out
          </button>
        ) : (
          <Link to={"/sign-in"}>
            <button className="text-white bg-primary-600 hover:bg-primary-700 font-medium rounded-lg text-sm px-5 py-2.5">
              Sign In
            </button>
          </Link>
        )}{" "}
      </div>
    </header>
  );
});
export default Header;
