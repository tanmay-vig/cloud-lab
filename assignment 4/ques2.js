function palindrome(string) {
    n = string.length;
    for ( i = 0; i < n / 2; i++) {
        if (string[i] != string[n - i - 1]) {
            return false;
        }
    }
    return true;
}

let a = "tanmay"
if (palindrome(a)) {
    console.log("The string is a palindrome.");
}
else {
    console.log("The string is not a palindrome.");
}