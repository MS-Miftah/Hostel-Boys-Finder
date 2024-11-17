// import { friends } from "./info.js";

// for (let friend of friends) {
//   showFriend(friend);
// }

// function showFriend(friend) {
//  // creating data
//  const divFriend = document.createElement('div');
//  divFriend.className = 'friend';

//  const img = document.createElement('img');
//  img.src = `https://robohash.org/${friend.id}?set=set2`;
//  img.alt = friend.name;

//  const divTag = document.createElement('div');
//  divTag.className = 'tag'; 

//  const pName = document.createElement('h2');
//  pName.className = 'name';
//  pName.innerText = friend.name;

//  const pAddress = document.createElement('h2');
//  pAddress.className = 'address';
//  pAddress.innerText = friend.address;

//  // bundling data
//  divFriend.append(img, divTag);
//  divTag.append(pName, pAddress)

//  // sending to html
//  document.querySelector('.friends').append(divFriend);
// };

// function notFound () {
//  //creating not found
//  const divNotFound = document.createElement('div');
//  divNotFound.className = 'notFound';
//  divNotFound.style.display = 'none';

//  const img = document.createElement('img');
//  img.src = './src/sorry.png';
//  img.alt = 'Sorry!';

//  const msg = document.createElement('h1');
//  msg.innerText = 'No hostel Boys found!';

//  divNotFound.append(img, msg);
//  document.querySelector('.friends').append(divNotFound);
// }
// notFound();

// document
//  .querySelector('.search')
//  .addEventListener('keyup', (e) => {
//   const keyword = e.target.value.toLowerCase();
//   const friends = document.querySelectorAll('.friend');
//   let notFound = true;

//   for (let val of friends) {
//     const name = val.children[1].innerText.toLowerCase();
//     const address = val.children[2].innerText.toLowerCase();

//     if (name.includes(keyword) || address.includes(keyword)) {
//       val.style.display = 'grid';
//       notFound = false;
//     } else {
//       val.style.display = 'none';
//     }
//   }

//   if (notFound) {
//     document.querySelector('.notFound').style.display = 'block';
//   } else {
//     document.querySelector('.notFound').style.display = 'none';
//   }
//  })
import { friends } from "./info.js";

for (let friend of friends) {
  showFriend(friend);
}

function showFriend(friend) {
  // creating data
  const divFriend = document.createElement('div');
  divFriend.className = 'friend';

  const img = document.createElement('img');
  img.src = `https://robohash.org/${friend.id}?set=set2`;
  img.alt = friend.name;

  const divTag = document.createElement('div');
  divTag.className = 'tag';

  const pName = document.createElement('h2');
  pName.className = 'name';
  pName.innerText = friend.name;

  const pAddress = document.createElement('h2');
  pAddress.className = 'address';
  pAddress.innerText = friend.address;

  // bundling data
  divFriend.append(img, divTag);
  divTag.append(pName, pAddress);

  // sending to html
  document.querySelector('.friends').append(divFriend);
}

function notFound() {
  // creating not found message
  const divNotFound = document.createElement('div');
  divNotFound.className = 'notFound';
  divNotFound.style.display = 'none'; // hidden initially

  const img = document.createElement('img');
  img.src = './src/sorry.png';
  img.alt = 'Sorry!';

  const msg = document.createElement('h1');
  msg.innerText = 'No hostel Boys found!';
  msg.style.color = '#3B1E54';

  divNotFound.append(img, msg);
  document.querySelector('.friends').append(divNotFound);
}

notFound();

document.querySelector('.search').addEventListener('keyup', (e) => {
  const keyword = e.target.value.toLowerCase();
  const friends = document.querySelectorAll('.friend');
  let notFoundFlag = true;

  for (let val of friends) {
    const name = val.querySelector('.name').innerText.toLowerCase(); 
    const address = val.querySelector('.address').innerText.toLowerCase(); 

    if (name.includes(keyword) || address.includes(keyword)) {
      val.style.display = 'block';
      notFoundFlag = false;
    } else {
      val.style.display = 'none';
    }
  }

  // Show or hide the not found message
  if (notFoundFlag) {
    document.querySelector('.notFound').style.display = 'block';

  } else {
    document.querySelector('.notFound').style.display = 'none';
  }
});
