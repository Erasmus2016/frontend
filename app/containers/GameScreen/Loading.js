/*
 *
 * Loading
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

function Loading() {
  return (
    <div>
      <Helmet title="Please wait" />
      loading, connecting
    </div>
  );
}

export default Loading;
