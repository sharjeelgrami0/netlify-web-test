import banner from 'assets/images/banner.jpg';
import displayPicture from 'assets/images/display_picture.png';
import ArrowIcon from 'assets/svgs/arrow.svg?react'
import 'styles/sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="profile">
        <div className="banner-wrap">
          <img src={banner} alt="banner" className="banner-image" />
          <img src={displayPicture} alt="profile" className="profile-image" />
        </div>
        <div className="profile-wrap">
          <h2 className="profile-name font-bold">Albert Flores</h2>
          <p className="profile-title color-gray">Senior Product Designer  |  UI/UX Designer  |  Graphic Designer  |  Web...</p>
          <p className="profile-location color-gray">Clinton, Maryland</p>
        </div>
      </div>
      <div className="profile-stats">
        <p className="color-gray">Profile Visitors: <span className="color-blue lg">140</span></p>
        <p className="color-gray">Resume Viewers: <span className="color-blue lg">20</span></p>
        <p className="color-gray">My Jobs: <span className="color-blue lg">88</span></p>
      </div>
      <div className="calendar-wrap">
        <div className="calendar">
          <h3 className='font-bold'>My Calendar</h3>
          <p className='color-light-gray'>Upcoming Interviews</p>
        </div>
        <ArrowIcon fill='#333333' />
      </div>
    </div>
  );
};

export default Sidebar;