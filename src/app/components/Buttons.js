import Button from '@mui/material/Button'
export default function ButtonUsage(props) {
    const bgColor = props.bg || 'blue';
    const textColor = props.color || 'white';

    return <Button 
    variant="contained"
    sx={{
        color: textColor,
        backgroundColor: bgColor  ,
    }}
    >Hello
    </Button>
}
