// Menu data structure



//PART 1
// 1 Select and cache the <main> element in a variable named mainEl.

const mainEl = document.querySelector('main');
// 2 Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
mainEl.style.backgroundColor = 'var(--main-bg, #4a4e4d)';

// 3 Set the content of mainEl to . There are a variety of ways to do this; pick whichever one that you think works best in this situation.
mainEl.innerHTML = '<h1>DOM Manipulation</h1>'; 
//4 Add a class of flex-ctr to mainEl.

mainEl.classList.add ('flex-ctr')


//PART 2 CREATING A MENU BAR
//Set the height of the topMenuEl element to be 100%.
const topMenuEl = document.getElementById("top-menu");
//Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height = ('100%');
//Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom 
topMenuEl.style.backgroundColor = 'var(--top-menu-bg, #0e9aa7)'
//Add a class of flex-around to topMenuEl.
topMenuEl.classList.add('flex-around')

console.log(topMenuEl)


//PART III Creating the Submenu


var menuLinks = [
  { text: 'about', href: '/about' },
  { text: 'catalog', href: '/catalog' },
  { text: 'orders', href: '/orders' },
  { text: 'account', href: '/account' },
];
 menuLinks.forEach(link => {
 console.log(link);

 let a = document.createElement('a')

 a.setAttribute = ("href",link.href)
 a.textContent = link.text 
 topMenuEl.appendChild(a)

 });



// //Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
const subMenuEl = document.getElementById('sub-menu')
// //Set the height subMenuEl element to be "100%".
subMenuEl.style.height = ('100%')
// //Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg: #3da4ab;)'
// //Add the class of flex-around to the subMenuEl element.
subMenuEl.classList.add("flex-around")
// //Set the CSS position property of subMenuEl to the value of absolute.
subMenuEl.style.position = ('absolute')
// //Set the CSS top property of subMenuEl to the value of 0.
subMenuEl.style.top= ('0')

console.log(subMenuEl)

//Part 4: Adding Menu Interaction
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

//1. Select and cache the all of the <a> elements inside of 
// topMenuEl in a variable named topMenuLinks.


const topMenuLinks = topMenuEl.querySelectorAll('a')

//2 Attach a delegated 'click' event listener to topMenuEl.
topMenuEl.addEventListener('click', (event) => {
  event.preventDefault()

  const clickedLink = event.target;
  if (clickedLink.tagName !== 'A') {
    return clickedLink;
  }

 console.log(clickedLink.textContent)

 clickedLink.classList.toggle('active')

   topMenuLinks.forEach(link=> {
    // If this linkElement is not the one that was clicked
    if (link!== clickedLink) {
      link.classList.remove('active');
    }
  });

  if (clickedLink.classList.contains('active')) {
      for (let link of menuLinks) {
      if (link.text === clickedLink.textContent) {
        if ("subLinks" in link) {
          buildSubmenu(link.subLinks)
          subMenuEl.style.top = "100%"
        }
      }
    
      }
  
} else {
    subMenuEl.style.top = '0'

  }
});

//function called buildSubmenu
function buildSubmenu(submenu) {
  subMenuEl.innerHTML = ""
  for (let link of submenu) {
    let a = document.createElement("a")
    a.setAttribute("href", link.href)
    a.textContent = link.text
    subMenuEl.appendChild(a)
  }
}


//Attach a delegated 'click' event listener to subMenuEl.

subMenuEl.addEventListener('click', (event) => {
event.preventDefault()
const clicked = event.target;

if(clicked.tagName !== 'A')
return clicked;

console.log(clicked.textContent)
// the event listener should set the CSS top property of subMenuEl to 0.
 subMenuEl.style.top = '0';

//Remove the active class from each <a> element in topMenuLinks.

   topMenuLinks.forEach(link=> {
    // If this linkElement is not the one that was clicked
    if (link!== clicked) {
      link.classList.remove('active');
    }
  });
//Update the contents of mainEl, within an <h1>, to the contents of the <a> element clicked within subMenuEl.
  mainEl.innerHTML= `<h1>${clicked.textContent}</h1>`

});

