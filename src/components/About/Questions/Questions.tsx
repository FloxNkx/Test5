import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import styles from './Questions.module.css';

export default function Questions() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
  
        <div className={styles['body']}>
            <div className={styles['body-title']}>
            Have a question?
            well, we’ve got answers
            </div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary sx = {{background:'#555969'}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 , color: 'white', background:'#555969', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '24px'}}>
          What services do you provide? 
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}></Typography>
        </AccordionSummary>
        <AccordionDetails sx = {{background:'#555969', color: 'white', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '17px' }}>
          <Typography>
          Any kind of auto service, maintenance, or delivery: from an oil change, wash, or refuel to complex repairs that take a few days or more. We handle Round Trip services, One Way pick-ups and drop-offs, rental and loaner returns, and various custom requests.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary sx = {{background:'#555969'}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{  width: '100%', flexShrink: 0 , color: 'white', background:'#555969', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '24px'}}> 
          Who are concierges? 
            </Typography>
        </AccordionSummary>
        <AccordionDetails sx = {{background:'#555969', color: 'white', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '17px' }}>
          <Typography>
          Our professional concierges go through rigorous vetting, as well as background and driving record checks. Every driver is trained to provide exceptional customer service and be ready to ask the right questions at the shop or dealership.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary sx = {{background:'#555969'}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{  width: '100%', flexShrink: 0 , color: 'white', background:'#555969', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '24px'}}>
          Is my car safe with Carrectly?
          </Typography>
         
        </AccordionSummary>
        <AccordionDetails sx = {{background:'#555969', color: 'white', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '17px' }}>
          <Typography>
          That’s our top priority. All dealers, partner shops, and washes have garage liability and business auto policies while your car is serviced. While en route to and from the service, in addition to your own auto policy, we carry $1MM liability insurance so your car, you, and others are protected. You can have complete peace of mind from pickup to drop-off. Please note: Our concierge will ask for your insurance policy card as it is Illinois law to “always carry your insurance card in your vehicle and show it upon request by any law enforcement officer” (Illinois Secretary of State). More details here: https://www.cyberdriveillinois.com/departments/vehicles/mandatory_insurance.html
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary sx = {{background:'#555969'}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{  width: '100%', flexShrink: 0 , color: 'white', background:'#555969', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '24px' }}>
            Something is wrong with my car, can you fix it?
            </Typography>
        </AccordionSummary>
        <AccordionDetails sx = {{background:'#555969', color: 'white', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '17px' }}>
          <Typography>
          Absolutely. In fact, majority of people don’t know what repairs are needed because there are so many things that can go wrong with most modern cars. Simply describe your problem and we will take your car to a professional technician for diagnostics, keep you informed of the causes, fixes, and costs, and bring it back to you when fixed.

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary sx = {{background:'#555969'}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 , color: 'white', background:'#555969', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '24px' }}>
            How does Carrectly work?
            </Typography>
        </AccordionSummary>
        <AccordionDetails sx = {{background:'#555969', color: 'white', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '17px' }}>
          <Typography>
          (1) Select Round Trip service, One Way delivery, or a Fixed Price package and tell us what needs to be done. (2) Pick your preferred service center or let Carrectly choose a trusted partner. (3) We come to you, take your car for service, and keep you updated. (4) You only pay after the service is completed and your car is returned to you – wherever you are.

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
        <AccordionSummary sx = {{background:'#555969'}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 , color: 'white', background:'#555969', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '24px'}}>
            Should I schedule ahead of time? If yes, how much?
            </Typography>
        </AccordionSummary>
        <AccordionDetails sx = {{background:'#555969', color: 'white', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '17px' }}>
          <Typography>
          We pick up the car from you so you can schedule services whenever it is convenient. Quicker services, such as washes and oil changes, are available last minute, on-demand. However, for us to better plan the logistics and minimize the wait, we encourage you to schedule ahead of time, especially more time-consuming services.

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
        <AccordionSummary sx = {{background:'#555969'}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{  width: '100%', flexShrink: 0 , color: 'white', background:'#555969', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '24px' }}> 
          How much do you charge for your pick up and return concierge service? 
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx = {{background:'#555969', color: 'white', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '17px' }}>
          <Typography>
          All our services come with concierge free of charge, as long as its within the mile radius of our service facility. Typically we service cars within 7-10 miles of Chicago. If you live outside that, no worries, we will still be able to pick up your car; however, an additional logistical fee will be charged depending on distace. 

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
        <AccordionSummary sx = {{background:'#555969'}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{  width: '100%', flexShrink: 0 , color: 'white', background:'#555969', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '24px' }}> 
          Will I get updated while you have my car?  
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx = {{background:'#555969', color: 'white', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '17px' }}>
          <Typography>
          Yes, you are updated on the status and/or if there are any repair costs that need your approval.

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel9'} onChange={handleChange('panel9')}>
        <AccordionSummary sx = {{background:'#555969'}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{  width: '100%', flexShrink: 0 , color: 'white', background:'#555969', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '24px'}}> 
          When and how do I pay? 
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx = {{background:'#555969', color: 'white', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '17px' }}>
          <Typography>
          We value your trust and are very confident in the quality of the service we provide: you only pay when the service is completed. You will get an email with a receipt and payment information, which you can pay online. Moreover, our concierge will bring a Square app reader to the drop-off location, so you can pay with cash or any credit card then.

          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel10'} onChange={handleChange('panel10')}>
        <AccordionSummary sx = {{background:'#555969'}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 , color: 'white', background:'#555969', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '24px' }}> 
          Can I change my pick-up/return time and/or location?
           </Typography>
        </AccordionSummary>
        <AccordionDetails sx = {{background:'#555969', color: 'white', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '17px' }}>
          <Typography>
          Of course. Email or call us and we will update the details. Our email is info@carrectly.com
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel11'} onChange={handleChange('panel11')}>
        <AccordionSummary sx = {{background:'#555969'}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{  width: '100%', flexShrink: 0 , color: 'white', background:'#555969', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '24px' }}> 
          Can I cancel my service request? 
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx = {{background:'#555969', color: 'white', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '17px' }}>
          <Typography>
          Sure. Simply let us know at least 24 hours before your scheduled pick-up. There are no fees or penalties. If we have already dispatched a driver – then you only pay for his or her driving time – rarely more than $30.          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel12'} onChange={handleChange('panel12')}>
        <AccordionSummary sx = {{background:'#555969'}}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '100%', flexShrink: 0 , color: 'white', background:'#555969', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '24px' }}>
             What if I am unhappy with the result?
             </Typography>
        </AccordionSummary>
        <AccordionDetails sx = {{background:'#555969', color: 'white', fontFamily: 'Arial, Helvetica, sans-serif', fontSize: '17px' }}>
          <Typography>
          Oh no! Unexpected things happen – let us resolve them. Any potential issues or claims with a dealer, service provider, or Carrectly, must be submitted within a day after any service is completed. We will investigate all issues on your behalf and make things right
          </Typography>
        </AccordionDetails>
      </Accordion>
      <div className={styles['button-book']}>
        Book Now
      </div>
    </div>
   
  );
}

export  {Questions};