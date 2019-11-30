const cat1 = {
  name: "Fluffy",
  image: 'cat.jpg',
  clicks: 0
}

const cat2 = {
  name: "Henry",
  image: 'cat2.jpg',
  clicks: 0
}

const cat1Container = document.querySelector("#cat1");
const cat2Container = document.querySelector("#cat2");

//Add names to cats
const cat1Name = document.createElement('h1');
cat1Name.textContent = cat1.name;
cat1Container.appendChild(cat1Name);

const cat2Name = document.createElement('h1');
cat2Name.textContent = cat2.name;
cat2Container.appendChild(cat2Name);

//Add cat images
const cat1Image = document.createElement("img");
cat1Image.setAttribute("src", cat1.image);
cat1Image.setAttribute("alt", "image of cat");
cat1Container.appendChild(cat1Image);

const cat2Image = document.createElement("img");
cat2Image.setAttribute("src", cat2.image);
cat2Image.setAttribute("alt", "image of cat2");
cat2Container.appendChild(cat2Image);
