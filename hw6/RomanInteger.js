function romanToInteger(romanNumber) {
    
  
  
    let map = new Map();
      map.set("I", 1);
      map.set("V", 5);
      map.set("X", 10);
      map.set("L", 50);
      map.set("C", 100);
      map.set("D", 500);
      map.set("M", 1000);
    
    let answer = map.get(romanNumber[romanNumber.length - 1]);
    for (let m = romanNumber.length - 2; m >= 0; m--) {
      let num = romanNumbers[romanNumber.charAt(m)];
      if (map.get(romanNumber[m]) >= map.get(romanNumber[m + 1])) sum += map.get(romanNumber[m]);
      else answer -= map.get(romanNumber[m]);
    }
    return answer;
  }