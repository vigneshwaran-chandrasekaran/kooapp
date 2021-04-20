import { Modal } from 'antd';
import CountryPhoneInput from 'antd-country-phone-input';
import 'antd-country-phone-input/dist/index.css';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideLogin } from 'store/appSlice';

export default function LoginModal() {
	/**
	 * get login form visible status from redux
	 */
	const { showLogin = false } = useSelector((state) => state.app);
	const dispatch = useDispatch();
	const [value, setValue] = useState({ short: 'IN' });

	const handleCancel = () => {
		/**
		 * Trigger to hide login form
		 */
		dispatch(hideLogin());
	};

	return (
		<>
			<Modal
				title="Login"
				visible={showLogin}
				onOk={handleCancel}
				onCancel={handleCancel}
				maskClosable={false}
				footer={false}
			>
				<CountryPhoneInput
					value={value}
					onChange={(v) => {
						console.log('onChange v', v);
						setValue(v);
					}}
				/>
			</Modal>
		</>
	);
}
