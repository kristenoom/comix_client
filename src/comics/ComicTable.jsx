import React from 'react';
import { Table, Button } from 'reactstrap';
import APIURL from '../helpers/Environment';

const ComicTable = (props) => {

    const comicMapper = () => {
        return props.comics.map((comic, index) => {
            return (
                <tr key={index} className="text">
                    <td>{comic.id}</td> 
                    <td>{comic.title}</td>
                    <td>{comic.issue_number}</td>
                    <td>{comic.cover_date}</td>
                    <td>{comic.read_status}</td>
                    <td>{comic.status}</td>
                    <td>
                        <Button color="warning" onClick={() => { props.editUpdateComic(comic); props.updateOn() }}>Update</Button>
                        <Button color="danger" onClick={() => { deleteComic(comic) }}>Delete &ndash;</Button>
                    </td>
                </tr>
            )
        })
    };

    const deleteComic = (comic) => {
        console.log(comic.id);
        console.log(props.token);

        fetch(`${APIURL}/comic/comic/${comic.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
            .then(() => props.fetchComics())
    };

    return (
        <>
        {/* <h3>Comic History</h3> */}
        <Table striped>
            <thread>
                <tr>
                    <th>#</th>
                    <th>Title</th>
                    {/* <th>Description</th> */}
                    {/* <th>Id</th> */}
                    <th>Issue Number</th>
                    <th>Cover Date</th>
                    <th>Read</th>
                    <th>Owned</th>
                </tr>
            </thread>
            <tbody>
                {comicMapper()}
            </tbody>
        </Table>
        </>
    )
}

export default ComicTable;