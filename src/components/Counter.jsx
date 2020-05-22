import React, {
    useState,
    useEffect,
} from 'react'
import Count from './Count';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

const Counter = props => {
    const [counter, setCounter] = useState(props.startCount || 0);
    const [edit, setEdit] = useState(false);
    const incrementCounter = () => {
        if(props.maxCount) {
            counter < props.maxCount && setCounter(counter + 1);
        }else{
            setCounter(counter + 1);
        }
    }
    const decrementCounter = () => {
        if(props.minCount) {
            counter > props.minCount && setCounter(counter - 1);
        }else{
            counter && setCounter(counter - 1);
        }
    }
    useEffect(() => {
        if (props.autoCount && props.autoCount === "up") {
            const timer = setTimeout(incrementCounter, 1000);
            return () => clearTimeout(timer);
        }
        if(props.autoCount && props.autoCount === "down") {
            const timer = setTimeout(decrementCounter, 1000);
            return () => clearTimeout(timer);
        }
    });
    return (
        <Container>
            <StyledCounterWrapper
                onClick={e => {
                    e.preventDefault();
                    /// take advantage of event propagation to switch edit mode off here
                    setEdit(false);
                }}
            >
            <Row>
                <StyledCounter>
                    <Count
                        onChange={count => setCounter(count)}
                        changeEdit={setEdit}
                        edit={edit}
                        count={counter}
                    />
                </StyledCounter>
            </Row>
            <Row>
                <Col md={6}>
                    <StyledButton
                        onClick={e => {
                            e.preventDefault();
                            counter > 0 && setCounter(counter - 1);
                        }}
                    >-</StyledButton>
                </Col>
                <Col md={6}>
                    <StyledButton
                        onClick={e => {
                            e.preventDefault();
                            if (props.maxCount) {
                                counter < props.maxCount && setCounter(counter + 1);
                            } else {
                                setCounter(counter + 1);
                            }
                        }}
                    >+</StyledButton>
                </Col>
                <Col md={12}>
                    <StyledButton
                        onClick={e => {
                            e.preventDefault();
                            setCounter(0);
                        }}
                    >Reset</StyledButton>
                </Col>
            </Row>
            </StyledCounterWrapper>
        </Container>
    );
};

const StyledCounterWrapper = styled.div`
    background-color: #4385f4;
    padding-bottom: 5px;
    color: #ffffff;
`

const StyledCounter = styled.div`
    font-family: Arial sans-serif;
    font-weight: bold;
    font-size: 8rem;
    margin: 3px auto;
`
const StyledButton = styled.button`
    margin-right: 20px;
    padding: 0 20px;
    font-weight: bold;
    background-color: #600000;
    color: #ffffff;
    border-radius: 3px;
    font-size: 1.5rem;
    border: 2px solid #ffffff;
    width: 100%;
`

export default Counter;
