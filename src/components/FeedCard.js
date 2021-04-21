import republicLogo from 'assets/images/republic';
import userFollow from 'assets/images/userFollow.svg';
import { FeedControls } from 'components';
import React from 'react';
import styled from 'styled-components';

const Feed = styled.div`
	width: 900px;
	margin: 0 auto 15px;
	padding: 20px;
	display: flex;
	justify-content: flex-start;

	border: 1px solid #ccc;
	background-color: #fff;

	@media (max-width: 768px) {
		width: 90%;
	}
`;

const FeedInfo = styled.div`
	width: 100%;
	padding: 0 10px;
`;

const FeedHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`;

const Img = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 25px;
`;

const FeedTitle = styled.span`
	font-weight: bold;
	font-size: 16px;
`;

const FeedHandle = styled.span`
	color: ${(props) => props.theme.secondary};
	padding-left: 10px;
`;

const FeedAbout = styled.div`
	color: ${(props) => props.theme.secondary};
	font-size: 12px;
`;

const FeedHeaderRight = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const UserFollow = styled.img`
	width: 14px;
	opacity: 0.5;
	margin-left: 10px;
`;

const FeedContent = styled.p`
	color: #484848;
	font-size: 15px;
	margin-top: 10px;
`;

export default function FeedCard() {
	return (
		<Feed>
			<Img src={republicLogo} alt="kooapp logo" />
			<FeedInfo>
				<FeedHeader>
					<div>
						<FeedTitle>Republic</FeedTitle>
						<FeedHandle>@republic</FeedHandle>
						<FeedAbout>
							India’s Number 1 English News Channel
						</FeedAbout>
					</div>
					<FeedHeaderRight>
						<span>1h</span>{' '}
						<UserFollow src={userFollow} alt="follow" />
					</FeedHeaderRight>
				</FeedHeader>
				<FeedContent>
					Want 11 Jaddus on the field: Deepak Chahar makes a unique
					wish after crushing Punjab Kings
				</FeedContent>
				<FeedControls />
			</FeedInfo>
		</Feed>
	);
}
