import Pagination from "./Pagination.js";
import Table from './Table.js';
import Dropdown from './Dropdown.js';

export default class App {
  async render() {
    const response = await fetch('./src/data.json');

    if (response.ok) {
      const fetchedData = await response.json();
    
      new Table(fetchedData);
      new Pagination(fetchedData);
      new Dropdown(fetchedData, [5, 15]);
    }
  }
}