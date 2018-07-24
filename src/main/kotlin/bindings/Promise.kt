package bindings

// https://firebase.google.com/docs/reference/js/firebase.Promise

external interface Promise<T> {

    fun all(values: Array<Any>): Promise<Array<Any>>
    fun reject(error: Any): Promise<Any>
    fun resolve(value: T): Promise<T>
    fun catch(onReject: (FirebaseError) -> Unit)

    fun <R> then(onResolve: (T) -> R): Promise<R>
}
