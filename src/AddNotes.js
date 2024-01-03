import { Button, TextField, Box } from '@mui/material';
import { useState } from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const AddNotes = ({ title, setTitle, note, setNote, handleSubmit,addNewItems }) => {
  const [isClick, setIsClick] = useState(false);

  return (
    <Box display="flex" justifyContent="center">
    {isClick && (  
    <form onSubmit={handleSubmit} className='add-notes'>
        <TextField
          label="Title"
          fullWidth
          margin="normal"
          value={title}
          onClick={() => setIsClick(true)}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        /> 
        
          <div>
            <TextField
              label="Description"
              fullWidth
              rows={4}
              multiline
              margin="normal"
              value={note}
              onChange={(e) => {
                setNote(e.target.value);
              }}
            />
            <Box display="flex" justifyContent="center">
              <Button variant="contained" color="primary" onClick={()=>addNewItems()}>
                Add
              </Button>
            </Box>
          </div>
        
            
      </form>
    )}

    {!isClick && (
      <Button label="Add Note" margin='normal' onClick={() => setIsClick(true)} sx={{marginTop:'10px'}}>
        <AddCircleOutlineIcon  fontSize='large'/> <h2> Create Note</h2>
      </Button>
    )}
    </Box>
  );
};

export default AddNotes;