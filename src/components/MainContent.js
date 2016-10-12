import React from 'react';
import TicketStuffContainer from './TicketStuffContainer';
import Venue from './Venue';
import ShowInfo from './ShowInfo';

const MainContent = (props) => {
  return (
    <div className="main">

     <p className="tagline">{props.tagline}</p>
      <p className="event-description">{props.eventDescription}</p>
      <p className="episode-title">{props.episodeTitle}</p>
      <p className="episode-summary"><span>{props.episodeSummary}</span></p>
      <TicketStuffContainer />
      <Venue />
      <ShowInfo
        showDate="Friday November 18th"
        showTime="SHOW STARTS AT 8:00 PM"
      />
    </div>
    )
}

MainContent.propTypes = {
  tagline: React.PropTypes.string.isRequired,
  eventDescription: React.PropTypes.string.isRequired,
  episodeTitle: React.PropTypes.string.isRequired,
  episodeSummary: React.PropTypes.string.isRequired
}

export default MainContent;