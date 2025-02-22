import React from 'react';
import './WebinarCard.css';

const WebinarCard = ({ title, date, description, link, isUpcoming }) => {
  return (
    <div className="webinar-card">
      <h2 className="webinar-title">{title}</h2>
      <p className="webinar-date">{new Date(date).toLocaleDateString()}</p>
      <p className="webinar-description">{description}</p>
      <a href={link} className={isUpcoming ? 'webinar-button upcoming' : 'webinar-button recording'}>
        {isUpcoming ? 'Register' : 'Watch Recording'}
      </a>
    </div>
  );
};

export default WebinarCard;
