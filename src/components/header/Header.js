import kooappLogo from 'assets/images/Kuhu.png';
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
	padding: 10px 12%;
`;

const LogoSearch = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	width: 60%;
`;

export default function Header() {
	return (
		<StyledHeaderParent>
			<StyledHeader>
				<LogoSearch>
					<img src={kooappLogo} width="30" alt="kooapp logo" />
					<HeaderSearch />
				</LogoSearch>
				<LinksGroup />
			</StyledHeader>
		</StyledHeaderParent>
	);
}
