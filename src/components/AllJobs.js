import React from 'react';
import { useSelector } from 'react-redux';

function AllJobs() {
  const jobs = useSelector((state) => state.jobs.jobs);
  // console.log(jobs);

  return (
    <>
      <h1>Remotive jobs</h1>
      <h3>
        Remote Jobs Avilabele
        <span>
          {jobs.length}
        </span>
      </h3>
      <div className="cards">
        {jobs.map((job) => (
          <div className="card" key={job.id}>
            <img
              src={job?.company_logo}
              alt={job.title}
              className="card-image"
            />
            <div className="card-content">
              <h2 className="card-title">{job.title}</h2>
              <p className="card-description">{job.category}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default AllJobs;
