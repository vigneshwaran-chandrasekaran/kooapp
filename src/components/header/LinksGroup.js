import { LinkIcon } from 'components';
import React from 'react';
import styled from 'styled-components';

const LinksSection = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

export default function LinksGroup() {
	return (
		<LinksSection>
			<LinkIcon />
			<LinkIcon />
			<LinkIcon />
			<LinkIcon />
		</LinksSection>
	);
}
