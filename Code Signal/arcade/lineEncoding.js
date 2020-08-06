function lineEncoding(s) {
let lastCut= 0;
const separated =[];
let result = "";
for (let i=1; i<s.length; i++){
    if(s[i]!==s[i-1]){
        const section = s.slice(lastCut,i);
        separated.push(section);
        lastCut = i;
    }
}
console.log(separated);

for(let h=s.length-1; h>=0; h--){
    if(s[h]!==s[h-1]){
        const end = s.slice(h,s.length);
        separated.push(end);
        break;
    }
}
console.log(separated);
for(let k=0; k<separated.length; k++){
    if(separated[k].length>1){
        result+=(separated[k].length+separated[k][0]);
    } else {
        result+=separated[k][0];
    }
}
console.log(result);
return result;
}
