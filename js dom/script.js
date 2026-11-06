const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container.appendChild(content);

const pred = document.createElement("p");
pred.style.color = "red";
pred.textContent = "I'm red assssffffff";
container.appendChild(pred);

const h3 = document.createElement("h3");
h3.style.color = "blue";
h3.textContent = "am blue yabadee yabadie";
container.appendChild(h3);

const div = document.createElement("div");
div.setAttribute("style", "background: pink; border: black 1px solid");
container.appendChild(div);

const h1 = document.createElement("h1");
h1.textContent = "hey gays im in div,heh";
div.appendChild(h1);

const p = document.createElement("p");
p.textContent = "ME TOO! IT WAS AMAZING";
div.appendChild(p);

// const btn = document.querySelector("#btn");
// btn.onclick = () => alert("Hello World");

const btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  alert("Hello World");
});

btn.addEventListener("click", function (e) {
  e.target.style.background = "blue";
});