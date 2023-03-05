import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './App.css'

function App() {
  return(
    <Container id='main-container' className='d-grid h-100'>
      <Form id='sign-in-form' className='text-center w-100'>
        <img className='mb-4 anime-logo' 
        src='https://uploads.dailydot.com/f24/ae/97c3e8e35b8adb3b.jpg?auto=compress&fm=pjpg'
        alt='Boostrap 5'/>
        <h1 className='fs-3 fw-normal'>Sign in or this reality gets IT!</h1>
        <Form.Group controlId='user-full-name'>
          <Form.Control className='mb-4' type='name' size='lg' placeholder='Full Name' autoComplete='name' />
        </Form.Group>
        <Form.Group controlId='sign-in-email-address'>
          <Form.Control className='mb-4' type='email' size='lg' placeholder='Email Address' autoComplete='username' />
        </Form.Group>
        <Form.Group controlId='sign-in-password'>
          <Form.Control className='mb-4' type='password' size='lg' placeholder='Password' autoComplete='current-password' />
        </Form.Group>
        <Form.Group controlId='remember-me' className='mb-4 d-flex justify-content-center'>
          <Form.Check label='Remember Me' />
        </Form.Group>
        <div className='mb-4 d-grid'>
          <Button variant='primary' size='lg'>Sign In</Button>
        </div>
        <p>&copy; 2023</p>
      </Form>
    </Container>
  );
}
export default App;