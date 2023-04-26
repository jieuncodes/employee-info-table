export class App {
    constructor($app) {
        this.$app = $app;
        this.state = {
            selectedPage: 1,
            perPage: 5,
            totalPages: 5,
        };
        this.render();


        this.setState = (nextState) => {
            this.state = nextState;
        };
    }
    async render(){
        try{
            const res = await fetch("../src/data.json");
            if(res.ok){
                new Table(data);
            } else {

            }
        } catch(error){
            console.log('error', error);
        }
    }
}
export default App;