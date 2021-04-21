import comment from 'assets/images/comment.svg';
import facebookIcon from 'assets/images/facebookIcon.svg';
import like from 'assets/images/like.svg';
import rekoo from 'assets/images/rekoo.svg';
import whatsapp from 'assets/images/whatsapp.svg';
import React from 'react';
import styled from 'styled-components';

const links = [
	{
		id: 1,
		icon: like,
		label: 'like',
	},
	{
		id: 2,
		icon: comment,
		label: 'comment',
	},
	{
		id: 3,
		icon: rekoo,
		label: 'rekoo',
	},
	{
		id: 4,
		icon: facebookIcon,
		label: 'facebookIcon',
	},
	{
		id: 5,
		icon: whatsapp,
		label: 'whatsapp',
	},
];

const ControlsSection = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const ControlIcon = styled.img`
	width: 17px;
	height: 17px;
	object-fit: contain;
	cursor: pointer;
`;

export default function FeedControls() {
	return (
		<ControlsSection>
			{links.map((link) => (
				<ControlIcon key={link.id} src={link.icon} />
			))}
		</ControlsSection>
	);
}
