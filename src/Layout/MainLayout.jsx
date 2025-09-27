import {Outlet} from "react-router"
import Banner from "../Components/Banner"

const MainLayout = () => {
	return (
		<>
			<Banner />
			<Outlet />
		</>
	)
}

export default MainLayout
