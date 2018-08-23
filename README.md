# What?

This is a wallet connect push server you can deploy as a firebase function.

# Setup

#### Step 0

Install firebase-tools (only needed if not yet installed).
run:

```
npm install -g firebase-tools
```

#### Step 1

run:

```
firebase init
```

Then select Javascript with NO Eslint and install dependencies with npm

#### Step 2

run:

`firebase use --add`

Then select the project that contains the app that should receive the push notifications.

#### Step 3

run:

```
cd functions
npm install
cd ..
```

# Deployment

run:

`./gradlew deploy`

# License

MIT
