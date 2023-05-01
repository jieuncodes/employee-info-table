export default class Pagination {
  constructor({ showingContentsNum, onClick }) {
    this.$target = document.getElementById("pagination");
    // 페이지 3개까지만 나옴
    this.state = {
      currentPage: 1,
      numPageBtns: 7,
      totalPages: 5,
      dataLength: 0,
      showingContentsNum,
    };
    this.onClick = onClick;
    this.render();
  }
  setState(nextState) {
    this.state = nextState;
    this.render();
  }

  render() {
    this.calculateNumPageBtns();
    this.getPaginationButtonsMarkup();
    this.addEventListeners();
  }

  calculateNumPageBtns() {
    const numPageBtns = Math.ceil(
      this.state.dataLength / this.state.showingContentsNum
    );
    this.state.numPageBtns = numPageBtns;
  }

  getPaginationButtonsMarkup() {
    this.$target.innerHTML = "";
    let buttonsMarkup = "";
    for (let i = 0; i < this.state.numPageBtns + 2; i++) {
      let buttonClass = "";
      if (i == 0) {
        buttonClass = "arrow";
      } else if (i === this.state.numPageBtns + 1) {
        buttonClass = "arrow";
      } else if (i === this.state.currentPage) {
        buttonClass = "active";
      }

      buttonsMarkup += `<button class="${buttonClass}">${
        i === 0 || i === this.state.numPageBtns + 1
          ? i === 0
            ? "<<"
            : ">>"
          : i
      }</button>`;
    }
    this.$target.innerHTML = buttonsMarkup;
    return buttonsMarkup;
  }

  addEventListeners() {
    const buttons = this.$target.children;
    console.log('buttons', buttons);
    for (let i = 0; i < this.state.numPageBtns+2; i++) {
      buttons[i].addEventListener("click", () => {
        console.log('adde for buttn', this.state.numPageBtns);
        let currentPage;
        if (i === 0) {currentPage = 1;}
        else if (i === this.state.numPageBtns + 1){
          currentPage = this.state.numPageBtns}
        else{ currentPage = i;}

        this.onClick(currentPage);
      });
    }
  }
}
