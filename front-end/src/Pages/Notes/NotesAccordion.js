import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Box, Stack, Button, Chip } from "@mui/material";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.primary.main}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '1.2rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : "#bedaeb",
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function NotesAccordion({ notes }) {
  const [expanded, setExpanded] = React.useState("1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Box sx={{
      "& .MuiPaper-root":{
        border:"none",
        mb:1.5
      }
    }}>
      {notes.map((item, idx) => (
        <Accordion key={item._id}
          sx={{
            "& .MuiAccordionSummary-content": {
              justifyContent: "space-between",
              alignItems: "center",
              border:"none",
            }
          }}
        >
          <AccordionSummary sx={{
        }} aria-controls="panel1d-content" id="panel1d-header"
          >
            <Typography fontWeight="500">{item.title}</Typography>
            <Stack direction="row" gap={1}>
              <Button variant='outlined' onClick={(e)=>e.stopPropagation()} color="info" size="small">Edit</Button>
              <Button variant='outlined' onClick={(e)=>e.stopPropagation()} color="error" size="small">Delete</Button>
            </Stack>
          </AccordionSummary>
          <AccordionDetails>
            <Chip size="small"  label={item.category} color="info" sx={{ mb: 1 }} />
            <Typography mb={1.5}>
              {item.content}
            </Typography>
            <Typography  fontSize="13px" sx={{color:(theme)=>theme.palette.grey[600]}}>
              date - 11 Set 2022
            </Typography>
            
          </AccordionDetails>
        </Accordion>
      ))}
      {/* <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Collapsible Group Item #2</Typography>
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
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Collapsible Group Item #3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion> */}
    </Box>
  );
}