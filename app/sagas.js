import landingPageSagas from 'containers/LandingPage/sagas';

export default function getSagas() {
  const sagas = [
    landingPageSagas,
  ];

  return [].concat(...sagas);
}
