const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

const p = document.querySelector('p');

function makeGreen() {
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('안녕');

// Interpolated
console.log('안녕, %s', '나야');

// Styled
console.log('%c 좋아!', 'font-size: 30px; background: mistyrose;');

// warning!
console.warn('이런..');

// Error :|
console.error('좋지 않아');

// Info
console.info('점심에 치킨 먹을거다!')

// Testing
console.assert(1 === 2, '틀렸습니다')

// clearing
// console.clear();

// Viewing DOM Elements
console.dir(p);

// Grouping together
dogs.forEach(dog => {
  console.group(`${dog.name}`);

  console.log(`안녕? 나는 ${dog.name}.`);
  console.log(`안녕? 나는 ${dog.name}이고, ${dog.age}살이야.`);
  console.log(`안녕? 나는 ${dog.name}이고, 개 나이로는 ${dog.age * 7}살이야.`);

  console.groupEnd(`${dog.name}`);
})

// counting
console.count('짬뽕');
console.count('짬뽕');
console.count('짜장면');
console.count('짬뽕');
console.count('짜장면');
console.count('짜장면');
console.count('짜장면');
console.count('짬뽕');

// timing
console.time('fetching data')
fetch('https://api.github.com/users/seulgiyoon')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.table(data);
  });
