package bindings

external interface Messaging {
    fun send(message: dynamic): Promise<Response>
    fun sendToDevice(token: String, payload: dynamic): Promise<String>
}
