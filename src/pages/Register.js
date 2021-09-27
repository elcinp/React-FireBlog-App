import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { createUser, signUpProvider } from "../helpers/firebase";
import { Grid, Container, Paper, Avatar, Typography, TextField, Button, CssBaseline } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
// import blogImage from '../assests/blok.png'



const useStyles = makeStyles(theme => ({
	root: {
		backgroundImage: 'url("https://picsum.photos/1600/900")',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		height: '100vh'
	},
	container: {
		opacity: '0.8',
		height: 'max-content',
		marginTop: theme.spacing(10),
		[theme.breakpoints.down(400 + theme.spacing(2) + 2)]: {
			marginTop: 0,
			width: '100%',
			height: '100%'
		}
	},
	div: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.primary.main
	},
	form: {
		width: '100%',
		marginTop: theme.spacing(1)
	},
	button: {
		margin: theme.spacing(3, 0, 2)
	},
    blogImage: {
        width:'80px',
        height:'80px'
    }
}))

const Register = ({setIsAuth}) => {
	const [user, setUser] = useState({ email: '', password: '' })
	const classes = useStyles()
	const history = useHistory()


	const handleChange = e => {
		setUser({
			...user,
			[e.target.name]: e.target.value
		})
	}

	const handleRegister = () => {
		console.log(user)
    	createUser(user.email, user.password);
		setIsAuth(true)
    	history.push('/');
	}

	// const handleProviderRegister = () => {
    // 	signUpProvider();
    // 	history.push('/dashboard');
    // }
	const handleProviderRegister = () => {
		signUpProvider();
		history.push('/')
	}

	

	return (
		<Grid container component='main' className={classes.root}>
			<CssBaseline />
			<Container component={Paper} elevation={5} maxWidth='xs' className={classes.container}>
				<div className={classes.div}>
					<Avatar className={classes.avatar}>
						<blogImage className={classes.blogImage}/>
					</Avatar>
					<Typography component='h1' variant='h5'>── REGISTER ── </Typography>
					<form className={classes.form} >
						<TextField
							fullWidth
							autoFocus
                            type='email'
							color='primary'
							margin='normal'
							variant='outlined'
							label='Email'
							name='email'
							value={user.email}
							onChange={handleChange}
						/>
						<TextField
							fullWidth
							type='password'
							color='primary'
							margin='normal'
							variant='outlined'
							label='Password'
							name='password'
							value={user.password}
							onChange={handleChange}
						/>
						<Button
							fullWidth
							variant='contained'
							color='secondary'
							className={classes.button}
							onClick={handleRegister}
						>
							REGISTER
						</Button>
						<Button
							fullWidth
							variant='contained'
							color='secondary'
							className={classes.button}
							onClick={handleProviderRegister}
						>
							WITH GOOGLE
						</Button>
					</form>
				</div>
			</Container>
		</Grid>
	)
}

export default Register

