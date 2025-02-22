import React from "react";
import "../src/App.css"
import { events, campaigns, newsItems, workshops, galleryItems } from "./constants";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Activities = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000
    };
    return (
        < >

            <div className="activitiesBody">
                <section className="intro">
                    <h1 className="title">Event & Activities</h1>
                    <p>Stay updated with our latest events, workshops, campaigns, and news.</p>
                </section>
                <section className="upcoming-events">
                    <h2>Upcoming Events</h2>
                    <ul>
                        {events.map((event, index) => (
                            <li className="event-item" key={index}>
                                <div className="event-details">
                                    <h3 className="title">{event.description}</h3>
                                    <p>Event Date & Time: {event.date} at {event.time}</p>
                                    <p>Location: {event.location}</p>
                                </div>
                                <img src={event.img} alt={event.description} className="event-img" />
                            </li>
                        ))}
                    </ul>
                </section>


                <section className="workshops">
                    <h2>Educational Workshops and Seminars</h2>
                    <ul>
                        {workshops.map((workshop, index) => (
                            <li className="event-item" key={index}>
                                <div className="event-details">
                                    <h3 className="title">{workshop.title}</h3>
                                    <p>Target Audience: {workshop.audience}</p>
                                    <p>Details: {workshop.details}</p>
                                    <p>Speakers: {workshop.speakers}</p>
                                </div>
                                <img src={workshop.image} alt={workshop.title} className="event-img" />
                            </li>
                        ))}
                    </ul>
                </section>


                <section className="special-campaigns">
                    <h2>Special Campaigns</h2>
                    <ul>
                        {campaigns.map((campaign, index) => (
                            <li className="event-item" key={index}>
                                <div className="event-details">
                                    <h3 className="title">{campaign.title}</h3>
                                    <p>{campaign.details}</p>
                                </div>
                                <img src={campaign.image} alt={campaign.title} className="event-img" />
                            </li>
                        ))}
                    </ul>
                </section>

                <section className="gallery">
                    <h2>Photo and Video Gallery</h2>
                    <div className="igallery">
                        <Slider {...settings} className="slider">
                            {galleryItems.map((item, index) => (
                                <div key={index} className="gallery-item">
                                    <img src={item.src} alt={item.caption} />
                                    <p>{item.caption}</p>
                                </div>
                            ))}
                        </Slider>
                    </div>

                </section>

                <section className="news">
                    <h2>News and Announcements</h2>
                    <ul>
                        {newsItems.map((item, index) => (
                            <li className="event-item" key={index}>
                                <div className="event-details">
                                    <h3 className="title">{item.title}</h3>
                                    <p>{item.date}</p>
                                    <p>{item.description}</p>
                                </div>
                                <img src={item.image} alt={item.title} className="event-img" />
                            </li>
                        ))}
                    </ul>
                </section>
            </div >

        </>
    );
};

export default Activities;


