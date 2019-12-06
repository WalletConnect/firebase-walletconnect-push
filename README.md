# Push Notification Webhook (Firebase Cloud Function)

This is a WalletConnect push notification webhook you can deploy as a firebase cloud function.

## Setup

**Step 1 -** Change directory and Install dependencies

```
cd functions && npm install
```

**Step 2 -** Authenticate

```
npx firebase login
```

**Step 3 -** Initiate Firebase and Select your project

```
npx firebase use --add
```

**Step 4 -** Generate service account json file

Go to this [link](https://console.firebase.google.com/project/_/settings/serviceaccounts/adminsdk), generate a service account then generate a private key and download it. Copy file to [src/service-account.json](src/service-account.json)

**Step 5 -** Deploy function to Firebase

```
npm run deploy
```

**Step 6 -** Visit this link and enable Firebase Cloud Messaging API

Open 
[https://console.developers.google.com/apis/api/fcm.googleapis.com/overview?project=_](https://console.developers.google.com/apis/api/fcm.googleapis.com/overview?project=_) select your project then enable Firebase Cloud Messaging API.

Features:
- [X] registration and push notification endpoints 
- [X] integration with FCM, for push notifications
- [ ] integration with PushKit for better support on iOS
- [ ] add logging on errors, for monitorig purposes
- [ ] scheduled function for database cleanup
- [ ] github workflow for automatic function deployment

# License

MIT
