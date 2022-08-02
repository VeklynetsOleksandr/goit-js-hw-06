const totalCategories = document.querySelectorAll(".item");
console.log('Number of categories:', totalCategories.length)

const categoriesArray = [...totalCategories]
    .map(
        categories => {console.log('Category:', categories.children[0].textContent);
        console.log('Elements:', categories.children[1].children.length)})



