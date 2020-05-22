import React, {
    useState,
    useEffect,
} from 'react'
import Count from './Count';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';

const Counter = props => {
    const [counter, setCounter] = useState(0);
    const [edit, setEdit] = useState(false);
    useEffect(() => {
        if (props.autoCount && props.autoCount === "up") {
            const timer = setTimeout(() => {
                if (props.maxCount) {
                    counter < props.maxCount && setCounter(counter => counter + 1);
                } else {
                    setCounter(counter => counter + 1);
                }
            }, 1000);
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
                <StyledCounter>
                    <Count
                        onChange={count => setCounter(count)}
                        changeEdit={setEdit}
                        edit={edit}
                        count={counter}
                    />
                </StyledCounter>
                <div>
                    <StyledButton
                        onClick={e => {
                            e.preventDefault();
                            counter > 0 && setCounter(counter - 1);
                        }}
                    >-</StyledButton>
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
                    <StyledButton
                        onClick={e => {
                            e.preventDefault();
                            setCounter(0);
                        }}
                    >Reset</StyledButton>
                </div>
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
    border: 2px solid #ffffff;
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
`

export default Counter;
