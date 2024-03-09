/*
? У змінній minutes лежить число від 0 до 59.
? Визначте, в яку чверть години потрапляє це число (у першу, другу, третю чи четверту).
? [0 до 15) - перша чверть години
? [15 до 30) - друга чверть години
? [30 до 45) - третя чверть години
? [45 до 60) - четверта чверть години
*/

// const number = 58;
// let message;
// if (number > 0 && number <= 15) {
//     message = 'перша чверть години';
// } else if (number > 15 && number <= 30) {
//     message = 'друга чверть години' ;
// } else if (number > 30 && number <= 45) {
//     message = 'третя чверть години';
// } else { message = 'четверта чверть години' }

// console.log(message);
/*
? Напиши скрипт, який перевіряє можливість відкрити чат з користувачем.
? Для цього, користувач має бути:
? - другом
? - онлайн
? - без режима не турбувати
 */
// const isFriend = true;
// const isOnline = true;
// const isBlocked = true;
// let canChat;
// if (isFriend && isOnline && !isBlocked) {
//     console.log('can chat')
// } else { console.log('cannot chat')}


/*
? Напиши скрипт перевірки підписки користувача при доступі до контента
? - Є три типа підписки: free, pro і vip.
? - Отримати доступ можуть тільки користувачі pro і vip
 */

// const subscription = 'vip';

// switch (subscription) {
//     case 'free': {
//         alert('no access');

//         break;
//     }
//     case 'pro':
//     case 'vip': {
//         alert('access allowed');
//         break;
//     }
        
//     default: {
//         alert('authorization needed');
//     }
// }

// console.log(true && 3); 

// console.log(false && 3); 

// console.log(true && 4 && 'kiwi');

// console.log(true && 0 && 'kiwi'); 

// console.log(true || 3); 

// console.log(true || 3 || 4); 

// console.log(true || false || 7);

// console.log(null || 2 || undefined);

// console.log((1 && null && 2) > 0); 

// console.log(null || (2 && 3) || 4);

