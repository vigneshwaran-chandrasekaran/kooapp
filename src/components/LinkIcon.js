import React from 'react';
import styled from 'styled-components';

const Icon = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin: 0 12px;
	cursor: pointer;
`;

const IconLabel = styled.span`
	font-size: 12px;
	padding-top: 5px;
	text-align: center;

	@media (max-width: 768px) {
		font-size: 10px;
	}
`;

export default function LinkIcon({ data }) {
	const { onClick = null, icon = null, label = '' } = data;
	return (
		<Icon onClick={onClick}>
			<img src={icon} width="20" height="20" alt={label} />
			<IconLabel>{label}</IconLabel>
		</Icon>
	);
}
