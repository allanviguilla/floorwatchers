import React from "react";
import "./home.css";
import Hero from "../../components/Hero"
import Mint from "../../components/Mint"
import Roadmap from "../../components/Roadmap"
import Utilities from "../../components/Utilities"
import Playbook from "../../components/Playbook"
import FAQ from "../../components/FAQ"
import Team from "../../components/Team"
export default function Home() {
	return (
		<div>
			<Hero></Hero>
			<Playbook></Playbook>
			{/* <Mint></Mint> */}
			{/* <Roadmap></Roadmap> */}
			{/* <Utilities></Utilities> */}
			<Team></Team>
			<FAQ></FAQ>
		</div>
	);
}
