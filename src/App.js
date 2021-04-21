import { FeedCard } from 'components';
import { Header } from 'components/header';
import styled from 'styled-components';

const FeedSection = styled.section`
	background-color: #00000012;
	min-height: 100vh;
	margin: 0 auto;
	padding-top: 20px;

	/* display: flex; */
	/* justify-content: center; */
`;

const data = Array.from(Array(10).keys());

function App() {
	return (
		<div>
			<Header />
			<FeedSection>
				{data.map((item) => (
					<FeedCard key={item} />
				))}
			</FeedSection>
		</div>
	);
}

export default App;
