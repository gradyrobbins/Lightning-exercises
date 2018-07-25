let misc = [45, "I", true, null, "am", 3.56, "a", undefined, { catchphrase: "Oh hai, Mark"}, "JS", "rockstar"] ;


// and return a new array that contains only the strings. Log out the result.

misc.forEach(element => {
    if (typeof element === "string"){
        console.log(element)
    }
    
});


// from Klaus:
const strings = oldArray.filter(item => {
    const isString = (typeof item === 'string')
    return isString;
 })
 document.getElementById("wrapper").innerHTML = `${strings.join(" ")}`
 console.log(strings)