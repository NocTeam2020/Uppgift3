import { useContext } from 'react'
import { UserContext } from '../../shared/provider/UserProvider'
import './Profile.css'
import { ProfileDropDown } from './profiledropdown/ProfileDropDown'

import AvatarImg from './../../shared/images/avatar/logo192.png'

export const Profile = () => {
	const [authUser,] = useContext(UserContext)
	return (
		<div className='profileWrapper'>
			<img className='profileImg' src={AvatarImg} alt={''} width="100" height="100" />

			{authUser.username}
			<ProfileDropDown />
		</div>
	)
}
