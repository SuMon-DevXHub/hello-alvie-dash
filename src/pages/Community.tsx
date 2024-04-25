import { useState } from 'react';
import { ChatHistory, Chatbox } from '../components';

const Community = () => {
  const [activetab, setactivetab] = useState<number>(0);

  const handleTabClick = (index: number) => {
    setactivetab(index);
  };

  return (
    <div className="flex justify-start items-start relative bg-[#212227] w-full h-full">
      <div className="flex-none max-w-[300px] w-full h-full text-white">
        <ChatHistory activetab={activetab} onTabClick={handleTabClick} />
      </div>
      <div className="grow bg-[#0F1011] w-full h-full">
        <Chatbox activetab={activetab}/>
      </div>
    </div>
  );
};

export default Community;
