function kalculateUl() {
  const calcCategories = document.querySelectorAll('.item');

  calcCategories.forEach(category => {
    const categoryTitle = category.querySelector('h2').textContent;
    const categoryItems = category.querySelectorAll('li').length;

    console.log(categoryTitle);
    console.log(categoryItems);
  });
}

kalculateUl();
