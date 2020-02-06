var name = prompt('What is your name?');
if (name.endsWith('!')) {
  name = name.slice(0, -1);
  console.log(`HELLO ${name.toUpperCase()}. HOW ARE YOU?`);
} else {
  console.log("Hello " + name + '.');
};


"catastrophe".match(/^cat$/)
"cat".match(/^cat$/)
"cat vs. cat".match(/^cat$/)
