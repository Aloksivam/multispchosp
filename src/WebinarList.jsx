import React, { useState } from 'react';
import WebinarCard from './WebinarCard';
import Pagination from './Pagination';

const WebinarList = ({ webinars }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const webinarsPerPage = 5;

  const upcomingWebinars = webinars.filter((webinar) => new Date(webinar.date) > new Date());
  const pastWebinars = webinars.filter((webinar) => new Date(webinar.date) <= new Date());

  // Pagination logic for upcoming webinars
  const indexOfLastUpcoming = currentPage * webinarsPerPage;
  const indexOfFirstUpcoming = indexOfLastUpcoming - webinarsPerPage;
  const currentUpcomingWebinars = upcomingWebinars.slice(indexOfFirstUpcoming, indexOfLastUpcoming);

  // Pagination logic for past webinars
  const indexOfLastPast = currentPage * webinarsPerPage;
  const indexOfFirstPast = indexOfLastPast - webinarsPerPage;
  const currentPastWebinars = pastWebinars.slice(indexOfFirstPast, indexOfLastPast);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="med_tittle_section">
        <div className="med_img_overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="med_tittle_cont_wrapper">
                <div className="med_tittle_cont">
                  <h1>Webinars</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section_head">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 col-lg-offset-2">
              <div className="about_heading_wraper_4 text-center med_bottompadder50_4 wow fadeInDown" data-wow-delay="0.5s">
                <h1 className="med_bottompadder10_4">DEEPMIND HOSPITAL Webinar Series</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-xs-12 col-sm-12 col-lg-offset-2">
            <div className="neurology_text_wrapper">
              <p>
                The DEEPMIND HOSPITAL has created these webinars to provide practical information for hospitals and health systems looking to participate in the recent Center for Medicare and Medicaid Services (CMS) Acute Hospital Care at Home initiative.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h1 style={{ color: '#ef5b3f', fontSize: '36px', padding: '20px', fontWeight: 'bold' }}>
        Upcoming Webinars
      </h1>

      {currentUpcomingWebinars.length > 0 ? (
        currentUpcomingWebinars.map((webinar) => (
          <WebinarCard key={webinar.id} {...webinar} isUpcoming={true} />
        ))
      ) : (
        <p>No upcoming webinars available.</p>
      )}

      {/* Pagination for upcoming webinars */}
      <Pagination
        totalWebinars={upcomingWebinars.length}
        webinarsPerPage={webinarsPerPage}
        currentPage={currentPage}
        paginate={paginate}
      />

      <h1 style={{ color: '#ef5b3f', fontSize: '36px', padding: '20px', fontWeight: 'bold' }}>
        Past Webinars
      </h1>

      {currentPastWebinars.length > 0 ? (
        currentPastWebinars.map((webinar) => (
          <WebinarCard key={webinar.id} {...webinar} isUpcoming={false} />
        ))
      ) : (
        <p>No past webinars available.</p>
      )}

      {/* Pagination for past webinars */}
      <Pagination
        totalWebinars={pastWebinars.length}
        webinarsPerPage={webinarsPerPage}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>
  );
};

export default WebinarList;
