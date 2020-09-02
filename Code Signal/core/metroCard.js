function metroCard(lastNumberOfDays) {
const days= [31,28,31,30,31,30,31,31,30,31,30,31];
if(lastNumberOfDays===31){
    return [28,30,31];
}
if(lastNumberOfDays===28){
    return [31];
}
if(lastNumberOfDays===30){
    return [31];
}
}
