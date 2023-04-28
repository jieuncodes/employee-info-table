import Table from "./Table.js"

export default class Pagination {
  constructor(data) {
    this.data = data;
    this.render();
  }

  render() {
    let numPageBtns = 7;
    let currentPage = 1;
    let start = 0;
    let end = 4;
    this.setPaginationButtons(numPageBtns, currentPage);
  }

  setPaginationButtons = (numPageBtns, currentPage) => {
    let paginationArea = document.getElementById("pagination");
    paginationArea.innerHTML = "";
    
    for (let i = 0; i < numPageBtns; i++) {
      const button = document.createElement("button");

      if (i == 0) {
        button.setAttribute("class", "arrow");
        button.appendChild(document.createTextNode("<<"));
      } else if (i === 1) {
        button.setAttribute("class", "active");
        button.appendChild(document.createTextNode(i));
      } else if (i === numPageBtns - 1) {
        button.setAttribute("class", "arrow");
        button.appendChild(document.createTextNode(">>"));
      } else button.appendChild(document.createTextNode(i));

      paginationArea.appendChild(button);
      
      button.addEventListener("click", () => {
        if (i === 0) currentPage = 1;
        else if (i === numPageBtns - 1) currentPage = numPageBtns - 2;
        else currentPage = i;

        this.paginationButtonClicked(
          numPageBtns,
          currentPage,
          document.getElementById("pagination").children
        );
      });
    }
  };

  paginationButtonClicked = (numPageBtns, currentPage, buttons) => {
    if (numPageBtns === 4) {
        end = currentPage * 15;
        start = end - 15;
    } else if (numPageBtns === 7) {
        end = currentPage * 5;
        start = end - 5;
    }

    document.getElementById("table").innerHTML = "";
    this.paginationButtonsStyle(numPageBtns, currentPage, buttons);
    this.sliceData(start, end);
  };

  paginationButtonsStyle = (numPageBtns, currentPage, buttons) => {
    for (let i = 0; i < numPageBtns; i++) {
      if (currentPage === i) {
        buttons[i].classList.add("active");
      } else buttons[i].classList.remove("active");
    }
  };

  sliceData(start, end) {
    new Table(this.data.slice(start, end));
  }
}