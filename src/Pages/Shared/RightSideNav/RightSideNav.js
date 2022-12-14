import React, { useContext } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub,FaFacebook,FaTwitter,FaTwitch,FaWhatsapp} from "react-icons/fa";
import BrandCarousel from '../BrandCarousel/BrandCarousel';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';


const RightSideNav = () => {
    const {providerLogin} = useContext(AuthContext);

     const googleProvide = new GoogleAuthProvider();

    const handleGoogleSignIn =() =>{
     providerLogin(googleProvide)
     .then(result=>{
        const user = result.user;
        console.log(user);
     })
     .catch(error=>console.error(error))
    }


    return (
        <div>
            <ButtonGroup vertical>
               <Button onClick={handleGoogleSignIn} variant='outline-primary'> <FaGoogle></FaGoogle> Login with Google</Button>
               <Button variant='outline-dark'><FaGithub></FaGithub> Login with Github</Button>
            </ButtonGroup>
            <div className='mt-4'>
                <h5>Find us on</h5>
                <ListGroup>
                   <ListGroup.Item className='mb-2'><FaFacebook/> Facebook</ListGroup.Item>
                   <ListGroup.Item className='mb-2'><FaTwitter/> Twitter</ListGroup.Item>
                   <ListGroup.Item className='mb-2'><FaWhatsapp/> WhatsApp</ListGroup.Item>
                   <ListGroup.Item className='mb-2'><FaTwitch/> Twitch</ListGroup.Item>
                   <ListGroup.Item className='mb-2'>Terms and Condition</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <BrandCarousel></BrandCarousel>
            </div>
        </div>
    );
};

export default RightSideNav;