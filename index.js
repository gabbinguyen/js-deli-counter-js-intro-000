function takeANumber (katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}
// .push() adds name to the end of the array (i.e. end of the customer line)
// .length property is used to identify the number of elements in the array
// template literal placeholder is used and is replacd by the new values (name of the customer and the new current line)

function nowServing (katzDeliLine) {
  if (katzDeliLine.length > 0) {
    var newLine = katzDeliLine.shift();
    return `Currently serving ${newLine}.`
  } else {
    return `There is nobody waiting to be served!`
  }
}
// .shift() removes the beginning of the array (i.e. first person in line)
// if/else identifies if there is a line or not and uses the correct statement for either scenario

function currentLine(katzDeliLine) {
  var line = []
  if (katzDeliLine.length > 0) {
    for (var i = 0; i < katzDeliLine.length; i++) {
      line.push(` ${i+1}. ${katzDeliLine[i]}`);
    } return `The line is currently:${line}`
  } else {
      return `The line is currently empty.`
  }
}
// for loop iterates through katzDeliLine
// if/else identifies if there is a line or not and uses the correct statement for either scenario
