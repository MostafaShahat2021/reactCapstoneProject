import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaChevronCircleLeft } from 'react-icons/fa';

function JobsDetails() {
  const jobId = parseInt(window.location.pathname.split('/')[2], 10);
  const job = useSelector((state) => state.jobs.jobs.find((j) => j.id === jobId));

  if (!job) {
    return <div>Job not found</div>;
  }

  return (
    <div className="details-card" key={job.id}>
      <Link to="/">
        <FaChevronCircleLeft className="FaChevronCircleLeft" />
      </Link>
      <img src={job.company_logo} alt={job.title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{job.title}</h2>
        <p className="card-description">{job.company_name}</p>
        <p className="card-description">{job.job_type}</p>
        <p className="card-description">{job.candidate_required_location}</p>
        <p className="card-description">
          {job.salary || <p>salary is confidential</p>}
        </p>
      </div>
    </div>
  );
}

export default JobsDetails;
