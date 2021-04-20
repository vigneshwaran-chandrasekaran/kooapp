import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
	border: 1px solid #ccc;
	box-shadow: 1px 1px 5px 0 rgb(0 0 0 / 20%);
	outline: none;
	padding: 6px 30px;
	margin-left: 30px;
	width: 100%;
`;

export default function HeaderSearch() {
	return <StyledInput type="text" placeholder="Search Koo" />;
}
