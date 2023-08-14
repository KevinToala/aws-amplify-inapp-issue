import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { Amplify } from 'aws-amplify';

const awsConfig = {
  Auth: {
    region: 'us-east-1',
    userPoolId: 'us-east-1_????????',
    userPoolWebClientId: '?????????',
    identityPoolId: 'us-east-1:????????'
  },
  Analytics: {
    AWSPinpoint: {
      appId: '==============',
      region: 'us-east-1',
      mandatorySignIn: false,
    }
  },
  Notifications: {
    InAppMessaging: {
      AWSPinpoint: {
        appId: '==============',
        region: 'us-east-1',
      }
    }
  },
};

Amplify.configure(awsConfig);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
