export default class Dropdown {
  constructor() {
    this.$target = document.getElementById("dropdown");
    this.options = [5, 15];

    this.state = {
      showingContentsNum: 5,
    };

    this.setDropDownOptions();
    this.addEventListeners();
  }

  setDropDownOptions() {
    const selector = document.createElement("select");
    selector.id = "selector";

    this.options.forEach((option) => {
      selector.innerHTML += `<option id="option" value="${option}">${option}개씩</option>`;
    });

    this.$target.appendChild(selector);
  }

  addEventListeners() {
    const selector = document.getElementById("selector");
    selector.addEventListener("change", (event) => {
      this.state.showingContentsNum = event.currentTarget.value;
    });
  }
}
