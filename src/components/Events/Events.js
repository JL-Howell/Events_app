import React, { useState } from 'react';
import { Container, Col, Row, Table } from 'reactstrap';
import ReactPaginate from 'react-paginate';
import Data from './data.json';

function App() {
    const [events, setEvents] = useState(Data.Titles.slice(0, 30));
    const [pageNumber, setPageNumber] = useState(0);

    const eventsPerPage = 5
    const pagesVisited = pageNumber * eventsPerPage

    const displayEvents = events.slice(pagesVisited, pagesVisited + eventsPerPage).map((event => {
        return (
            <div className="eventTbl">
                <Container>
                    <Row>
                        <Col lg="12">
                            <Table hover bordered responsive >
                                <thead>
                                    <tr>
                                        <th scope="row">Date</th>
                                        <th scope="row">Event</th>
                                        <th scope="row">Location</th>
                                        <th scope="row">Link</th>
                                    </tr>
                                </thead>
                                <tbody>
                                        <tr key={event.id} className="events">
                                            <td>{event.date}</td>
                                            <td> {event.name}</td>
                                            <td> {event.location}</td>
                                            <td><a href={event.url} target="blank">{event.url}</a></td>
                                        </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }));
    const pageCount = Math.ceil(events.length / eventsPerPage);

    const changePage = ({selected}) => {
        setPageNumber(selected);
    };

    return <div className="app">
        {displayEvents}
        <ReactPaginate 
            previousLabel={'Previous'}
            nextLabel={'Next'}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={'paginationBttns'}
            previousLinkClassName={'previousBttn'}
            nextLinkClassName={'nextBttn'}
            disabledClassName={'paginationDisabled'}
            activeClassName={'paginationActive'}
        />
    
    </div>
}
export default App;

  

    