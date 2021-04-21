import { Button, Modal } from 'antd';
import CountryPhoneInput from 'antd-country-phone-input';
import 'antd-country-phone-input/dist/index.css';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideLogin } from 'store/appSlice';
import styled from 'styled-components';

const ModalContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const KooBtn = styled(Button)`
	color: ${(props) => {
		console.log('props', props);
		return props.type === 'link' ? props.theme.link : '#000';
	}};
	width: ${(props) => (props.fullWidth ? '100%' : 'auto')};
	:hover {
		color: ${(props) =>
			props.type === 'link' ? props.theme.link : '#000'};
	}
	margin: 10px 0;
	height: 40px;
`;

const Input = styled.input`
	width: 100%;
	padding: 9px 20px;
	border: 1px solid #d9d9d9;
	margin-top: 15px;
`;

const TitleInfo = styled.p`
	font-weight: bold;
	font-size: 16px;
`;

const Title = styled.div`
	text-align: center;
	font-size: 24px;
`;

const ResendOTP = styled.div`
	width: 100%;
	padding: 10px;
	color: ${(props) => props.theme.link};
	text-align: right;
	cursor: pointer;
`;

export default function LoginModal() {
	/**
	 * get login form visible status from redux
	 */
	const { showLogin = false } = useSelector((state) => state.app);
	const dispatch = useDispatch();
	const [value, setValue] = useState({ short: 'IN' });
	const [loginType, setLoginType] = useState('mobile');
	const [showOTP, setShowOTP] = useState(false);

	const handleCancel = () => {
		/**
		 * Trigger to hide login form
		 */
		dispatch(hideLogin());
	};

	function handleLoginType() {
		/**
		 * hide OTP when login type change
		 */
		setShowOTP(false);
		if (loginType === 'mobile') {
			setLoginType('email');
		} else {
			setLoginType('mobile');
		}
	}

	function handleOTP() {
		setShowOTP(!showOTP);
	}

	return (
		<>
			<Modal
				title={<Title>Login</Title>}
				visible={showLogin}
				onOk={handleCancel}
				onCancel={handleCancel}
				maskClosable={false}
				footer={false}
			>
				<ModalContent>
					<TitleInfo>
						{loginType === 'mobile'
							? 'Register your Mobile Number'
							: 'Register your Email'}
					</TitleInfo>
					{loginType === 'mobile' ? (
						<CountryPhoneInput
							value={value}
							onChange={(v) => {
								console.log('onChange v', v);
								setValue(v);
							}}
							style={{ marginTop: '15px' }}
						/>
					) : (
						<Input placeholder="E-mail" />
					)}

					{showOTP && (
						<>
							<Input placeholder="Enter OTP" />
							<ResendOTP>Re-send OTP</ResendOTP>
						</>
					)}
					<KooBtn type="link" onClick={handleLoginType}>
						{loginType === 'mobile'
							? 'Sign in with Email'
							: 'Sign in with Mobile Number'}
					</KooBtn>
					<KooBtn type="primary" fullWidth onClick={handleOTP}>
						Send OTP
					</KooBtn>
				</ModalContent>
			</Modal>
		</>
	);
}
