let listItems = document.getElementById('listItems');
let linkItems = listItems.getElementsByClassName('link');
for (let i = 0; i < linkItems.length; i++) {
  linkItems[i].addEventListener('click', function () {
    let activeEle = document.getElementsByClassName('active');
    activeEle[0].classList.remove('active');
    linkItems[i].classList.add('active');
  });
}
