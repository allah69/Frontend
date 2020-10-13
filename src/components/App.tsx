import React from "react";
import { Route } from "react-router-dom";
import Signup from "./signup/Signup";
import "bootstrap/dist/css/bootstrap.min.css";
import DormFinder from "./signup/DormFinder";
import Home from "./home/Home";
import DormOwner from "./signup/DormOwner";
import Signin from "./signin/Signin";
import Dorm from "./dorm/Dorm";
import Forgetpassword from "./signin/Forgetpassword";
import Repassword from "./signin/Repassword";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
const Theme = createMuiTheme({
	palette: {
		primary: {
			main: "#F55E61",
		},
		secondary: {
			main: "#F8FBFE",
		},
		background: {
			paper: "#F8FBFE",
		},
	},
});
function App() {
	return (
		<MuiThemeProvider theme={Theme}>
			<div style={{ textAlign: "center" }}>
				<Route exact path="/" component={Home} />
				<Route exact path="/signin" component={Signin} />
				<Route exact path="/signup" component={Signup} />
				<Route exact path="/signup/dormfinder" component={DormFinder} />
				<Route exact path="/signup/dormowner" component={DormOwner} />
				<Route exact path="/dorm/:id" component={Dorm} />
				<Route exact path="/signin/forgetpassword" component={Forgetpassword} />
				<Route exact path="/signin/repassword/:id" component={Repassword} />
			</div>
		</MuiThemeProvider>
	);
}
export default App;
