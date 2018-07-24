package bindings

// https://firebase.google.com/docs/reference/functions/functions.https
// https://expressjs.com/en/api.html#res
// https://expressjs.com/en/api.html#req

external interface HttpsFunction {
    fun onRequest(handler: (Request, Response) -> Unit): HttpsFunction
}

external interface Request {
    val query: dynamic
    val body: dynamic
}

external interface Response {
    fun status(code: Int): StatusCode
}

external interface StatusCode {
    fun send(message: String)
}
