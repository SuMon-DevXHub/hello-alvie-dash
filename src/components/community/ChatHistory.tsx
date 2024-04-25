import { useNavigate, useSearchParams } from 'react-router-dom';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
dayjs.extend(advancedFormat);

export function ChatHistory({ activetab, onTabClick }: any) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const entriesArray = [...searchParams.entries()];
  const firstParamName = entriesArray.length > 0 ? entriesArray[0][0] : '';
  const paramName =
    firstParamName.charAt(0).toUpperCase() + firstParamName.slice(1);

  const currentTime = dayjs().format('h:mm A');
  const todayFormatted = `Today, ${currentTime}`;
  const yesterday = dayjs().subtract(1, 'day').format('Do of MMMM, h:mm A');
  const yesterdayMinusHour = dayjs()
    .subtract(1, 'day')
    .subtract(1, 'hour')
    .format('Do of MMMM, h:mm A');

  const handleButtonClick = (buttonId: number) => {
    onTabClick(buttonId);
    const url = `/community?${firstParamName}`;
    navigate(url);
  };

  return (
    <div className="px-[30px] py-9">
      <h4 className="text-sm mb-5">Chat History</h4>

      <div className="text-left">
        <button
          className={`w-full text-left ${
            activetab === 1 ? 'bg-[#1A1C1F] text-white' : ''
          }`}
          onClick={() => handleButtonClick(1)}
        >
          <p className="py-1 px-3 rounded-md pt-2 block">
            {paramName} from Klarna
          </p>
          <p className="text-[#737373] py-1 px-3 rounded-md block pb-2">
            {todayFormatted}
          </p>
        </button>

        <p className="text-[#737373] py-3 px-3 rounded-md block">
          Yesterday
        </p>

        <button
          className={`w-full text-left ${
            activetab === 2 ? 'bg-[#1A1C1F] text-white' : ''
          }`}
          onClick={() => handleButtonClick(2)} // Track click for this button
        >
          <p className="py-1 px-3 rounded-md pt-2 block">
            {paramName} from META
          </p>
          <p className=" text-[#737373] py-1 px-3 rounded-md block pb-2">
            {yesterday}
          </p>
        </button>

        <button
          className={`w-full text-left ${
            activetab === 3 ? 'bg-[#1A1C1F] text-white' : ''
          }`}
          onClick={() => handleButtonClick(3)} // Track click for this button
        >
          <p className=" py-1 px-3 rounded-md pt-2 block">
            {paramName} from Alan
          </p>
          <p className="text-[#737373] py-1 px-3 rounded-md block pb-2">
            {yesterdayMinusHour}
          </p>
        </button>
      </div>
    </div>
  );
}
