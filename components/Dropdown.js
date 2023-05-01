export default class Dropdown {
  constructor({ options, onChange }) {
    this.$target = document.getElementById("dropdown");
    this.options = options;

    this.state = {
      showingContentsNum: options[0],
    };

    this.onChange = onChange;

    this.setDropDownOptions();
    this.addEventListeners();
  }

  setState(nextState) {
    this.state = nextState;
    this.render();
    console.log('showingContentsNum', showingContentsNum);
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
      this.onChange(this.state.showingContentsNum)
    });
  }
}
