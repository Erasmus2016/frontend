import landingPageSagas from 'containers/LandingPage/sagas';
import joininScreenSagas from 'containers/JoininScreen/sagas';

export default function getSagas() {
  const sagas = [
    landingPageSagas,
    joininScreenSagas,
  ];

  return [].concat(...sagas);
}
