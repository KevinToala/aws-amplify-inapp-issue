import {Analytics, Notifications} from 'aws-amplify';
import {InAppMessageInteractionEvent} from '@aws-amplify/notifications';

import {Component, OnInit} from '@angular/core';

const {InAppMessaging} = Notifications;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'inapp-test';

  ngOnInit() {
    InAppMessaging.syncMessages();

    InAppMessaging.onMessageReceived((message) => {
      console.log("onMessageReceived===>", message);
      setTimeout(() => {
        InAppMessaging.notifyMessageInteraction(
          message,
          InAppMessageInteractionEvent.MESSAGE_DISPLAYED
        );
      }, 5000);
    });

    Analytics.record({
      name: 'modoIngresoApp',
    });
  }
}
