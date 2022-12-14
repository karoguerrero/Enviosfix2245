import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { LocalStorage } from '@/api/utilities';
import { SvgIcon } from '../SVGIcon';

export function Logo({ spin = false }) {
	const to = LocalStorage.hasSession() ? '/client/requests' : '/auth/sign-in';
	const spinClass = spin ? 'animate-spin-slow' : '';

	return (
		<Link to={to} className="flex mb-6 text-2xl font-semibold text-gray-900 ">
			{/* <span className="h-8">Insta Ya!</span> */}
			<img src="https://i.postimg.cc/8CwXqGvV/logop.png" width="200" height="150"></img>
			<SvgIcon name="react" className={`w-8 h-8 mr-2 ${spinClass} `} />
		</Link>
	);
}

Logo.propTypes = {
	spin: PropTypes.bool,
};
