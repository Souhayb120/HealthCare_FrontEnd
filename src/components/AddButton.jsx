import Button from '@mui/material/Button';
const AddButton = ({name})=>{
return(
      <div style={{textAlign:'right'}}>
    <Button  variant="contained" color="success">
      
{name}
       
</Button>
 </div>
  
)
}
export default AddButton;