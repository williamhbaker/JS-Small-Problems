let logInBox = function(strMessage) {
  let length = strMessage.length;
  console.log('+-' + '-'.repeat(length) + '-+');
  console.log('| ' + ' '.repeat(length) + ' |');
  console.log('| ' + strMessage + ' |');
  console.log('| ' + ' '.repeat(length) + ' |');
  console.log('+-' + '-'.repeat(length) + '-+');
};

logInBox('To boldly go where no one has gone before.');
logInBox('');