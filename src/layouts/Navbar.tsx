import { Link, useLocation } from 'react-router-dom';
import { Image } from '../utils/Image';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="h-full px-3.5 py-5 flex flex-col justify-between">
      <div>
        <div className="flex justify-start items-center gap-2 text-[#939496]">
          <Image name="user_account" className="w-[15px] h-[14px]" />
          <p>My Account</p>
        </div>

        <div className="text-[#E2E3E5] pl-5 pt-5 text-[13px]">
          <Link to="/" className="">
            <p
              className={`${location.pathname === '/' ? 'bg-[#1A1C1F]' : ''} py-[6px] px-3 rounded-md`}
            >
              Home
            </p>
          </Link>
          <Link to="/community?fabien">
            <p
              className={`${location.pathname === '/community' ? 'bg-[#1A1C1F]' : ''} py-[6px] px-3 rounded-md`}
            >
              Community (3 online )
            </p>
          </Link>
          <Link to="/preference">
            <p
              className={`${location.pathname === '/preference' ? 'bg-[#1A1C1F]' : ''} py-[6px] px-3 rounded-md`}
            >
              Preferences
            </p>
          </Link>
          <Link to="/notification">
            <p
              className={`${location.pathname === '/notification' ? 'bg-[#1A1C1F]' : ''} py-[6px] px-3 rounded-md`}
            >
              Notifications
            </p>
          </Link>
          <Link to="/security">
            <p
              className={`${location.pathname === '/security' ? 'bg-[#1A1C1F]' : ''} py-[6px] px-3 rounded-md`}
            >
              Security & Access
            </p>
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="bg-[#E4E9F7] text-[#424242] text-xs p-2.5 rounded-md">
          <div className="flex justify-center items-center gap-1 whitespace-nowrap">
            <span>
              <Image name="user_log" className="w-3 h-[11px]" />
            </span>

            <p>Complete your profile (now 80%)</p>

            <button className="w-6 h-6">
              <Image name="cross" className="w-4 h-4" />
            </button>
          </div>

          <button className="flex justify-start items-center gap-1 text-sm">
            <Image name="github_logo" className="w-[13px] h-[13px]" />
            <p>Link GitHub</p>
          </button>
        </div>

        <button className="bg-[#70C3C0] py-2 w-full text-lg rounded-md">
          <Link to="/login">Disconnect</Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
