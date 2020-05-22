import React from 'react'
import { CardColumns, Container, Row } from 'react-bootstrap'
import CustomCard from '../components/CustomCard';
import Counter from '../components/Counter';

const CounterPage = () => {
    return (
        <Container className="mt-4">
            <Row md={3} sm={2}>
                <CustomCard title="Up Counter" className="mr-3">
                    <Counter autoCount="up" maxCount={200} />
                </CustomCard>
                <CustomCard title="Down Counter">
                    <Counter autoCount="down" minCount={2} startCount={198} />
                </CustomCard>
                <CustomCard title="Manual Counter">
                    <Counter startCount={3} />
                </CustomCard>
            </Row>
        </Container>
    );
};

export default CounterPage;
