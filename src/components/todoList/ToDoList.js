import { Container } from "@mui/material";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import InputBase from "@mui/material/InputBase";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';
import DoneIcon from '@mui/icons-material/Done';
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { itemDone, itemCreated } from "../../actions";


const TodoList = () => {
    
    const todos = useSelector(state => state.todos);
    const dispatch = useDispatch();
    const [newItem, setNewItem] = useState('');
    const [check, setCheck] = useState(false);

    const checkItem = (id) => {
        console.log(id)
        dispatch(itemDone(id))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = uuidv4();
        const item = {
            description: newItem,
            done: false,
            id: id
        }
        dispatch(itemCreated(item));
        setNewItem('')
    }

    const renderTodos = (array) => {
        const arr = array.map((item, i) => {
            return (
                <div key={item.id} onClick={() => checkItem(item.id)}>
                    <ListItem button>
                        <ListItemText>
                            <Grid container>
                                <Grid item xs={1}>
                                    {item.done ? <DoneIcon  sx={{ color: 'success.main', margin: 'auto auto', position: 'absolute', top: '50%', transform: 'translate(0, -50%)' }}/> : null}
                                </Grid>
                                <Grid
                                    item 
                                    xs={9}
                                    sx={{
                                        margin: 'auto auto',
                                        display: 'flex',
                                        justifyContent: 'start'
                                    }}
                                >
                                    <Typography sx={{fontSize: '20px'}}>
                                        {item.description}
                                    </Typography>
                                </Grid>
                                <Grid item xs={2}>
                                    <Button>
                                        <DeleteIcon />
                                    </Button>
                                </Grid>
                            </Grid>
                        </ListItemText>
                    </ListItem>
                    {i == (array.length - 1) ? null : <Divider />} 
                </div>
            )
        })
        return arr
    }
    
    const elements = renderTodos(todos);

    return (
        <Container maxWidth="sm">
            <Paper 
                elevation={6}
                sx={{
                    textAlign: 'center',
                    marginTop: '20px',
                    marginBottom: '20px',
                    borderRadius: '10px',
                    padding: '10px'
                }}
            >
                <Paper
                    component="form"
                    sx={{  
                        display: 'flex', 
                        alignItems: 'center', 
                        width: '100%', 
                        borderRadius: '10px',
                        marginBottom: '20px'  
                    }}
                    variant='outlined'
                    onSubmit={handleSubmit}
                >               
                    <InputBase
                        sx={{ m: '10px', flex: 1, fontWeight: '300', fontSize: '20px' }}
                        placeholder="What needs to be done?"
                        value={newItem}
                        onChange={e => setNewItem(e.target.value)}
                        
                    />
                </Paper>
                <List  component="nav" aria-label="mailbox folders">
                    {elements}
                </List>
                <ButtonGroup 
                    variant="text"
                    sx={{
                        marginTop: '20px',
                        padding: '10px',
                        '& .MuiButton-root': {
                            padding: '10px 30px',
                            borderRadius: '10px'
                        }
                    }}
                >
                    <Button>All</Button>
                    <Button>Active</Button>
                    <Button>Done</Button>
                </ButtonGroup>
            </Paper>
        </Container>
    )
}

export default TodoList;