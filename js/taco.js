Array.prototype.random = function () {
  return this[Math.floor((Math.random()*this.length))];
}

let prophet_teachings = [];
prophet_teachings.push('"El ocio está en el corazón: si tus intenciones se ven manchadas por el side hustle, el dios del ocio te ha de juzgar; pero si tus intenciones son nomás pinches perder el tiempo de formas complicadas, verá tu haraganería con buenos ojos."');
writeToScreen(randomPad(prophet_teachings[0], 1, 31));

function writeToScreen(message) {
  const channels = {};
  channels.red = document.querySelector('.dynamic-text__channel--r');
  channels.green = document.querySelector('.dynamic-text__channel--g');
  channels.blue = document.querySelector('.dynamic-text__channel--b');

  for(let channel in channels) {
    channels[channel].innerText = '';
  }
  
  let i = 0;
  for(let char of message) {
    const ct = document.createElement('span');
    ct.classList.add(`c-${i+1}`);
    ct.classList.add('character');
    ct.innerText = char;
    channels.red.appendChild(ct);
    i++;
  }

  channels.green.innerHTML = channels.red.innerHTML;
  channels.blue.innerHTML = channels.red.innerHTML;
}

/**
 * Takes an array of words and pads it with random block-type
 * unicode characters to the given length
 */
function randomPad(words, min_space, max_space) {
  const words_array = words.split(' ');
  const pad_chars = ['░', '▒', '▓', '▖', '▗', '▘', '▙', '▚'];
  const padding_material = getPaddingMaterial(pad_chars, max_space * 20);

  let output = '';
  for(let w of words_array) {
    output += w;
    const pad_length = min_space + (Math.round(Math.random() * (max_space - min_space)));
    const cut_from = Math.floor(Math.random() * (padding_material.length - pad_length));
    output += padding_material.slice(cut_from, cut_from+pad_length);
  }
  
  return output;
}


/*
 * Produces a random string composed by the given chars
 */
function getPaddingMaterial(chars, length) {
  let output = '';
  for(let i=0; i < length; i++) {
    output += chars.random();
  }

  return output;
}

