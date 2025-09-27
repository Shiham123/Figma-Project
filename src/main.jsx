import ReactDOM from "react-dom/client"
import router from "./Routes/Router"
import {RouterProvider} from "react-router"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
	<div>
		<RouterProvider router={router} />
	</div>,
)
