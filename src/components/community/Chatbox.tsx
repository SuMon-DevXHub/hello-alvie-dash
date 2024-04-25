import dayjs from 'dayjs';
import { useSearchParams } from 'react-router-dom';
import { Image } from '../../utils/Image';
import { useState } from 'react';
import { ViewerMode } from '../viewerMode/ViewerMode';

const communityMembers: any = {
  fabien: {
    name: 'Fabien Keller',
    role: 'Community Leader',
    bio: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, officia!',
  },
  david: {
    name: 'David Keller',
    role: 'Community Leader',
    bio: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, officia!',
  },
  filip: {
    name: 'Filip Keller',
    role: 'Community Leader',
    bio: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus, officia!',
  },
};

export const Chatbox = ({ activetab }: any) => {
  const [searchText, setSearchText] = useState('');
  const [searchParams] = useSearchParams();
  const entriesArray = [...searchParams.entries()];
  const firstParamName = entriesArray.length > 0 ? entriesArray[0][0] : '';
  const communityMember = communityMembers[firstParamName];
  const today = dayjs().format('MMM D');

  if (!communityMember) {
    return (
      <div className="px-[30px] py-9 relative">Community member not found.</div>
    );
  }

  return (
    <div className="px-[30px] py-9 relative">
      <div>
        <div className="flex justify-between items-start gap-10">
          <Image
            name="fabien_profile"
            className="w-full h-full max-w-[240px] max-h-[260px]"
          />
          <div>
            <h2 className="text-2xl leading-10">
              Hey Eric! How are you today?{' '}
            </h2>
            <p className="text-[#939496] text-sm">
              Fabien works at Klarna since 3 years, he’s part of the HR team and
              is super happy to have a chat with you only if you want to!
            </p>
          </div>
        </div>
      </div>
      <div className="my-10">
        <div className="flex justify-start items-start gap-3">
          <Image name="fabien_logo" className="w-11 h-11" />
          <div className="">
            <h2 className="text-sm">
              {' '}
              {communityMember.name}
              <span className="text-[#959699] text-xs ml-3">10 h 13</span>
            </h2>
            <p className="text-sm">
              Absolutely. I’m actually 80% home.What are your needs?{' '}
            </p>
          </div>
        </div>
        <div className="flex justify-start items-start gap-3 mt-5">
          <Image name="erik_logo" className="w-11 h-11" />
          <div className="">
            <h2 className="text-sm">
              {' '}
              Eric Jjakverg
              <span className="text-[#959699] text-xs ml-3">10 h 10</span>
            </h2>
            <p className="text-sm">
              Wow, really? Is teleworking allowed? Can it be adapted?
            </p>
            <span className="w-5 h-5 flex justify-center items-center bg-[#1A1C1F]">
              <Image name="love_red" className="w-3 h-3" />
            </span>
          </div>
        </div>
      </div>
      <div className="reletive border border-[#69696A] my-10">
        <div className="block w-full border-b-[0px]  border-[#69696A] relative">
          <p className="z-20 py-1 px-7 absolute border border-[#69696A] rounded-2xl top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-[#0F1011]">
            Yesterday
          </p>
        </div>
      </div>
      <div>
        <div className="flex justify-start items-start gap-3">
          <Image name="fabien_logo" className="w-11 h-11" />
          <div className="">
            <h2 className="text-sm">
              {communityMember.name}
              <span className="text-[#959699] text-xs ml-3">10 h 13</span>
            </h2>
            <p className="text-sm">
              That’s one of the most quiet workplace I’ve worked at! They also
              provide noice reduction helmets. We have a quiet policy like at
              Alan company. Have you heard about it?
            </p>
          </div>
        </div>
        <div className="flex justify-start items-start gap-3 mt-5">
          <Image name="erik_logo" className="w-11 h-11" />
          <div className="">
            <h2 className="text-sm">
              {' '}
              Eric Jjakverg
              <span className="text-[#959699] text-xs ml-3">10 h 10</span>
            </h2>
            <p className="text-sm">
              Hello Fabien, thank you for your message. Is the office noisy? How
              many people work here everyday?
            </p>
            <span className="w-5 h-5 flex justify-center items-center bg-[#1A1C1F]">
              <Image name="love_red" className="w-3 h-3" />
            </span>
          </div>
        </div>
        <div className="flex justify-start items-start gap-3 mt-5">
          <Image name="fabien_logo" className="w-11 h-11" />
          <div className="">
            <h2 className="text-sm">
              {communityMember.name}
              <span className="text-[#959699] text-xs ml-3">
                10 h {activetab}
              </span>
            </h2>
            <p className="text-sm">
              Absolutely. I’m actually 80% home.What are your needs?{' '}
            </p>
          </div>
        </div>
      </div>
      <div className="text-[#959699] bg-[#262728] rounded-lg relative mt-4 2xl:mt-6">
        <input
          //   ref={searchRef}
          type="search"
          name="peopleSearch"
          placeholder="Ask anything you want. Use @ to tag Filip from Klarna, David from Alan or Fabien from Meta."
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
          <button>
            <Image name="send_arrow" className="w-[18px] h-[18px]" />
          </button>
        </div>
      </div>
      <ViewerMode />
    </div>
  );
};
