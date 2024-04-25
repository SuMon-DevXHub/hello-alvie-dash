import { useRef, useState } from 'react';
import { Image } from '../utils/Image';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';
import { ViewerMode } from '../components/viewerMode/ViewerMode';

const corporateProfile = [
  {
    id: 1,
    name: 'Lucy Mayfair',
    position: 'Back-end developer',
    experiences: '8 years experience',
    location: 'Based in London',
    syndrome: 'Autistic Syndrom',
    match: '96%',
    logoIcon: '',
    profileIcon: '',
    from: 'Klarna',
    appliedFor: 'Full-stack developer in London.',
    photoUrl: 'https://i.ibb.co/5YzYHjT/image.png',
    isActive: false,
  },
  {
    id: 2,
    name: 'Erik Jjakverg',
    position: 'Back-end developer',
    experiences: '8 years experience',
    location: 'Based in London',
    syndrome: 'Autistic Syndrom',
    match: '78%',
    from: 'Alan',
    appliedFor: 'Full-stack developer in London.',
    photoUrl: 'https://i.ibb.co/HV5cSxw/image.png',
    isActive: true,
  },
  {
    id: 3,
    name: 'Julien Petit',
    position: 'Back-end developer',
    experiences: '8 years experience',
    location: 'Based in London',
    syndrome: 'Autistic Syndrom',
    match: '74%',
    from: 'Meta',
    appliedFor: 'Full-stack developer in London.',
    photoUrl: 'https://i.ibb.co/ZWFNNkf/image.png',
    isActive: false,
  },
];

