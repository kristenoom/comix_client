import React from 'react';
import { Table, Button } from 'reactstrap';

const ComicTable = (props) => {

    const comicMapper = () => {
        return props.comic.map((comic, index) => {
            return (
                <tr key={index}>
                    <th scope="row">{comicMapper.name}</th>
                    <td>{comicMapper.id}</td>
                    <td>{comicMapper.issue_number}</td>
                    <td>{comicMapper.cover_date}</td>
                    <td>{comicMapper.read}</td>
                    <td>{comicMapper.owned}</td>
                    <td>
                        <Button color="warning" onClick={() => { props.editUpdateComic(comic); props.updateOn() }}>Update</Button>
                        <Button color="danger" onClick={() => { deleteComic(comic) }}>Delete</Button>
                    </td>
                </tr>
            )
        })
    };

    const deleteComic = (comic) => {
        fetch(`http://localhost:3000/comic/delete/${comic.id}`, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.token
            })
        })
            .then(() => props.fetchComic())
    };

    return (
        <>
        <h3>Comic History</h3>
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