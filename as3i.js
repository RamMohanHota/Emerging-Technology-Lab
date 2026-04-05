let palindrome = (num) => {
    let rev = 0;
    let originalNum = num;
    while(num > 0){
        let rem = num%10;
       rev = rev*10 + rem;
       num = parseInt(num/10);
    }
     return rev == originalNum;
}
let num=123;
if(palindrome(num)){
    console.log(`${num} is a palindrome number`);
} else {
    console.log(`${num} is not a palindrome number`);
}