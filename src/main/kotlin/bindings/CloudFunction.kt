package bindings

// https://firebase.google.com/docs/reference/functions/functions.Event#params
// https://firebase.google.com/docs/reference/functions/functions.database.DeltaSnapshot

external interface CloudFunction

external interface Event<T> {
    val data: DeltaSnapshot<T>
    val params: dynamic
}

external interface DeltaSnapshot<T> {
    fun `val`(): T
}