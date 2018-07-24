package bindings

@JsModule("firebase-admin")
@JsNonModule
external object Admin {
    fun initializeApp(config: dynamic)
    fun database(): Database
    fun messaging(): Messaging
}