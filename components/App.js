import Pagination from "./Pagination.js";
import Table from "./Table.js";
import Dropdown from "./Dropdown.js";
import { fetchData } from "../fetchData.js";

export default class App {
    constructor($app) {
        this.state = {
          currentPage: 1,
          showingContentsNum: 5,
          totalPages:5,
          fetchedData: null,
        };
    
        const table = new Table();
        const pagination = new Pagination($app);
        const dropdown = new Dropdown(this.showingContentsNum)
    
        this.setState = (nextState) => {
          this.state = nextState;
          table.setState({
            fetchedData: this.state.fetchedData,
          });
          pagination.setState({
            currentPage: this.state.currentPage,
            showingContentsNum: this.state.showingContentsNum,
            totalPages:this.state.totalPages,
            fetchedData: this.state.fetchedData,
          });
        };
    
        const init = async () => {
          try {
            const fetchedData = await fetchData();
            this.setState({
              ...this.state,
              fetchedData,
            });
          } catch (error) {
            console.log("ERROR!!", error);
          }
        };
    
        init();
      }
    }
    
