import { Button } from '@mui/material';
import styled from '@emotion/styled';

export const CustomButton = styled(Button)(({ border }) => ({
    fontSize: '2rem',
    backgroundColor: 'red',
    marginTop: '20px',
    border: `4px solid ${border}`,
    '&:hover': { backgroundColor: 'orange' },
    '@media (max-width:600px)': {
        backgroundColor: 'gray',
    },
}));
