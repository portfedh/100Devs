// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. 
// They would like your help with an application form that will tell prospective members which category they will be placed.
// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. 
// In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.


// Input will consist of a list of pairs. 
// Each pair contains information for a single potential member. 
// Information consists of an integer for the person's age and an integer for the person's handicap.
// Example:
// input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]


function openOrSenior(data){
  // Create output array
  let outputArray = []

  data.forEach(element => {
    // Get age & handicap
    let age = element[0]
    let handicap = element[1]
    // Determine if open or senior
    if(age>54 && handicap >7){
      // Push result to array
      outputArray.push('Senior')
    } else {
      // Push result to array
      outputArray.push('Open')
    }
  });
  // Return output array with results
  return outputArray
}

// openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]])
// Result -> ['Open', 'Senior', 'Open', 'Senior']

