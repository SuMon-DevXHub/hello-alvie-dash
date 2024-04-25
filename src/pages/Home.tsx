import { useRef, useState } from 'react';
import { Image } from '../utils/Image';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import { ViewerMode } from '../components/viewerMode/ViewerMode';

const youtubeShorts = [
  {
    id: 1,
    name: 'Filip',
    from: 'Klarna',
    appliedFor: 'Full-stack developer in London.',
    photoUrl: 'https://i.ibb.co/5YzYHjT/image.png',
    team: 'Payment',
    introUrl: 'https://www.youtube.com/embed/JdMIq3i00s4?si=DZM2LKP-CwQrAkY6',
    isActive: false,
  },
  {
    id: 2,
    name: 'David',
    from: 'Alan',
    appliedFor: 'Full-stack developer in London.',
    photoUrl: 'https://i.ibb.co/HV5cSxw/image.png',
    team: 'Security',
    introUrl: 'https://www.youtube.com/embed/JdMIq3i00s4?si=DZM2LKP-CwQrAkY6',
    isActive: true,
  },
  {
    id: 3,
    name: 'Fabien',
    from: 'Meta',
    appliedFor: 'Full-stack developer in London.',
    photoUrl: 'https://i.ibb.co/ZWFNNkf/image.png',
    team: 'Payment',
    introUrl: 'https://www.youtube.com/embed/JdMIq3i00s4?si=DZM2LKP-CwQrAkY6',
    isActive: false,
  },
];

const Home = () => {
  const navigation = useNavigate();
  const [activeShort, setActiveShort] = useState(0);
  const [showMentionModal, setShowMentionModal] = useState(false);
  const [searchText, setSearchText] = useState('');
  const searchRef = useRef<any>(null);
  const today = dayjs().format('MMM D');

  return (
    <div className="px-20 xl:px-[120px] pt-[60px] xl:pt-[50px] pb-[56px] relative">
      <div className="hero-section flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-20 mt-14 lg:mt-0">
        <Image name="alvier" className="w-[64px] h-[65px]" />

        <div className="grow flex flex-col text-center lg:text-start">
          <div>
            <h2 className="text-2xl">Good morning, Eric</h2>
            <p className="text-[#939496]">
              You’ve been selected by 3 companies. Congrats!
            </p>
          </div>

          <div className="flex flex-col xl:flex-row gap-10 mt-10">
            <button className="px-3 py-4 border border-[#2A2C31] bg-[#1D1F24] rounded-md flex gap-2.5 justify-center items-center h-9">
              <p className="indicator border border-[#2A2C31] bg-[#1D1F24] rounded-md px-2 py-1">
                <span className="w-2 h-2 rounded-full bg-[#40C5C0]"></span>
              </p>
              <span>3 Successful applications</span>
            </button>

            <button className="px-3 py-4 border border-[#2A2C31] bg-[#1D1F24] rounded-md flex gap-2.5 justify-center items-center h-9">
              <p className="indicator border border-[#2A2C31] bg-[#1D1F24] rounded-md px-2 py-1">
                <span className="w-2 h-2 rounded-full bg-[#F2BE00]"></span>
              </p>
              <span>4 currently being reviewed</span>
            </button>
          </div>

          <div className="h-0.5 bg-[#2A2C31] mt-6"></div>
        </div>
      </div>

      <div className="cardSection w-full grid grid-cols-1 lg:grid-cols-2 min-[1440px]:grid-cols-3 justify-items-center gap-8 lg:gap-12 2xl:gap-16 pt-7 pb-10 text-white text-[12px] 2xl:text-sm">
        {youtubeShorts.map((short) => (
          <div
            key={short.id}
            className="w-[241px] 2xl:w-[300px] flex flex-col gap-5"
            onMouseOver={() => setActiveShort(short.id)}
            onMouseLeave={() => setActiveShort(0)}
          >
            <div
              className={`w-full h-[255px] ${activeShort === short.id ? 'opacity-100' : 'opacity-20'}`}
            >
              <iframe
                width="100%"
                height="100%"
                className="rounded-md"
                src={short.introUrl}
                title="YouTube video player"
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
              ></iframe>
            </div>

            <div
              className={`w-full rounded-md flex flex-col gap-2 ${activeShort === short.id ? 'bg-[#090909] border border-[#E181AD] p-4' : 'bg-[#1A1B20] p-5'}`}
            >
              <p>
                {short.name} from{' '}
                <span className="font-bold">{short.from}</span> wants to meet
                you!
              </p>
              <p>
                <span className="font-bold">Job applied:</span>{' '}
                {short.appliedFor}{' '}
                <span className="underline">{short.team} team</span>.
              </p>
              <button
                className={`px-2 py-1 rounded-md w-fit ${activeShort === short.id ? 'bg-[#70C3C0]' : 'border border-white'}`}
              >
                Schedule your meeting
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="text-[#959699] bg-[#262728] rounded-lg relative mt-3 2xl:mt-5">
        <input
          ref={searchRef}
          type="search"
          name="peopleSearch"
          placeholder="Ask anything you want. Use @ to tag Filip from Klarna, David from Alan or Fabien from Meta."
          value={searchText}
          className="w-full bg-transparent p-5 outline-none rounded-lg text-white h-14"
          onChange={(e) => {
            setSearchText(e.target.value);
            let str = e.target.value;
            let lastChar = str.charAt(str.length - 1);
            if (lastChar === '@') {
              setShowMentionModal(true);
            } else {
              setShowMentionModal(false);
            }
          }}
        ></input>

        {showMentionModal && (
          <div className="absolute bg-[#16171A] text-white bottom-[72px] p-3 rounded-lg shadow-lg flex flex-col items-start gap-3 left-5">
            {youtubeShorts.map((short) => (
              <div
                className="flex gap-2 items-center justify-center cursor-pointer"
                key={short.id}
                onClick={() => {
                  setSearchText(`${searchText}${short.name} `);
                  setShowMentionModal(false);
                  if (searchRef.current) {
                    searchRef.current.focus();
                  }
                }}
              >
                <img src={short.photoUrl} className="h-9 w-9" alt="" />
                <div>
                  {short.name}, HR from {short.from}
                </div>
                <div
                  className={`w-4 h-4 border-2 border-white rounded-full ${short.isActive ? 'bg-[#2D9693]' : ''}`}
                ></div>
              </div>
            ))}
          </div>
        )}

        <div className="absolute right-5 top-1/2 -translate-y-1/2 flex justify-center items-center gap-3">
          <button className="flex justify-center items-center gap-2 px-3 py-2 rounded-full border-2 border-[#2A2C31]">
            <span>
              <Image name="boxes" className="w-[13px] h-[14px]" />
            </span>
            <span>Add a file</span>
          </button>
          <p>{today}</p>
          <button
            onClick={() => {
              if (searchText.includes('@')) {
                navigation(
                  `/community?${searchText.toLowerCase().split('@')[1].split(' ')[0]}`,
                );
              }
            }}
          >
            <Image name="send_arrow" className="w-[18px] h-[18px]" />
          </button>
        </div>
      </div>
      <ViewerMode />
    </div>
  );
};

export default Home;
