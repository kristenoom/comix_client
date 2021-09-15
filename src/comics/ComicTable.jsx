import React from 'react';
import { Button } from 'reactstrap';

const ComicTable = (props) => {

    const deleteComic = (comic) => {
        fetch(`http://localhost:3000/log/${comic.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
        .then(() => props.fetchComic())
    }

    const comicMapper = () => {
        return props.comic.map((comic, index) => {
            return (
                <tr key={index}>
                    <th scope="row">{comic.name}</th>
                    <td>{comic.id}</td>
                    <td>{comic.issue_number}</td>
                    <td>{comic.cover_date}</td>
                    <td>{comic.read}</td>
                    <td>{comic.owned}</td>
                    <td>
                        <Button color="warning" onClick={() => {props.editUpdateComic(comic); props.updateOn()}}>Update</Button>
                        <Button color="danger" onClick={() => {deleteComic(comic)}}>Delete</Button>
                    </td>
                </tr>
            )
        })
    }

    return (
        <>
        <h3>Workout History</h3>
        <hr/>
        <Table striped>
            <thread>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Id</th>
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