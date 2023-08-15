import PropTypes from 'prop-types';
import { useState } from 'react';
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
import ClockIcon from '@heroicons/react/24/solid/ClockIcon';
import { Avatar, Box, Card, CardContent, Divider, Stack, Button, Typography } from '@mui/material';
import { deleteOrganizations } from 'src/api/organization';

export const CompanyCard = (props) => {
  const { company, callback } = props;
  const [load, setLoad] = useState(false)

  const deleteOrg = (id) => () => {
    setLoad(true)
    deleteOrganizations(id)
    .then(res => {
      const {data} = res;
      setLoad(false)
      callback()
    })
    .catch(err => {
      console.log(err)
      setLoad(false)
    })
  };


  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pb: 3
          }}
        >
          <Avatar
            src={'/assets/logos/building.png'}
            variant="square"
          />
        </Box>
        <Typography
          align="center"
          gutterBottom
          variant="h5"
        >
          {company.name}
        </Typography>
        <Typography
          align="center"
          variant="body1"
        >
          {company.description}
        </Typography>
      </CardContent>
      <Box sx={{ flexGrow: 1 }} />
      <Divider />
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="space-between"
        spacing={2}
        sx={{ p: 2 }}
      >
        <Stack
          alignItems="center"
          direction="row"
          spacing={1}
        >
          <Button 
          onClick={deleteOrg(company.id)}
          disabled={load}
          sx={{
            backgroundColor: 'red',
            color: '#fff',
            ':hover': {
              backgroundColor: 'red',
            color: '#fff',
            }
          }}>
            {load?'loading ':' Delete'}
          </Button>
          
        </Stack>
      </Stack>
    </Card>
  );
};

CompanyCard.propTypes = {
  company: PropTypes.object.isRequired
};
