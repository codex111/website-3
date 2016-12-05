import React from 'react';
import { CTASection, Footer, PageHeader, PageHelmet, ArchitecturePresentationSection } from '../../components';

export default () => {
  const { redirect_uri } = APP_CONFIG;

  return (
    <div>
      <PageHelmet
        title="Syncano Serverless Architecture"
        mixpanelTitle="Serverless Architecture"
        description={`Take a look at this 3D interactive presentation that explains our platform architecture. Click to
          explore!`}
        ogImageSrc={`${redirect_uri}${require('./og-image.png')}`}
        twitterImageSrc={`${redirect_uri}${require('./twitter-image.png')}`}
      />
      <PageHeader
        headline="Syncano Serverless Architecture"
        textline={`Take a look at this 3D interactive presentation that explains our platform architecture. Click to
          explore!`}
      />
      <ArchitecturePresentationSection />
      <CTASection />
      <Footer />
    </div>
  );
};