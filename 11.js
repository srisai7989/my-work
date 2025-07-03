// This script applies styles to a form and table elements on the page
  window.onload = function() {
    document.body.style.fontFamily = "'Times New Roman', serif";

    const table = document.querySelector("table");
    if (table) {
      table.style.border = "2px solid #000";
      table.style.padding = "10px";
      table.style.margin = "50px auto";
    }

    const th = document.querySelector("th");
    if (th) {
      th.style.fontSize = "24px";
      th.style.textAlign = "center";
      th.style.paddingBottom = "15px";
    }

    const tds = document.querySelectorAll("td");
    tds.forEach(td => {
      td.style.padding = "10px";
    });

    const textInputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"]');
    textInputs.forEach(input => {
      input.style.width = "200px";
      input.style.padding = "5px";
      input.style.fontSize = "16px";
    });

    const radioInputs = document.querySelectorAll('input[type="radio"]');
    radioInputs.forEach(input => {
      input.style.transform = "scale(1.2)";
      input.style.marginRight = "5px";
    });

    const buttons = document.querySelectorAll('input[type="submit"], input[type="reset"]');
    buttons.forEach(button => {
      button.style.padding = "5px 15px";
      button.style.fontSize = "16px";
      button.style.margin = "5px";
    });
  };
