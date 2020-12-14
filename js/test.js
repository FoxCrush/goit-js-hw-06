// const players = [
//     { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
//     { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
//     { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
//     { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
//     { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
//   ];


// const countTotalTimePlayed = (array) => array.reduce((acc, {timePlayed}) => acc + timePlayed, 0)

// console.log( countTotalTimePlayed(players))

// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];


// const stats = tweets
//     .flatMap(tweet => tweet.tags)
//     .reduce(
//         (acc, tag) => ({
//             ...acc,
//             [tag]: acc[tag] ? acc[tag] + 1 : 1,
//         }),
//         {},
//     );

// console.log(stats);


// // Let's say we want to remove all the negative numbers
// // and split the odd numbers into an even number and a 1
// let a = [5, 4, -3, 20, 17, -33, -4, 18]
// //       |\  \  x   |  | \   x   x   |
// //      [4,1, 4,   20, 16, 1,       18]

// console.log( a.flatMap( (n) =>
// (n < 0) ?      [] :
// (n % 2 == 0) ? [n] :
//                [n-1, 1]
//                ))

// expected output: [4, 1, 4, 20, 16, 1, 18]
