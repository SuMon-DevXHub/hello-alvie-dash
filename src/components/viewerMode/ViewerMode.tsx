import { useNavigate } from "react-router";
import { useViewerModeStore } from "../../stores/viewermode";


export const ViewerMode = () => {
  const { viewMode, toggleViewMode } = useViewerModeStore();
  const navigate = useNavigate();

  const handleSwitchView = () => {
    toggleViewMode();
    navigate(`/`);
    
  };

  const viewText = viewMode === 'candidate' ? 'candidate' : 'corporate';
  
  return (
    <div
      className={`p-4 absolute top-6 xl:top-10 right-10 xl:right-[120px] rounded-lg ${
        viewMode === 'candidate' ? 'bg-[#C340A1]' : 'bg-[#92A4FF]'
      }`}
    >
      <h2 className="text-sm leading-6">You are in {viewText} view</h2>
      <button className="underline text-sm" onClick={handleSwitchView}>
        Click here to switch to {viewText} view
      </button>
    </div>
  );
};
