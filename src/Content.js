import {Button, Card, CardContent, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete'

const Content = ({contents,handleDelete}) => {

    
  return (
    <div className='container content' >

    {contents.map(content => (

    <Card className='note-card' key={content.id} sx={{ maxWidth: 500, display: 'inline-block', margin: '10px' }}>
    <CardContent >
      <Typography variant="h5" component="div">
        {content.title}
      </Typography>
      <Typography variant="body2">
        {content.Description}
      </Typography>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop:'15px', cursor:'pointer' }}>
      <Button onClick={()=>handleDelete(content.id)}>
              <DeleteIcon />
      </Button>
              </div>
    </CardContent>
  </Card>
  ))}
  </div>
  )
}

export default Content