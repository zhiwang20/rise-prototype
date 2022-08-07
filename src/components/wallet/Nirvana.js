import { Link, Routes, Route, Outlet, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import MakePayment from "../marketplace/nirvanaPages/MakePayment";
import RequestPayment from "../marketplace/nirvanaPages/RequestPayment";
import CompletedTransactions from "../marketplace/nirvanaPages/CompletedTransactions";
import CancelledTransactions from "../marketplace/nirvanaPages/CancelledTransactions";
import NirvanaNotifications from "../marketplace/nirvanaPages/NirvanaNotifications";
import FulfilledPayments from "../marketplace/nirvanaPages/FulfilledPayments";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";

// Nirvana/Payment Pages will live here.

const Nirvana = () => {
	// Return & JSX - My game plan here to make any of the submenus collapsable using the CSS/SASS partial. Note from Kevin W: To anyone reading this note please ensure to have the SASS/SCSS pre-processor installed and that you have WATCH SASS active on VS code for the CSS to be rendered correctly. Please reach out to me on sykpe if you need a hand with this.
	return (
		<div className="wrapper">
			<div className="nirvanaLanding">
				{/* This is where the nav links for Nirvana info, wallet and transactions will live */}
				<nav className="nirvanaNav">
					<div className="walletBalance">
						<h2>Wallet Balance: $500.50</h2>
						<h5>100,000 Karma </h5>
					</div>
					<ul>
						<li>Payments</li>
						<ul className="paymentNav">
							<li>
								{" "}
								<Link to="RequestPayment">
									<FontAwesomeIcon className="icon" icon={faCreditCard} />
									Request a Payment
								</Link>
							</li>
							<li>
								{" "}
								<Link to="MakePayment">
									<FontAwesomeIcon className="icon" icon={faCreditCard} />
									Make a Payment
								</Link>
							</li>
						</ul>
						<li>Transaction</li>
						<ul className="transactionNav">
							<li>
								{" "}
								<Link to="CompletedTransactions">Completed Transactions</Link>
							</li>
							<li>
								{" "}
								<Link to="CancelledTransactions">Cancelled Transactions</Link>
							</li>
						</ul>
						{/* As per Figma, no submenu options for Notification */}
						<li>
							<Link to="NirvanaNotifications">Notification</Link>
						</li>
						{/* As per Figma, no submenu options for Fullfilled Payments */}
						<li>
							<Link to="FulfilledPayments">Fulfilled Payments</Link>
						</li>
					</ul>
				</nav>
				<Routes>
					<Route
						path="MakePayment/*"
						element={
							<div>
								<MakePayment />
							</div>
						}
					/>
					<Route
						path="RequestPayment/*"
						element={
							<div>
								<RequestPayment />
							</div>
						}
					/>
					<Route
						path="CompletedTransactions/*"
						element={
							<div>
								<CompletedTransactions />
							</div>
						}
					/>
					<Route
						path="CancelledTransactions/*"
						element={
							<div>
								<CancelledTransactions />
							</div>
						}
					/>
					<Route
						path="NirvanaNotifications/*"
						element={
							<div>
								<NirvanaNotifications />
							</div>
						}
					/>
					<Route
						path="FulfilledPayments/*"
						element={
							<div>
								<FulfilledPayments />
							</div>
						}
					/>
				</Routes>
			</div>
		</div>
	);
};

export default Nirvana;
