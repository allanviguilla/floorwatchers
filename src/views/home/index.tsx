import React from "react";
import "./home.css";
import Hero from "../../components/Hero"
import Mint from "../../components/Mint"
import Roadmap from "../../components/Roadmap"
import Utilities from "../../components/Utilities"
import Playbook from "../../components/Playbook"
import Packages from "../../components/Packages"
import Floor from "../../components/FLOOR"
import Utility from "../../components/Utility"
import FAQ from "../../components/FAQ"
import Team from "../../components/Team"
export default function Home() {
	return (
		<div>
			<Hero></Hero>
			<Playbook></Playbook>
			<Packages></Packages>
			<Floor></Floor>
			<Utility></Utility>
			{/* <Mint></Mint> */}
			{/* <Roadmap></Roadmap> */}
			{/* <Utilities></Utilities> */}
			<Team></Team>
			<FAQ></FAQ>
		</div>
	);
}
