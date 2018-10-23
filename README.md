# Push Notification Webhook (Firebase Cloud Function)

This is a WalletConnect push notification webhook you can deploy as a firebase cloud function.

## Setup

**Step 0 -** Install firebase-tools and authenticate

```
# Instal firebase-tools
npm install -g firebase-tools

# Authenticate
firebase login
```

**Step 1 -** Initiate Firebase and Select your project

```
firebase use --add
```

**Step 2 -** Change directory and Install dependencies

```
cd functions && npm install
```

**Step 3 -** Deploy function to Firebase

```
npm run deploy
```

**Step 4 -** Visit this link and enable Firebase Cloud Messaging API

```
https://console.developers.google.com/apis/api/fcm.googleapis.com/overview?project=<PROJECT-NAME>
```

# License

MIT
