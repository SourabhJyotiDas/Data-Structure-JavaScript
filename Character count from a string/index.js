let str = "sssooo"

const countStr = (str) => {
      let output = {};

      for (let i = 0; i < str.length; i++) {

            if (!output[str[i]]) {
                  output[str[i]] = 1;
            } else {
                  output[str[i]]++;
            }
      }
      return output;
}

console.log(countStr(str));