module.exports = function check(str, bracketsConfig) {
  var i,j,k;
  var brackets =[];
  for(i=0;i<bracketsConfig.length;i++){
    brackets.push(`${bracketsConfig[i][0]}${bracketsConfig[i][1]}`)
  }
  for(i=0;i<str.length*2;i++){
    for(j=0;j<str.length;j++){
      for(k=0;k<brackets.length;k++){
        str=str.replace(`${brackets[k]}`,'');
      }
    }
  }
  if(str==''){return true}
  else{return false}
}