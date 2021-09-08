//import {Link} from "react-router-dom";
import {Table} from 'reactstrap';

const Comix = () => {
    return (
        <div className="main">
            <div className="mainDiv">
                <h1 className="heading">Comic Book Log</h1>
                <p className="text">Add a comic book to your reading list here.</p>
                {/* insert form here */}
                <br />
                <Table className="text" width="600px" maxWidth="1000px" striped>
                    <thead>
                        <tr>
                            {/* <td width="10%" align="center">Cover Art</td> */}
                            <th width="60%">Title</th>
                            <th width="30%" align="center">Issue Date</th>
                            <th width="10%" align="center">Have Read</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {/* <td width="10%" align="center">IMAGE HERE</td> */}<td width="60%">Lorem Ipsum</td>
                            <td width="30%" align="center">Date 2021</td>
                            <td width="10%" align="center">✔️</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )
};

export default Comix;