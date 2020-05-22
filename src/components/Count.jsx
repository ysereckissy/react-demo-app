import React from 'react'
import styled from 'styled-components';

const format = count => (count < 10 ? "0" + count : count);
const Count = props => {
    const updateCount = e => {
        e.preventDefault();
        const converted = Number(e.target.value);
        converted && props.onChange(converted);
        /// set the value to 0 if the input field is emptied
        e.target.value === "" && props.onChange(0);
    }
    if(props.edit) {
        return (
            <input
                onKeyDown={e => {
                    e.key === "Enter" && props.changeEdit(false);
                }}
                onChange={updateCount}
                onClick={e => e.stopPropagation()}
                type="text"
                value={props.count ? props.count : ""}
                autoFocus
            />
        );
    }else {
        return (
            <StyledCount
                onDoubleClick={e => {
                    e.preventDefault();
                    props.changeEdit(true);
                }}
            >
                {format(props.count)}
            </StyledCount>
        );
    }
};

const StyledCount = styled.span`
    margin: auto;
`

export default Count;
