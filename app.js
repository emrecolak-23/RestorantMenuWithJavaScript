const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img:
      "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img:
      "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img:
      "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img:
      "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img:
      "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img:
      "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

// DOMLARI Tanımlama
const divButtonDOM = document.querySelector(".btn-container");
const divSectionDOM = document.querySelector(".section-center");

let category = [];
showMenuButtons()
// Category Bilgilerini Çekme
function showMenuButtons() {
  createButtons("All",100);
  menu.forEach((item,index) =>{
    if (!category.includes(item.category)) {
      category.push(item.category);
      createButtons(item.category,index);
    }
  })
  
}

// Buttonları oluşturma
function createButtons(item,index) {

  const buttonDOM = document.createElement("button");
  const textNode = document.createTextNode(item)
  buttonDOM.classList.add("btn","btn-outline-dark","btn-item");
  buttonDOM.addEventListener("click", function(){showPage(item,index)});
  buttonDOM.append(textNode);
  divButtonDOM.append(buttonDOM);

}


// Menu Itemsları Oluştur
function createMenuItems({id,title,category,price,img,desc}) {
  const divMenuItemsDOM = document.createElement("div");
  divMenuItemsDOM.classList.add("menu-items","col-lg-6","col-sm-12");
  const imageDOM = document.createElement("img");
  imageDOM.classList.add("photo");
  imageDOM.src = img;
  divMenuItemsDOM.append(imageDOM);
  const divMenuInfoDOM = document.createElement("div");
  divMenuInfoDOM.classList.add("menu-info");
  const divMenuTitleDOM = document.createElement("div");
  divMenuTitleDOM.classList.add("menu-title");
  const titleDOM = document.createElement("h4");
  titleDOM.innerHTML = title;
  const priceDOM = document.createElement("h4");
  priceDOM.classList.add("price");
  priceDOM.innerHTML = price;
  divMenuTitleDOM.append(titleDOM);
  divMenuTitleDOM.append(priceDOM);
  divMenuInfoDOM.append(divMenuTitleDOM);
  const menuTextDOM = document.createElement("div");
  menuTextDOM.classList.add("menu-text");
  menuTextDOM.innerHTML = desc;
  divMenuInfoDOM.append(menuTextDOM);
  divMenuItemsDOM.append(divMenuInfoDOM);
  divSectionDOM.append(divMenuItemsDOM);
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

function showPage(item,d) {

  removeAllChildNodes(divSectionDOM);

  let items = item;

  if (items != "All") {
    const MENU_OBJ = menu.map((item,index,arr) =>{

      if (items==item.category) {
        return item
      } 
     });

     MENU_OBJ.forEach(item=>{
      if (item != undefined) {
        createMenuItems(item);
        console.log(MENU_OBJ);
      }
    })

  } else {
    menu.forEach(item=>{
      createMenuItems(item);
    })
  }
 

 

}







