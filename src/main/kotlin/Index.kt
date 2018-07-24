import bindings.Admin
import bindings.Functions

external val exports: dynamic


data class Notification(val message:String)
data class MessagingPayload(val data: dynamic, val notification: Notification)
data class Data(val sessionId: String, val transactionId: String)

fun main(args: Array<String>) {
    Admin.initializeApp(Functions.config().firebase)

    exports.push = Functions.https.onRequest { req, res ->

        val err = when {
            req.body.fcmToken == null -> "posted JSON must contain fcmToken"
            req.body.transactionId == null -> "posted JSON must contain transactionId"
            req.body.sessionId == null -> "posted JSON must contain sessionId"
            req.body.dappName == null -> "posted JSON must contain dappName"
            else -> null
        }

        if (err != null) {
            res.status(500).send("error: $err")
            return@onRequest
        }
        val message = Data(req.body.sessionId, req.body.transactionId)

        Admin.messaging().sendToDevice(
                token = req.body.fcmToken,
                payload = MessagingPayload(message, Notification(req.body.dappName))
        ).then {
            res.status(200).send("done: " + it )
        }.catch {
            res.status(500).send("Error: " + it)
        }

    }

}