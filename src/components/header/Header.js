import kuhu from 'assets/images/Kuhu.png';
import { HeaderSearch, LinksGroup } from 'components/header';
import React from 'react';
import styled from 'styled-components';

const StyledHeaderParent = styled.header`
	background-color: ${(props) => props.theme.primary};
`;

const StyledHeader = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 15px 12%;

	> div {
		width: 100%;
	}
`;

const LogoSearch = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

export default function Header() {
	return (
		<StyledHeaderParent>
			<StyledHeader>
				<LogoSearch>
					<img src={kuhu} width="30" alt="kooapp logo" />
					<HeaderSearch />
				</LogoSearch>
				<LinksGroup />
			</StyledHeader>
		</StyledHeaderParent>
	);
}
