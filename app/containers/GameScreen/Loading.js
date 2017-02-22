/*
 *
 * Loading
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import InfoContainer from 'components/InfoContainer';

function Loading() {
  return (
    <InfoContainer>
      <Helmet title="Please wait" />
      loading, connecting
    </InfoContainer>
  );
}

export default Loading;
