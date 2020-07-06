/**
 * The teenager answer all the message
 */
class Bob {
    /**
     * Return the answer from teenager
     * NOTE that if the request is all uppercase and question return a new message
     * 
     * @param msg message to teenager
     */
    hey(msg: string) {
        let result = "";
        if (msg.trim().endsWith('?')) {
            if (this.isUpperCase(msg)) {
                result = "Calm down, I know what I\'m doing!";
            } else {
                result = "Sure.";
            }
        } else if (this.isUpperCase(msg)) {
            result = 'Whoa, chill out!';
        } else if (msg.trim() === '') {
            result = 'Fine. Be that way!';
        } else {
            result = 'Whatever.';
        }
        return result;
    }

    /**
     * Return true if all the message is uppercase and not number
     * 
     * @param str message to check
     */
    isUpperCase(str: string) {
        return !/[a-z]/.test(str) && /[A-Z]/.test(str)
    }
}

export default Bob