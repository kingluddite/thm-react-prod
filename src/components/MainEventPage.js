import React from 'react';
import Header from './Header';
import Countdown from './Countdown';
import MainContent from './MainContent';
import Footer from './Footer';

class MainEventPage extends React.Component {

	render( ) {

    let OPTIONS = { endDate: '11/18/2016 10:12 AM', prefix: 'until the Show!' };

		return (
      <div>
  			<Header />
        <Countdown options={OPTIONS} />
        <MainContent
          tagline="Breaking Into Hollywood Can't Be That Hard"
          eventDescription="Live Interactive Reading of the Television Sitcom: 'The Hollywood Moguls'"
          episodeTitle="Pilot episode: 'Rob Not Robyn'"
          episodeSummary="Three childhood friends leave New Jersey and move to Hollywood to pursue their lifelong dream of writing, acting and directing the greatest film in the history of entertainment." />
        <Footer />
     </div>
   )
	}
}

MainEventPage.contextTypes = {
  router: React.PropTypes.object
}

export default MainEventPage;