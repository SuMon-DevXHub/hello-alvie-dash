import { Link, useLocation } from 'react-router-dom';
import { Image } from '../utils/Image';

const CorporateNavbar = () => {
  const location = useLocation();

  return (
    <nav className="h-full px-3.5 py-5 flex flex-col justify-between">
      <div>
        <div className='flex justify-between items-center mb-8'>
          <div className="logo flex justify-start items-center">
            <Image name="linear" className="w-[37px] h-9" />
            <h2 className='text-2xl text-white'>Linear</h2>
          </div>
          <div className='flex justify-end items-center'>
            <Image name='search' className='w-7 h-7'/>
            <Image name='edit' className='w-7 h-7'/>
          </div>
        </div>
        <div>
          <div className="flex justify-start items-center gap-2 text-[#939496] pl-2">
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
            <Link to="/discover-more-experts">
              <p
                className={`${location.pathname === '/discover-more-experts' ? 'bg-[#1A1C1F]' : ''} py-[6px] px-3 rounded-md`}
              >
                Discover more experts
              </p>
            </Link>
            <Link to="/post-a-job">
              <p
                className={`${location.pathname === '/post-a-job' ? 'bg-[#1A1C1F]' : ''} py-[6px] px-3 rounded-md`}
              >
                Post a job
              </p>
            </Link>
            <Link to="/search-candidates">
              <p
                className={`${location.pathname === '/search-candidates' ? 'bg-[#1A1C1F]' : ''} py-[6px] px-3 rounded-md`}
              >
                Search candidates
              </p>
            </Link>
            <Link to="/feedback">
              <p
                className={`${location.pathname === '/feedback' ? 'bg-[#1A1C1F]' : ''} py-[6px] px-3 rounded-md`}
              >
                Feedback
              </p>
            </Link>
            <Link to="/analytics">
              <p
                className={`${location.pathname === '/analytics' ? 'bg-[#1A1C1F]' : ''} py-[6px] px-3 rounded-md`}
              >
                Analytics
              </p>
            </Link>
            <Link to="/community-support">
              <p
                className={`${location.pathname === '/community-support' ? 'bg-[#1A1C1F]' : ''} py-[6px] px-3 rounded-md`}
              >
                Community & support
              </p>
            </Link>
            <Link to="/candidate-management">
              <p
                className={`${location.pathname === '/candidate-management' ? 'bg-[#1A1C1F]' : ''} py-[6px] px-3 rounded-md`}
              >
                Candidate management
              </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8 w-[252px] mb-14">
        <button className="bg-[#1A1C1F] py-2 w-full text-lg rounded-md">
          <Link to="/login" className="text-[#FFDA44]">
            Disconnect
          </Link>
        </button>
        <div className="text-[#959699] flex justify-center items-center text-md">
          <button className="bg-[#25262B] py-[5px] px-[10px] border-[#2A2C31] border-[1px] tracking-wide">
            Dark
          </button>
          <button className="py-[5px] px-[10px] border-[#2A2C31] border-[1px] tracking-wide">
            Light
          </button>
        </div>
      </div>
    </nav>
  );
};

export default CorporateNavbar;
