'use strict'

const functions = require('firebase-functions')
const admin = require('firebase-admin')

admin.initializeApp()

exports.push = functions.https.onRequest(async (req, res) => {
  const pushType = req.body.pushType
  if (!pushType) {
    res.status(500).send('Error: pushType is required')
  } else if (pushType.toLowerCase() !== 'fcm') {
    res.status(500).send(`Push type ${pushType} is not suported`)
  }

  const pushToken = req.body.pushToken
  if (!pushToken) {
    res.status(500).send('Error: pushToken is required')
  }

  const transactionId = req.body.transactionId
  if (!transactionId) {
    res.status(500).send('Error: transactionId is required')
  }

  const sessionId = req.body.sessionId
  if (!sessionId) {
    res.status(500).send('Error: sessionId is required')
  }

  const dappName = req.body.dappName
  if (!dappName) {
    res.status(500).send('Error: dappName is required')
  }

  admin
    .messaging()
    .send({
      token: pushToken,
      notification: {
        title: 'Transaction',
        body: dappName + ' is requesting transaction to be signed'
      },
      data: {
        sessionId,
        transactionId
      }
    })
    .then(() => {
      res.status(200).send('Successfully pushed notification to device')
    })
    .catch(() => {
      res.status(500).send('Error: Failed to push notification to device')
    })
})
