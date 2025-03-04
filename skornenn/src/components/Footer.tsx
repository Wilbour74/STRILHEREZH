import React from 'react';
import logo from '../assets/Skornennlogo.png';
import FooterBg from '../assets/footer.jpg';
import {ReactComponent as Fb} from '../assets/faceboook.svg';
import {ReactComponent as Insta} from '../assets/insta.svg';
import {ReactComponent as X} from '../assets/x.svg';
import In from '../assets/in.png';

const Footer: React.FC = () => {
    return(
        <footer className='mt-60 pb-60 bg-cover bg-center bg-fixed' style={{backgroundImage: `url(${FooterBg}`}}>
            <div className='bg-white'>
            <div className='flex flex-col justify-center items-center'>
            <img src={logo} className='w-[18.75rem] pt-10'/>
            <p className='mt-6'>© Skornenn 2024 - all right reserved</p>
            <div className='flex gap-10 text-[1rem] mt-14 pb-6'>
                <p>Cidres parfumés</p>
                <p>Cidres nature</p>
                <p>Cidres BIO</p>
                <p>Cidres sans alcool</p>
                <p>Cidres Glace</p>
            </div>
            </div>
            </div>
            <div className='flex flex-row gap-10 mt-14 justify-center items-center'>
                <Insta className='border-2 bg-white rounded-full w-[2.813rem] h-[2.813rem]'/>
                <Fb className='border-2 bg-white rounded-full w-[2.813rem] h-[2.813rem]'/>
                <X className='border-2 bg-white rounded-full w-[2.813rem] h-[2.813rem]'/>
                <img src={In} className='border-2 bg-white rounded-full w-[2.813rem] h-[2.813rem]'/>
            </div>
            <div className='absolute bottom-4 left-0 right-0 flex justify-center items-center gap-10 text-[0.85rem] mt-14 text-white'>
                <p>CGU</p>
                <p>CGV</p>
                <p>Politique de confidentialité</p>
                <p>Mentions légales</p>
                <p>Contacts</p>
            </div>
        </footer>
    )
}

export default Footer;