export const START_CREATE_SECRET = 'START_CREATE_SECRET';
export const FAILED_CREATE_SECRET = 'FAILED_CREATE_SECRET';
export const SUCCESS_CREATE_SECRET = 'SUCCESS_CREATE_SECRET';
export const START_FETCH_SECRET = 'START_FETCH_SECRET';
export const FAILED_FETCH_SECRET = 'FAILED_FETCH_SECRET';
export const SUCCESS_FETCH_SECRET = 'SUCCESS_FETCH_SECRET';
export const CLEAR_PREVIOUS_REQUEST = 'CLEAR_PREVIOUS_REQUEST';
export const START_REGISTER_ACCOUNT = 'START_REGISTER_ACCOUNT';
export const SUCCESS_REGISTER_ACCOUNT = 'SUCCESS_REGISTER_ACCOUNT';
export const FAILED_REGISTER_ACCOUNT = 'FAILED_REGISTER_ACCOUNT';
export const START_LOGIN_ACCOUNT = 'START_LOGIN_ACCOUNT';
export const SUCCESS_LOGIN_ACCOUNT = 'SUCCESS_LOGIN_ACCOUNT';
export const FAILED_LOGIN_ACCOUNT = 'FAILED_LOGIN_ACCOUNT';
export const LOGOFF = 'LOGOFF';

export function loginAccount(account) {
	return {
		type: START_CREATE_SECRET,
		payload: account
	}
}

export function registerAccount(account) {
	return {
		type: START_REGISTER_ACCOUNT,
			payload: account
	}
}

export function logoff() {
	return {
		type: LOGOFF,
		payload: {
            status: 200,
            reason: ""
        }
	}
}