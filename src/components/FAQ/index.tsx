import React from "react";
import Typography from "@mui/material/Typography";
import { styled } from '@mui/material/styles';
import { Grid, Paper } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons'
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion"
import MuiAccordionSummary, {
	AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faPlusIcon = faPlus as IconProp;
const faXMarkIcon = faXmark as IconProp;
const fws_male_hair2 = new URL(
	'../../assets/fws_male_hair2.png',
	import.meta.url
);
const questionIcon = new URL(
	'../../assets/fws_question.png',
	import.meta.url
);
const Accordion = styled((props: AccordionProps) => (
	<MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
	borderTop: '2px solid #BDADFC',
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
	<MuiAccordionSummary
		{...props}
	/>
))(({ theme }) => ({
	backgroundColor: '#F3F5F6',
	color:'#360ED6',
	flexDirection: 'row',
	'& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
		transform: 'rotate(90deg)',
	},
	'& .MuiAccordionSummary-content': {
		marginLeft: theme.spacing(1),
	},
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
	padding: theme.spacing(2),
	backgroundColor: '#F3F5F6',
	color:'gray'
}));

export default function FAQ() {
	const [expanded, setExpanded] = React.useState<string | false>('panel1');
	const expandIcon = <FontAwesomeIcon icon={faPlusIcon} style={{color:'#360ED6'}}/>;
	const minimizeIcon = <FontAwesomeIcon icon={faXMarkIcon} style={{color:'#360ED6'}}/>;
	const handleChange =
		(panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
			setExpanded(newExpanded ? panel : false);
		};
	return (
		<Grid
			container
			justifyContent={'center'}
			alignContent={'center'}
			spacing={'column'}
			marginTop={'50px'}
		>
			<Grid item md={12} sx={{display:{xs:'none', sm:'none',md:'flex'},
			position:'relative',
			left:'255px',
			top:'-25px'}}>
				<img src={questionIcon.href}></img>
			</Grid>
			<Paper elevation={6} sx={{ zIndex: 99, background: '#F3F5F6', height: '554px' }}>
				<Grid container >
					<Grid item xs={5} textAlign='center' sx={{
						position: 'relative',
						top: '-20px',
						left: '50px',
						display: { xs: 'none', sm: 'none', md: 'flex' }
					}}>
						<img src={fws_male_hair2.href}></img>
					</Grid>
					<Grid item xs={12} md={6} sx={{ marginTop: '20px', paddingRight: '25px', paddingLeft: '25px' }}>
						<Typography variant='h5' sx={{
							color:'#360ED6',
							fontWeight: '700',
							marginBottom:'10px'
						}}>Frequently Asked Questions</Typography>
						<Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
							<AccordionSummary aria-controls="panel1d-content" id="panel1d-header"
							expandIcon={expanded === 'panel1'?minimizeIcon:expandIcon}
							>
								<Typography sx={{fontWeight: '700'}}>Lorem Ipsum Hoe Ass</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
									malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
									sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
									sit amet blandit leo lobortis eget.
								</Typography>
							</AccordionDetails>
						</Accordion>
						<Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
							<AccordionSummary aria-controls="panel2d-content" id="panel2d-header"
							expandIcon={expanded === 'panel2'?minimizeIcon:expandIcon}>
								<Typography sx={{fontWeight: '700'}}>Collapsible Group Item #2</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
									malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
									sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
									sit amet blandit leo lobortis eget.
								</Typography>
							</AccordionDetails>
						</Accordion>
						<Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
							<AccordionSummary aria-controls="panel3d-content" id="panel3d-header"
							expandIcon={expanded === 'panel3'?minimizeIcon:expandIcon}>
								<Typography sx={{fontWeight: '700'}}>Collapsible Group Item #3</Typography>
							</AccordionSummary>
							<AccordionDetails>
								<Typography>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
									malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
									sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
									sit amet blandit leo lobortis eget.
								</Typography>
							</AccordionDetails>
						</Accordion>
					</Grid>
				</Grid>
			</Paper>
			<Grid container sx={{ marginBottom: '50px', marginTop: '30px' }}>

			</Grid>
			<Grid item xs={12}>
				<hr></hr>
			</Grid>
		</Grid>
	)
}