import { useState } from 'react';
import { Image } from '../utils/Image';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigation = useNavigate();
  const [showToast, setShowToast] = useState(false);

  const [password, setPassword] = useState('');

  return (
    <div className="bg-[#090909] text-white min-h-screen text-sm  flex flex-col justify-between relative">
      <div className="flex flex-col justify-center grow items-center">
        <div className="relative">
          <div className="flex flex-col justify-center items-center">
            <Image name="alvier" className="w-[145px] h-[145px]" />
            <h2 className="text-2xl pt-[29px] pb-[26px]">Hello, Alvier</h2>
            <p className="text-[#939496] text-center">
              Welcome to our live demo, being co-built with <br /> amazing
              individuals & leading companies.
            </p>
          </div>

          <div className="absolute left-0 pt-28 flex flex-col gap-5">
            <div className="flex flex-col md:flex-row gap-3 md:gap-14">
              <button className="bg-[#262728] w-[230px] h-9 rounded-md">
                Password
              </button>
              <input
                type="password"
                placeholder="Enter your password!"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="bg-[#262728] text-white text-center w-[230px] h-9 rounded-md px-2 outline-none"
              />
            </div>

            <div className="w-full flex flex-col md:flex-row gap-3 md:gap-14 justify-center items-center md:justify-around">
              <button
                className="bg-[#70C3C0] w-[210px] h-7 rounded-[4px]"
                onClick={() => {
                  if (password === 'password') {
                    navigation(`/`);
                  } else {
                    setShowToast(true);
                    setTimeout(() => {
                      setShowToast(false);
                    }, 2000);
                  }
                }}
              >
                Login
              </button>
              <button className="bg-[#AB6384] w-[210px] h-7 rounded-[4px]">
                Logged
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="text-[#939496] flex flex-col justify-center items-center pt-20 pb-10">
        <div className="flex gap-3">
          <Image name="instagram" className="w-7 lg:w-10 h-7 lg:h-10" />
          <Image name="slack" className="w-7 lg:w-10 h-7 lg:h-10" />
          <Image name="twitter" className="w-7 lg:w-10 h-7 lg:h-10" />
        </div>
        <div>Last update was made on the XX/XX/XX</div>
      </div>

      {showToast && (
        <div className="bg-[#C340A1] p-4 absolute right-[120px] rounded-lg top-10 text-sm">
          <h2>Password do not match!</h2>
        </div>
      )}
    </div>
  );
}
