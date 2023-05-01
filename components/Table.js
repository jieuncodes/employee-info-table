export default class Table {
  constructor() {
    this.state = {
      tableHead: null,
      tableBody: null,
      pageData: null,
    };

    this.$target = document.createElement("table");
    this.$target.id = "table";
    const tableArea = document.getElementById("table");
    tableArea.appendChild(this.$target);
  }

  setState(nextState) {
    this.state = nextState;
    this.render();
  }

  setTableHead() {
    if (!this.state.tableHead) {
      const headerKeys = Object.keys(this.state.pageData[0]);
      const headerCells = headerKeys.map((key) => `<th>${key}</th>`).join('');
      const thead = `<thead><tr>${headerCells}</tr></thead>`;
      this.state.tableHead = thead;
    }
    return this.state.tableHead;
  }

  getRowData(data) {
    const tr = document.createElement("tr");
    for (let i = 0; i < 4; i++) {
      const td = document.createElement("td");
      td.appendChild(document.createTextNode(Object.values(data)[i]));
      tr.appendChild(td);
    }
    return tr;
  }

  setTableBody() {
    const tbody = document.createElement("tbody");
    for (let i = 0; i < this.state.pageData.length; i++) {
      const tbodyTr = this.getRowData(this.state.pageData[i]);
      tbody.appendChild(tbodyTr);
    }
    this.state.tableBody = tbody;
    return tbody;
  }

  paintTableFrame() {
    this.$target.replaceChildren();
    this.$target.innerHTML = this.setTableHead();
    this.$target.appendChild(this.setTableBody());
  }

  render() {
    if (this.state.pageData) {
      this.paintTableFrame();
    }
  }
}
