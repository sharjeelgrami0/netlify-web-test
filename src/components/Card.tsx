import PinIcon from 'assets/svgs/pin.svg?react'
import TimeIcon from 'assets/svgs/time.svg?react'
import BookmarkIcon from 'assets/svgs/bookmark.svg?react'
import Button from './elements/Button';
import 'styles/jobCard.css'

interface JobCardProps {
    url: string
    title: string;
    designation: string;
    location: string;
    date: string;
    applicants: number;
  }

const JobCard = ({ url, title, designation, location, date, applicants }: JobCardProps) => {
  return (
    <div className='col-12 col-sm-6 col-md-4 col-xl-3 job-grid'>
      <div className="job-card">
        <h6 className="promoted">Promoted</h6>
        <div className='card-wrap'>
          <img src={url} width={24} height={24} alt="profile" className="card-profile" />
          <div>
            <h4>{title}</h4>
            <h5>{designation}</h5>
          </div>
        </div>
        <div className='card-details'>
          <div className='location'>
            <PinIcon fill='#585D6E' className='card-icon' />
            <p className='sm'>{location}</p>
          </div>
          <div className='applicant'>
            <TimeIcon fill='#585D6E' className='card-icon' />
            <p className='sm'>{date} | <span className='color-blue'>{applicants} applicants</span></p>
          </div>
        </div>
        <div className='button-wrap'>
          <Button
            label="Apply Now"
            onClick={() => console.log('Apply Now')}
            variant="primary"
            size='sm'
            style={{
              minWidth: '115px'
            }}
          />
          <BookmarkIcon stroke='#AAAAAA' />
        </div>
      </div>
    </div>
  );
};

export default JobCard;