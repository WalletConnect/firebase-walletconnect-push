'use strict'

const functions = require('firebase-functions')
const admin = require('firebase-admin')

admin.initializeApp()

exports.push = functions.https.onRequest(async function (req, res) {
  const pushType = req.body.pushType
  if (!pushType) {
    res.status(500).send('Error: pushType is required')
  } else if (pushType.toLowerCase() !== 'fcm') {
    res.status(500).send('Push type ' + pushType + ' is not suported')
  }

  const pushToken = req.body.pushToken
  if (!pushToken) {
    res.status(500).send('Error: pushToken is required')
  }

  const callId = req.body.callId
  if (!callId) {
    res.status(500).send('Error: callId is required')
  }

  const sessionId = req.body.sessionId
  if (!sessionId) {
    res.status(500).send('Error: sessionId is required')
  }

  const dappName = req.body.dappName
  if (!dappName) {
    res.status(500).send('Error: dappName is required')
  }

  const body = 'New call request from ' + dappName

  admin
    .messaging()
    .send({
      token: pushToken,
      data: {
        sessionId: sessionId,
        callId: callId
      }
    })
    .then(() => {
      res.status(200).send('Successfully pushed notification to device')
    })
    .catch((error) => {
      console.error(error)
      res.status(500).send('Error: Failed to push notification to device')
    })
})
