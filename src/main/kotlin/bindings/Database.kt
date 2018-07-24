package bindings

// https://firebase.google.com/docs/reference/js/firebase.database.Database
// https://firebase.google.com/docs/reference/js/firebase.database.Reference
// https://firebase.google.com/docs/reference/js/firebase.database.Query
// https://firebase.google.com/docs/reference/functions/functions.database.RefBuilder#onWrite

external interface Database {
    fun ref(path: String): Reference
}

external interface Reference {
    val ref: Reference
    val key: String?
    val parent: Reference
    val root: Reference

    fun child(path: String): Reference
    fun push(value: Any?, onComplete: ((FirebaseError) -> Unit)? = definedExternally) : Promise<Any>
    fun set(value: Any): Promise<Unit>

    fun <T> onWrite(handler: (Event<T>) -> Unit) : CloudFunction
    fun <T> once(type: String): Promise<DeltaSnapshot<T>>
}

