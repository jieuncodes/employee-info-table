export default class Pagination {
  constructor($app) {
    this.$target = document.getElementById("pagination");

    this.state = {
      currentPage: 1,
      numPageBtns: 7,
      totalPages:5,
      fetchedData: null,
    };

    this.render();
  }

  setState(nextState) {
    this.state = nextState;
    this.render();
  }

  render() {
    this.getPaginationButtonsMarkup();
    this.addEventListeners();
  }

  getPaginationButtonsMarkup() {
    let buttonsMarkup = '';
    for (let i = 0; i < this.state.numPageBtns; i++) {
      if (i == 0) {
        buttonsMarkup += `<button class="arrow"><<</button>`;
      } else if (i === 1) {
        buttonsMarkup += `<button class="active">${i}</button>`;
      } else if (i === this.state.numPageBtns - 1) {
        buttonsMarkup += `<button class="arrow">>></button>`;
      } else {
        buttonsMarkup += `<button>${i}</button>`;
      }
    }
    this.$target.appendChild = buttonsMarkup;
    return buttonsMarkup;
  }

  addEventListeners() {
    const buttons = this.$target.children;

    for (let i = 0; i < this.state.numPageBtns; i++) {
      buttons[i].addEventListener("click", () => {
        let currentPage;
        if (i === 0) currentPage = 1;
        else if (i === this.state.numPageBtns - 1) currentPage = this.state.numPageBtns - 2;
        else currentPage = i;

        this.handlePageBtnClick(currentPage);
      });
    }
  }

  handlePageBtnClick(currentPage) {
    //
  }
}
