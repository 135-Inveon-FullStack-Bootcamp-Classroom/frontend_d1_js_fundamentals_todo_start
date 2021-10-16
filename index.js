/**
 * 1. todo ekleme
 * 2. tamamla butonu (complete)
 * 3. sil butonu olacak
 * 4. kayıt edilsin (localStorage, cookie) - sayfa yenilendiği zaman son hali yeniden görünsün
 *
 * --- optional
 * 1. güncelleme
 * 2. toplu silme (mehmete required gerisi optional)
 * 3. eklenme - tamamlanma tarihi
 * 4. berke -> tamamlanma tarihi gelince alert version
 * 5. kategoriler koyulabilir -> spor, iş vs.
 * 6.
 */

const button = document.querySelector("#button-save");
const text = document.querySelector("#text-input");
const ulList = document.querySelector("#ul-list");
let listStr = "";

const value = localStorage.getItem("key");
console.log(value);
listStr = "<li>" + value + "</li>";
ulList.innerHTML = listStr;

// button.addEventListener("click", () => alert("clicked"));
// console.log(button);

function onButtonClick() {
  const li = "<li>" + text.value + " <button>tamamlandı</button> </ li>";
  listStr += li;
  ulList.innerHTML = listStr;
  console.log(li);
}

// function onButtonClick() {
//   const li = "<li> " + text.value + " </ li>";
//   ulList.appendChild(text.value);
//   console.log(li);
// }
