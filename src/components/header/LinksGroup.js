import hashtag from 'assets/images/hashtag.svg';
import homeBlack from 'assets/images/homeBlack.svg';
import kooplus from 'assets/images/kooplus.png';
import language from 'assets/images/language.svg';
import stat from 'assets/images/stat.svg';
import user from 'assets/images/user.svg';
import { LinkIcon, LoginModal } from 'components';
import React from 'react';
import { useDispatch } from 'react-redux';
import { showLogin } from 'store/appSlice';
import styled from 'styled-components';

const LinksSection = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

export default function LinksGroup() {
	const dispatch = useDispatch();

	function handleLoginCLick() {
		/**
		 * Trigger to open login form
		 */
		dispatch(showLogin());
	}

	const links = [
		{
			id: 1,
			icon: homeBlack,
			label: 'Feed',
		},
		{
			id: 2,
			icon: kooplus,
			label: 'Koo',
		},
		{
			id: 3,
			icon: hashtag,
			label: 'Explore',
		},
		{
			id: 4,
			icon: stat,
			label: 'Trending',
		},
		{
			id: 5,
			icon: language,
			label: 'Language',
		},
		{
			id: 6,
			icon: user,
			label: 'Sign-in',
			onClick: handleLoginCLick,
		},
	];

	return (
		<>
			<LinksSection>
				{links.map((link) => (
					<LinkIcon key={link.id} data={link} />
				))}
			</LinksSection>

			{/* Login modal form component */}
			<LoginModal />
		</>
	);
}
