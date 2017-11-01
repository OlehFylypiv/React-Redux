import React, {Component} from 'react';
import UltimatePagination from 'react-ultimate-pagination-basic'

class MainPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            page: 1,
            total: 10,
        };
        
        this.onPageChange = this.onPageChange.bind(this);
    };


    onPageChange(page) {
        this.setState({page});
        console.log(page);
    }

 
    render() {

        return (
            <div>
                <UltimatePagination 
                    currentPage={this.state.page} 
                    totalPages={this.state.total}
                    onChange={this.onPageChange}
                />
            </div>
        );
    }

}

export default MainPage;
