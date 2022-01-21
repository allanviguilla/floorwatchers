import React from "react";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import {Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent} from '@mui/lab'
export default function Roadmap() {
	return (
		<Grid
			container
			justifyContent={'center'}
			alignContent={'center'}
			spacing={'column'}
			marginTop={'30px'}
		>
			<Grid item>
				<Typography variant={'h2'}>Roadmap</Typography>
			</Grid>
			<Grid container>			
			<Timeline position="alternate">
				<TimelineItem>
					<TimelineSeparator>
						<TimelineDot />
						<TimelineConnector />
					</TimelineSeparator>
					<TimelineContent>MileStone 1</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineSeparator>
						<TimelineDot />
						<TimelineConnector />
					</TimelineSeparator>
					<TimelineContent>MileStone 2</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineSeparator>
						<TimelineDot />
						<TimelineConnector />
					</TimelineSeparator>
					<TimelineContent>MileStone 3</TimelineContent>
				</TimelineItem>
				<TimelineItem>
					<TimelineSeparator>
						<TimelineDot />
					</TimelineSeparator>
					<TimelineContent>MileStone 4</TimelineContent>
				</TimelineItem>
			</Timeline>
			</Grid>
		</Grid>
	)
}