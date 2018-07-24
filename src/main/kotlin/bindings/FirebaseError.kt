package bindings

// https://firebase.google.com/docs/reference/js/firebase.FirebaseError

external interface FirebaseError {
    val code: String
    val message: String
    val name: String
    val stack: String?
}