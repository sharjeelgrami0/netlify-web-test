import JobCard from './Card';
import { useState } from 'react';
import Input from './elements/Input';
import Button from './elements/Button';
import SearchIcon from 'assets/svgs/search.svg?react'
import Dropdown from './elements/Dropdown';
import Tags from './elements/Tags';
import teamImage from 'assets/images/team.png';
import 'styles/mainContent.css';

const MainContent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  const handleClick = (value: string) => {
    console.log(value)
  }
  const jobs = [
    { url: teamImage, title: 'UI/UX Designer', designation: 'Teams', location: 'Seattle, USA (Remote)', date: '1 day ago', applicants: 22 },
    { url: teamImage, title: 'Developer', designation: 'Teams', location: 'New York, USA (Remote)', date: '2 days ago', applicants: 15 },
    { url: teamImage, title: 'Graphic Designer', designation: 'Teams', location: 'San Francisco, USA', date: '3 days ago', applicants: 30 },
    { url: teamImage, title: 'UI/UX Designer', designation: 'Teams', location: 'Seattle, USA (Remote)', date: '1 day ago', applicants: 22 },
    { url: teamImage, title: 'Developer', designation: 'Teams', location: 'New York, USA (Remote)', date: '2 days ago', applicants: 15 },
  ];

  const options = [
    { label: 'Option 1', value: 'option_1' },
    { label: 'Option 2', value: 'option_2' },
  ];

  const tags = [
    { label: 'Frontend' },
    { label: 'Backend' },
    { label: 'Graphic Designer' },
  ];

  const handleSelect = (value: string) => {
    console.log('Selected:', value);
  };

  return (
    <main className="main-content">
      <div className="welcome-section">
        <div className="title">
          <h1 className='heading'>Find your Dream Job, <span>Albert!</span></h1>
          <p>Explore the latest job openings and apply for the best opportunities available today!</p>
        </div>
        <div className="row search-filters">
          <div className='col-12 col-md-auto search-wrap p-md-0 pb-2 pb-md-0'>
            <Input
              placeholder="Job Title, Company, or Keywords"
              value={searchTerm}
              onChange={handleSearchChange}
              variant="transparent"
              className='control-width-250'
            />
          </div>
          <div className='col-12 col-sm-auto p-sm-0 pb-2 pb-sm-0'>
            <Dropdown
              options={options}
              placeholder="Select Location"
              onSelect={handleSelect}
            />
          </div>
          <div className='col-12 col-sm-auto p-sm-0 pb-2 pb-sm-0'>
            <Dropdown
              options={options}
              placeholder="Job Type"
              onSelect={handleSelect}
            />
          </div>
          <div className='col-12 col-sm-auto p-sm-0 pb-2 pb-sm-0'>
            <Button
              label="Search"
              icon={<SearchIcon width={16} height={16} stroke='#FFFFFF' />}
              onClick={() => handleClick('Search')}
              variant="primary"
              iconPosition="left"
              size='md'
              style={{
                minWidth: '140px'
              }}
            />
          </div>
        </div>
        <div className='similar-filters'>
          <p className='color-light-gray'>Similar:</p>
          <Tags tags={tags} />
        </div>
        <div className='hr-line'></div>
      </div>

      <section className="job-section">
        <div className='card-main-title'>
          <h2 className='title'>Featured Jobs</h2>
          <a className='sub-title color-blue' href='#'>See Featured Jobs</a>  
        </div>
        <div className="row">
          {jobs.map((job, index) => (
            <JobCard key={index} {...job} />
          ))}
        </div>
      </section>
      <div className='hr-line'></div>
      <section className="job-section">
        <div className='card-main-title'>
          <h2 className='title'>Recommended Jobs</h2>
          <a className='sub-title color-blue' href='#'>See Recommended Jobs</a>  
        </div>
        <div className="row">
          {jobs.map((job, index) => (
            <JobCard key={index} {...job} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default MainContent;