const CorporateHome = () => {
  const navigation = useNavigate();
  const [activeShort, setActiveShort] = useState(0);
  const [searchText, setSearchText] = useState('');
  const searchRef = useRef<any>(null);
  const today = dayjs().format('MMM D');

  return (
    <div className="p-[18px] relative">
      <div className="relative">
        <div className="hero-section flex justify-start items-center gap-2 px-4 mt-4">
          <Image name="home" className="w-[11px] h-[11px]" />
          <h4 className="text-sm">Home</h4>
        </div>
        <div className="px-4 pt-1 pb-4">
          <p className="mb-3">Candidates waiting for your answer</p>
          <select className="bg-[#25262B] px-2 py-[6px] rounded">
            <option>Back-end developer offer</option>
            <option>Front-end developer offer</option>
          </select>
        </div>

        <div className="cardSection w-full grid grid-cols-1 lg:grid-cols-2 min-[1440px]:grid-cols-3 justify-items-start gap-8 lg:gap-12 2xl:gap-16 text-white text-[12px] 2xl:text-sm my-2">
          {corporateProfile.map((short) => (
            <div
              key={short.id}
              className={`rounded max-w-[380px] w-full flex flex-col gap-5 border p-3  ${activeShort === short.id ? 'bg-[#090909] border-[#E181AD]' : 'border-[#1A1B20]'}`}
              onMouseOver={() => setActiveShort(short.id)}
              onMouseLeave={() => setActiveShort(0)}
            >
              <div
                className={`w-full h-full ${activeShort === short.id ? 'opacity-100' : 'opacity-20'}`}
              >
                <div className="flex justify-between items-center">
                  <p>{short.position}</p>
                  <Image name="candidates" className="w-[21px] h-[14px]" />
                </div>
                <h2 className="text-xl my-[10px]">{short.name}</h2>
                <div className="flex justify-start items-start gap-2 mt-5">
                  <img
                    src={short.photoUrl}
                    alt={short.name}
                    className="w-[124px] h-[124px]"
                  />
                  <div>
                    <p className="text-[#72E29F] bg-[#13261D] py-1 px-2 mb-1">
                      {short.experiences}
                    </p>
                    <p className="bg-[#1D2029] text-[#8C8D92] py-1 px-2 my-1">
                      {short.position}
                    </p>
                    <p className="text-[#F2BE00] bg-[#261313] py-1 px-2 my-1">
                      {short.syndrome}
                    </p>
                    <p className="text-2xl">{short.match}</p>
                    <p>match</p>
                  </div>
                </div>
                <div className="my-2">
                  <p>Worked at:</p>
                  <div className="flex justify-start items-center gap-2 mt-2">
                    <Image name="adobe" className="h-6" />
                    <Image name="github" className="h-5" />
                    <Image name="webflow" className="h-6" />
                  </div>
                </div>
                <div className="bg-[#E4F7E8] flex justify-start items-start gap-2 py-4 pl-4 pr-2 rounded-xl">
                  <Image name="tick" className="w-4 h-4 pt-1" />
                  <div>
                    <p className="text-[#424242]">
                      You’re ready to welcome Lucy
                    </p>
                    <p className="text-[#757575] mt-4">
                      Congrats! Quiet office - help to relocate - 80% remote
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center mt-6 mb-2">
                  <button className="px-2 py-1 rounded w-fit border border-white">
                    Schedule your meeting
                  </button>
                  <button className="px-2 py-1 rounded flex justify-center items-center gap-2 border border-white">
                    <p>Chat</p>
                    <Image name="send_arrow" className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-start items-center gap-4">
          <p className="text-2xl">Now talking with</p>
          <div className="flex justify-center items-center gap-4">
            <button className="bg-[#BEA0F0] px-5 py-1 rounded-full">
              Expert
            </button>
            <button className="bg-[#4d4d4d] px-5 py-1 rounded-full">
              Team
            </button>
            <button className="bg-[#4D4D4D] px-5 py-1 rounded-full">
              Candidate
            </button>
          </div>
          <div className="border-r-[1px] border-[#ffffff] h-6"></div>
          <p>Tue, 4 April 2023</p>
          <div className="border-r-[1px] border-[#ffffff] h-6"></div>
          <div className="relative h-8 w-12">
            <Image
              name="chat_logo1"
              className="absolute z-10 left-0 top-1/2 -translate-y-1/2"
            />
            <Image
              name="chat_logo2"
              className="absolute z-20 left-4 top-1/2 -translate-y-1/2"
            />
            <Image
              name="chat_logo3"
              className="absolute z-30 left-8 top-1/2 -translate-y-1/2"
            />
          </div>
        </div>

        <div className="my-3">
          <p className="text-xl">#LucyMayfair</p>
        </div>

        <div className="my-6">
          <div className="flex justify-start items-start gap-3">
            <Image name="fabien_logo" className="w-11 h-11" />
            <div className="">
              <h2 className="text-sm">
                Fabien Keller
                <span className="text-[#959699] text-xs ml-3">10 h 13</span>
              </h2>
              <p className="text-sm">
                Hi Charlotte, how are you? Based on our talk with Lucy, it
                appears she’s in demand for extra work from home. Maybe 100% one
                week or two per months.
              </p>
            </div>
          </div>
          <div className="flex justify-start items-start gap-3 mt-5">
            <Image name="charlotte_logo" className="w-11 h-11" />
            <div className="">
              <h2 className="text-sm">
                {' '}
                Cahrlotte
                <span className="text-[#959699] text-xs ml-3">10 h 10</span>
              </h2>
              <p className="text-sm">
                Hello Fabien, thanks you for your message. I’ve reviewed your
                questions about Lucy Mayfair. I believe the office location
                might require some flexibility for her to stay work from home.
              </p>
              <span className="w-5 h-5 flex justify-center items-center bg-[#1A1C1F]">
                <Image name="love_red" className='w-3 h-3'/>
              </span>
            </div>
          </div>
        </div>

        <div className="text-[#959699] bg-[#262728] rounded-lg relative my-6">
          <input
            ref={searchRef}
            type="search"
            name="peopleSearch"
            placeholder="Chat with your team about your candidate. Use @ to tag Charlotte from Stockholm Hospital, PhD in neurodiversity, if you need help"
            value={searchText}
            className="w-full bg-transparent p-5 outline-none rounded-lg text-white h-14"
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
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
    </div>
  );
};

export default CorporateHome;
