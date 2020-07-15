function variableName(name) {
if(name[0]=== '0' ||name[0]=== '1' ||name[0]=== '2' ||name[0]=== '3' ||name[0]=== '4' ||name[0]=== '5' ||name[0]=== '6' ||name[0]=== '7' ||name[0]=== '8' ||name[0]=== '9'){
    return false;
}
for (let i=0; i<name.length;i++){
    if(name[i]==='!' ||name[i]==='@' ||name[i]==='#' ||name[i]==='~' ||name[i]==='%' ||name[i]==='^' ||name[i]==='&' ||name[i]==='*' ||name[i]==='(' ||name[i]===')' ||name[i]==='-' ||name[i]==='+' ||name[i]==='=' ||name[i]==='[' ||name[i]===']' ||name[i]==='{' ||name[i]==='}' ||name[i]==='|' ||name[i]==='\\' ||name[i]==='/' ||name[i]==='?' ||name[i]==='<' ||name[i]==='>' ||name[i]===',' ||name[i]==='.' ||name[i]==='`' ||name[i]==='"' ||name[i]==="'"||name[i]===" "){
        return false;
    }
}
return true;
}
