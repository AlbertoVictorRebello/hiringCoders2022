function makeFunc() {
    var name = 'Mozilla';
    function displayName(optionalParam?: string) {
        if (optionalParam) {
            name = optionalParam;
        }
        console.log(name);
    }
    return displayName;
  }
  
  var myFunc = makeFunc();
  myFunc();
  myFunc("Chrome");

  console.log(myFunc.prototype);
  