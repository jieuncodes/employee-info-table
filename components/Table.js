class Table {
  constructor(data) {
    this.data = data;
    this.render();
  }

  displayTableHead = () => {
    const thead = document.createElement("thead");
    const theadTr = document.createElement("tr");

    for (let i = 0; i < 4; i++) {
      const th = document.createElement("th");
      th.appendChild(document.createTextNode(Object.keys(this.data[0])[i]));
      theadTr.appendChild(th);
    }

    thead.appendChild(theadTr);
    return thead;
  };

  displayTableData = (data) => {
    const tr = document.createElement("tr");
    for (let i = 0; i < 4; i++) {
      const td = document.createElement("td");
      td.appendChild(document.createTextNode(Object.values(data)[i]));
      tr.appendChild(td);
    }
    return tr;
  };

  render() {
    const table = document.createElement("table");
    table.replaceChildren();
    const thead = this.displayTableHead();
    const tbody = document.createElement("tbody");

    for (let i = 0; i < this.data.length; i++) {
      let tbodyTr = this.displayTableData(this.data[i]);
      tbody.appendChild(tbodyTr);
    }

    table.appendChild(tbody);
    table.appendChild(thead);
    document.getElementById("table").appendChild(table);
  }
}

export default Table;
