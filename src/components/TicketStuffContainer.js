import React from 'react';

const TicketStuffContainer = (props) => {
  return (
    <div className="ticket-stuff-container">
    <div className="buy-ticket">
      <a href="https://www.eventbrite.com/e/the-hollywood-moguls-staged-reading-tickets-28513460528?aff=utm_source%3Deb_email%26utm_medium%3Demail%26utm_campaign%3Dnew_event_email&utm_term=eventurl_text" className="btn btn-depth" target="_blank">Buy Ticket</a>
      </div>
      <div className="eventbrite"><a href="https://www.eventbrite.com/e/the-hollywood-moguls-staged-reading-tickets-28513460528?aff=utm_source%3Deb_email%26utm_medium%3Demail%26utm_campaign%3Dnew_event_email&utm_term=eventurl_text" target="_blank"><img src="eventbrite-trans-logo.png" alt="Eventbrite Logo" width="143" height="59" /></a></div>
    </div>
    )
}

export default TicketStuffContainer;