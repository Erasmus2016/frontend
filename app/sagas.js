import landingPageSagas from 'containers/LandingPage/sagas';
import gameScreenSagas from 'containers/GameScreen/sagas'

export default function getSagas() {
  const sagas = [
    landingPageSagas,
    gameScreenSagas,
  ];

  return [].concat(...sagas);
}
