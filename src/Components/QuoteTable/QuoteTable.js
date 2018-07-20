import React, {Component} from 'react';

class QuoteTable extends Component {
    state = {

    }

    render() {
        return (
            <table className ="table table-striped">
           <tr>
               <th> Quote </th>
               <th> Context </th>
               <th> Source </th>
               <th> Theme </th>

               
           </tr>

            </table>
        )
    }
}

export default QuoteTable;