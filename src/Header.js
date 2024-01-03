import React from 'react'
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';


const Header = ({title}) => {
  return (
    <div className="header" >
    <AppBar position="static" sx={{background:"yellow"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <DocumentScannerIcon sx={{ display: 'flex', mr: 1,color:'#000' }} />
          <Typography
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: 'flex',
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#000',
              textDecoration: 'none',
            }}
          >
            {title}
          </Typography>
          </Toolbar>
      </Container>
    </AppBar>
    </div>
  )
}

export default Header