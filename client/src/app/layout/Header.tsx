import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Badge, IconButton, List, ListItem, Switch, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const midLinks=[
    {title:'catalog',path:'/catalog'},
    {title:'about',path:'/about'},
    {title:'contact',path:'/contact'},
]

const rightLinks=[
    {title:'login',path:'/login'},
    {title:'register',path:'/register'},
    
]
// Define the type for the props
type HeaderProps = {
    darkMode: boolean;
    setDarkmode: (mode: boolean) => void;
  };
  
export default function Header({darkMode,setDarkmode}:HeaderProps){
 
    const handleChange = () => {
        setDarkmode(!darkMode);
      };
    

    return(
        <AppBar position='static' sx={{mb:4}}> 
            <Toolbar>
                <Typography variant='h6' component={NavLink} to='/'
                 sx={{color:'inherit',textDecoration:'none'}}

                >
                    Restore
                </Typography>
                <Switch checked={darkMode} onChange={handleChange}/>
                <List sx={{display:'flex'}}>
                    {midLinks.map(({title,path})=>
                    (
                        <ListItem 
                        component={NavLink}
                        to={path}
                        key={path}
                        sx={{color:'inherit',typography:'h6'}}
                        >
                         {title.toUpperCase()}   
                        </ListItem>
                    ))}
                </List>

                    <IconButton size='large' edge='start' color='inherit'  sx={{mr:2}}>
                        <Badge badgeContent='4' color="secondary">
                            <ShoppingCart/>
                        </Badge>
                    </IconButton>

                <List sx={{display:'flex'}}>
                    {rightLinks.map(({title,path})=>
                    (
                        <ListItem 
                        component={NavLink}
                        to={path}
                        key={path}
                        sx={{color:'inherit',typography:'h6'}}
                        >
                         {title.toUpperCase()}   
                        </ListItem>
                    ))}
                </List>
            </Toolbar>
        </AppBar>
    )
}