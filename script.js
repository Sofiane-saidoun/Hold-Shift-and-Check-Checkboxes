const checkboxes = document.querySelectorAll("input[type='checkbox']");
let lastChecked;
let inBetwen = false;

function handleCheck(e) {
  let inBetwen = false;
  if (e.shiftKey && this.checked) {
    checkboxes.forEach((checkbox) => {
      console.log(checkbox);
      if (checkbox === this || checkbox === lastChecked) {
        inBetwen = !inBetwen;
        console.log("commence betwen");
      }
      if (inBetwen) {
        checkbox.checked = true;
      }
    });
  }

  lastChecked = this;
}

checkboxes.forEach((checkbox) =>
  checkbox.addEventListener("click", handleCheck)
);
