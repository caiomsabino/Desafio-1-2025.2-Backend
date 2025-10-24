function rot13(str) {
  str = str.toUpperCase().split('');

  const letras = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    let index = letras.indexOf(char);
    if (index !== -1) {
      str[i] = letras[(index + 13) % 26];
    }
  }

  return str.join('');
}

rot13("SERR PBQR PNZC"); 
