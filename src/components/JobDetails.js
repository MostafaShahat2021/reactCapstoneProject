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
          {job.title}
        </li>
        <li>
          {job.company_name}
        </li>
        <li>
          {job.job_type}
        </li>
        <li>
          {job.category}
        </li>
        <li>
          {job.tags[0]}
        </li>
        <li>
          {job.publication_date}
        </li>
        <li>
          {job.salary || <span>no salary</span>}
        </li>
      </ul>
    </div>
  );
}

export default JobsDetails;
