import { Avatar, Button, Card, CardContent } from '@mui/material';

export const NewPostCard = () => {
    return (
        <Card>
            <CardContent sx={{ display: 'flex', alignItems: 'center' }}>
                <Avatar />
                <Button
                    sx={{
                        ml: 2,
                        width: '100%',
                        padding: '10px 15px',
                        justifyContent: 'flex-start',
                        borderRadius: '50px',
                        textTransform: 'none'
                    }}
                    color="secondary"
                    variant="outlined"
                >
                    No que você está pensando?
                </Button>
            </CardContent>
        </Card>
    );
};
