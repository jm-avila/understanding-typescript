const button: HTMLButtonElement | null = document.querySelector("button");
button &&
  button.addEventListener("click", () => {
    console.log("Clicked!");
  });
