  let btn= document.querySelector("button");

  btn.addEventListener("click", function() {
    let h3 =document.querySelector("h3");
   let randomColor = getrandomcolor();
    h3.innertext = randomColor;

    let div = document.querySelector("div");
    div.style.backgroundColor = randomColor;

    console.log("color updated");
  });

  function getrandomcolor() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    let color = `rgb(${red},${green},${blue})`;
    return color;
  }