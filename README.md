# What?

This is a wallet connect push server you can deploy as a firebase function.

# Setup

#### Step 0

Install firebase-tools (only needed if not yet installed).

```
npm install -g firebase-tools
```

#### Step 1

Run the following command to initiate firebase

```
firebase use --add
```

Then select the project that contains the app that should receive the push notifications.

#### Step 2

Change to functions directory

```
cd functions
```

#### Step 3

Install dependencies

```
npm install
```

# Deployment

```
npm run deploy
```

# License

MIT
