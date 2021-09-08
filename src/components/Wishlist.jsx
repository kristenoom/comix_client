//import {Link} from "react-router-dom";

const Wishlist = () => {
    return (
        <div className="main">
            <div className="mainDiv">
                <h1 className="heading">Wishlist</h1>
                <p className="text">Add a comic book to your wishlist here.</p>
                {/* insert form here */}
                <br />
                <table className="text" width="600px" maxWidth="1000px">
                    <thead>
                        <tr>
                            <td width="60%"><strong>Title</strong></td>
                            <td width="30%" align="center"><strong>Issue Date</strong></td>
                            <td width="10%" align="center"><strong>Want</strong></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td width="60%">Lorem Ipsum</td>
                            <td width="30%" align="center">Date 2021</td>
                            <td width="10%" align="center">✔️</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default Wishlist;