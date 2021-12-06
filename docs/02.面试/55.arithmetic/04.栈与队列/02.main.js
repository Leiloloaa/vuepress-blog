const isValid = function(s) {
    if ((s.length & 1) === 1) return false;
    let stack = [];
    for (let i = 0; i < s.length; i++) {
        let c = s[i];
        switch (c) {
            case '(':
                stack.push(')');
                break;
            case '[':
                stack.push(']');
                break;
            case '{':
                stack.push('}');
                break;
            default:
                if (c !== stack.pop()) {
                    return false;
                }
        }
        console.log(stack);
    }
    return stack.length === 0;
};

console.log(isValid('[{()}]'));