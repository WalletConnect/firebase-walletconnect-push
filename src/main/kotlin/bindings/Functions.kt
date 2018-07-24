package bindings

// https://firebase.google.com/docs/reference/functions/functions

@JsModule("firebase-functions")
@JsNonModule
external object Functions {
    fun config(): Config
    val https: HttpsFunction
    val database: Database
    val messaging: Messaging
}

external interface Config {
    val firebase: dynamic
}

