import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaChevronCircleRight } from 'react-icons/fa';

function AllJobs() {
  const jobs = useSelector((state) => state.jobs.jobs);

  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    setSearch(searchValue);
  };

  const filterJobs = jobs.filter((job) => job.title.toLowerCase().includes(search.toLowerCase()));
  return (
    <>
      <main className="hero">
        <h1>Remotive jobs</h1>
        <img
          src="https://camo.githubusercontent.com/5a759c5f7640123e386607aea7890caf84fb7ce9f2a0888407e0d218cc86bf82/68747470733a2f2f72656d6f746976652e636f6d2f6c6f676f"
          alt="logo"
          className="card-image"
        />
      </main>
      <h3>
        Remote Jobs Avilabele
        <span>{jobs.length}</span>
      </h3>
      <input
        className="search"
        type="text"
        role="searchbox"
        placeholder="Search jobs"
        value={search}
        onChange={(e) => handleSearch(e)}
      />
      <section className="cards">
        {filterJobs.map((job, index) => (
          <article
            className={`card ${
              index % 4 === 0 || index % 4 === 3 ? 'blue' : 'light-blue'
            }`}
            key={job.id}
          >
            <img
              src={job.company_logo}
              alt={job.title}
              className="card-image"
            />
            <div className="card-content">
              <h2 className="card-title">{job.title}</h2>
              <p className="card-description">{job.category}</p>
              <Link
                onClick={() => {
                  const jobId = job.id;
                  window.location.href = `/details/${jobId}`;
                }}
                to="/details"
              >
                {/* View Details */}
                <FaChevronCircleRight className="FaAngleRight" />
              </Link>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}

export default AllJobs;
