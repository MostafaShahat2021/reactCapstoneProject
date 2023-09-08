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
      <ul className="card-content list">
        <li>
          <span>Job title: </span>
          <span className="data">{job.title}</span>
        </li>
        <li>
          <span>company name: </span>
          <span className="data">{job.company_name}</span>
        </li>
        <li>
          <span>Job type: </span>
          <span className="data">{job.job_type}</span>
        </li>
        <li>
          <span>Category: </span>
          <span className="data">{job.category}</span>
        </li>
        <li>
          <span>Tag: </span>
          <span className="data">{job.tags[0]}</span>
        </li>
        <li>
          <span>puplication dtae:</span>
          <span className="data">{job.publication_date}</span>
        </li>
        <li>
          <span>Salary: </span>
          {job.salary || <span>Salary range available upon request</span>}
        </li>
      </ul>
    </div>
  );
}

export default JobsDetails;
