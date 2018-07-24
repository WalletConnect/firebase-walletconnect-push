What?
=====

This is a wallet connect push server you can deploy as a firebase function.

Deployment
==========

Step 0:

Install firebase-tools (only needed if not yet installed).

 `npm install -g firebase-tools`

Step 1:

run:

 `firebase use --add`

Then select the project that contains the app that should receive the push notifications.

Step 2:

run:

 ```
 cd functions
 npm install
 cd ..
 ```

Step 3:

 `./gradlew deploy`

License
=======

MIT
