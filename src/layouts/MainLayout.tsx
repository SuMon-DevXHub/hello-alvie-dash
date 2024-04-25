import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import CorporateNavbar from './CorporateNavbar';
import { useViewerModeStore } from '../stores/viewermode';

export default function MainLayout() {
  const { viewMode } = useViewerModeStore();

  const renderMainContent = () => (
    <div className="flex min-h-[calc(100vh-150px)]">
      <div className="w-fit">
        {viewMode === 'candidate' ? <Navbar /> : <CorporateNavbar />}
      </div>
      <div className="grow bg-[#0F1011] border-2 border-[#25262B] text-white rounded-lg mx-4 my-2">
        {' '}
        <Outlet />
      </div>
    </div>
  );

  return (
    <div className="bg-[#090909] min-h-screen">
      {renderMainContent()}
      {viewMode === 'candidate' && (
        <div className="w-full">
          <Footer />
        </div>
      )}
    </div>
  );
}
