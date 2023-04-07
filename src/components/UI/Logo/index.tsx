import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to={"/"} className="flex items-center">
      <img src="/mobx.svg" className="h-8 mr-3" alt="Mobx Logo" />
      <span className="self-center text-2xl font-semibold whitespace-nowrap">
        MobX
      </span>
    </Link>
  );
}
