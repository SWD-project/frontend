'use client'
import { Checkbox, FormControlLabel, FormGroup, Link, Typography } from "@mui/material"
import Grid from "@mui/material/Grid"
import Stack from "@mui/material/Stack"
import { Container } from "@mui/system"

export const Filter = () => {
  return <>
  <Container maxWidth = 'lg'>
      <Grid>
        <Stack spacing={1}>
        
          <Grid container> 
            <Grid xs={3}>
            <Typography>
              <h3>Filter By</h3>
            </Typography>
            
           <Typography>
              <Typography>
                <h4>Skills</h4>
              </Typography>

              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Account Managerment" />
                <FormControlLabel required control={<Checkbox />} label="Accounting" />
                <FormControlLabel required control={<Checkbox />} label="Accounting Software" />
                <FormControlLabel required control={<Checkbox />} label="Accounts Payable and Receivable" />
              </FormGroup>

                <Typography>
                  <Link>
                    Show more
                  </Link>
                </Typography>
           </Typography>

           <Typography>
              <Typography>
                <h4>Levels</h4>
              </Typography>

              <FormGroup>
                <FormControlLabel control={<Checkbox/>} label="Beginers" />
                <FormControlLabel required control={<Checkbox />} label="Intermediate" />
                <FormControlLabel required control={<Checkbox />} label="Advanced" />
               
              </FormGroup>

                <Typography>
                  <Link>
                    Show more
                  </Link>
                </Typography>
           </Typography>
           


            </Grid>
          </Grid>
        </Stack>
      </Grid>
    
  </Container>
  </>
}
