//import {Link} from "react-router-dom";
import {Table} from 'reactstrap';

const Wishlist = () => {
    return (
        <div className="main">
            <div className="mainDiv">
                <h1 className="heading">Wishlist</h1>
                <p className="text">Add a comic book to your wishlist here.</p>
                {/* insert form here */}
                <br />
                <Table className="text" width="600px" maxWidth="1000px" striped>
                    <thead>
                        <tr>
                            <th width="60%">Title</th>
                            <th width="30%" align="center">Issue Date</th>
                            <th width="10%" align="center">Want</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td width="60%">Lorem Ipsum</td>
                            <td width="30%" align="center">Date 2021</td>
                            <td width="10%" align="center">✔️</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )
};

export default Wishlist;