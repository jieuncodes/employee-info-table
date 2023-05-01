import Pagination from "./Pagination.js";
import Table from "./Table.js";
import Dropdown from "./Dropdown.js";
import { fetchData } from "../api/fetchData.js";
import { sliceTotalData } from "../utils/sliceTotalData.js";

export default class App {
  constructor() {
    this.state = {
      currentPage: 1,
      showingContentsNum: 5,
      totalPages: 5,
      fetchedData: null,
    };

    this.handleOptionChange = (newShowingContentsNum) => {
      this.setState({
        ...this.state,
        showingContentsNum: newShowingContentsNum,
      });
    };
    this.handlePageClick = (clickedPage) => {
      this.setState({
        ...this.state,
        currentPage: clickedPage,
      });
    };

    const table = new Table();
    let pagination;
    new Dropdown({
      options: [5, 15],
      onChange: this.handleOptionChange,
    });

    this.setState = (nextState) => {
      this.state = nextState;
      table.setState({
        fetchedData: this.state.fetchedData,
        pageData: sliceTotalData(
          this.state.fetchedData,
          this.state.currentPage,
          this.state.showingContentsNum
        )
      });
      if (pagination) {
        pagination.setState({
          currentPage: this.state.currentPage,
          showingContentsNum: this.state.showingContentsNum,
          totalPages: this.state.totalPages,
          dataLength: this.state.fetchedData.length,
        });
      }
    };

    const init = async () => {
      try {
        const fetchedData = await fetchData();

        pagination = new Pagination({
          showingContentsNum: this.state.showingContentsNum,
          onClick: this.handlePageClick,
        });

        this.setState({
          ...this.state,
          fetchedData,
        });
        console.log('this.state(app)', this.state);

      } catch (error) {
        console.log("ERROR!!", error);
      }
    };

    init();
  }
}
