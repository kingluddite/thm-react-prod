import React from 'react';

const ShowInfo = (props) => {
  return (
    <div className="show-info">
      <h3 className="show-date">{props.showDate}</h3>
      <p className="show-time">{props.showTime}</p>
    </div>
    )
}

ShowInfo.propTypes = {
  showDate: React.PropTypes.string.isRequired,
  showTime: React.PropTypes.string.isRequired
}

export default ShowInfo;