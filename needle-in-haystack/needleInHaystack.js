module.exports = function needleInHaystack(haystack) {
    const needle = haystack.includes("needle")
      if(needle === true){
        return haystack.indexOf("needle");
      }  
      else {
        return false;
      }
}