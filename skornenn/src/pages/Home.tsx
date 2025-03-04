import React from 'react';
import logo from '../assets/Skornennlogo.png';
import canette from '../assets/Image1.png';
import Image2 from '../assets/Image2.jpg';
import Image3 from '../assets/Image3.jpg';
import {ReactComponent as Ice1} from '../assets/ice border 1.svg';
import {ReactComponent as Ice2} from '../assets/ice border 2.svg';
import {ReactComponent as Ice3} from '../assets/ice border 3.svg';
import CarouselAuto from '../components/Carousel';
import Frame1 from '../assets/frame1.png';
import Frame2 from '../assets/frame2.png';
import Frame3 from '../assets/frame3.png';
import Frame4 from '../assets/frame4.png';
import Frame5 from '../assets/frame5.png';





const Home: React.FC = () => {
    let slides = [
        Frame1,
        Frame2,
        Frame3,
        Frame4,
        Frame5,
    ]
  return (
    <main className="flex flex-col min-h-screen relative font-noto overflow-x-hidden">
      {/* Section contenant la vidéo en arrière-plan */}
      <section className="relative h-screen">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover brightness-50 bg-fixed"
          src="https://s3-figma-videos-production-sig.figma.com/video/1293519332723811622/TEAM/1145/fcea/-fe1c-42e8-bf38-2ef4115ecc3e?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Ns-CqKQUDxivd~YjB0p2IXAezHYBgUSBAPzpzvshuumwliWT0E9~jy4725HAmayHEAie7DB7hC~eIe41lMJcqWE~1EMf6IERZtLGhD7bVYTQAUbf6Vp3PsspnOeB7bNSdTwFvrPGcfLxBdTj-Qss3TmId1g87dm8twFzo4Q0RGJ6OpAv2CSPcbdbULFZkjSdNXShC4SvVXh5szt7MLLoezPi3lMJzZAwgMQuLJ18tZMWuxn23x0N2EjgO1B~LZHMFHzVjf7Xl8MNg3PiklN03T9SMVgIhLkvsKMbrw1gn~BK5VD7U2f2Uge0VZFtTea4ghYlpGNOkdFpCTLQe6Losg__"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <img className="shadow-lg p-4" src={logo} alt="Skornenn Logo" />
        </div>
      </section>

      <section className="relative bg-white bg-opacity-80 z-20">
        <div className="absolute inset-x-0 bottom-0 bg-white bg-opacity-80 p-8">
          <div className="text-center">
            <hr className="border-t-2 border-black-300 my-4" />
            <p>Les nouveautés</p>
            <hr className="border-t-2 border-black-300 my-4" />
          </div>
        </div>
      </section>

      <section className='relative bg-white bg-opcaity-80 z-20 m-0 pb-40'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        <div className='border-2 p-6 mt-6 mx-auto'>
            <div className='flex justify-center items-center'>
                <img src={canette} className='h-48 w-96 object-scale-down' alt="Canette Oranges Sanguines" />
            </div>
            <h2 className='text-[#87CEFA]'>Canette Oranges Sanguines</h2>
            <p>Lorem ipsum dolor sit amet consecteutur. Orci vitae platea non leo lobortis lacus diam elit nibh. Condimentum velit amet amet in tempus. Arcu felis elit accumsan rutrum non pharertra. Donec netus integer magna rhoncus tellus.</p>
            <p>1.70€ / 33CL</p>
        </div>
        <div className='border-2 p-6 mt-6 mx-auto'>
            <div className='flex justify-center items-center'>
                <img src={canette} className='h-48 w-96 object-scale-down' alt="Canette Oranges Sanguines" />
            </div>
            <h2 className='text-[#87CEFA]'>Canette Oranges Sanguines</h2>
            <p>Lorem ipsum dolor sit amet consecteutur. Orci vitae platea non leo lobortis lacus diam elit nibh. Condimentum velit amet amet in tempus. Arcu felis elit accumsan rutrum non pharertra. Donec netus integer magna rhoncus tellus.</p>
            <p>1.70€ / 33CL</p>
        </div>
        <div className='border-2 p-6 mt-6 mx-auto'>
            <div className='flex justify-center items-center'>
                <img src={canette} className='h-48 w-96 object-scale-down' alt="Canette Oranges Sanguines" />
            </div>
            <h2 className='text-[#87CEFA]'>Canette Oranges Sanguines</h2>
            <p>Lorem ipsum dolor sit amet consecteutur. Orci vitae platea non leo lobortis lacus diam elit nibh. Condimentum velit amet amet in tempus. Arcu felis elit accumsan rutrum non pharertra. Donec netus integer magna rhoncus tellus.</p>
            <p>1.70€ / 33CL</p>
        </div>
        <div className='border-2 p-6 mt-6 mx-auto'>
            <div className='flex justify-center items-center'>
                <img src={canette} className='h-48 w-96 object-scale-down' alt="Canette Oranges Sanguines" />
            </div>
            <h2 className='text-[#87CEFA]'>Canette Oranges Sanguines</h2>
            <p>Lorem ipsum dolor sit amet consecteutur. Orci vitae platea non leo lobortis lacus diam elit nibh. Condimentum velit amet amet in tempus. Arcu felis elit accumsan rutrum non pharertra. Donec netus integer magna rhoncus tellus.</p>
            <p>1.70€ / 33CL</p>
        </div>
        <div className='border-2 p-6 mt-6 mx-auto'>
            <div className='flex justify-center items-center'>
                <img src={canette} className='h-48 w-96 object-scale-down' alt="Canette Oranges Sanguines" />
            </div>
            <h2 className='text-[#87CEFA]'>Canette Oranges Sanguines</h2>
            <p>Lorem ipsum dolor sit amet consecteutur. Orci vitae platea non leo lobortis lacus diam elit nibh. Condimentum velit amet amet in tempus. Arcu felis elit accumsan rutrum non pharertra. Donec netus integer magna rhoncus tellus.</p>
            <p>1.70€ / 33CL</p>
        </div>
        <div className='border-2 p-6 mt-6 mx-auto'>
            <div className='flex justify-center items-center'>
                <img src={canette} className='h-48 w-96 object-scale-down' alt="Canette Oranges Sanguines" />
            </div>
            <h2 className='text-[#87CEFA]'>Canette Oranges Sanguines</h2>
            <p>Lorem ipsum dolor sit amet consecteutur. Orci vitae platea non leo lobortis lacus diam elit nibh. Condimentum velit amet amet in tempus. Arcu felis elit accumsan rutrum non pharertra. Donec netus integer magna rhoncus tellus.</p>
            <p>1.70€ / 33CL</p>
        </div>
        </div>
      </section>

      <section style={{ backgroundImage: `url(${Image2})` }} className="bg-cover bg-center bg-fixed brightness-80">
        <Ice1 className="" />
        <div className='relative flex flex-col items-start pt-40 ml-40 max-w-full pb-40'>
            <h1 className='text-white text-[40px] text-left'>Skornenn, cidrier de caractere</h1>
            <div className='text-white text-[15px] mt-10 text-left max-w-2xl'>
            <p className='mb-6'>Au cœur de la Bretagne, terre de légendes et de traditions, la distillerie Skornenn se distingue par son engagement à produire des cidres d'exception. Fondée par des passionnés du terroir breton, Skornenn allie savoir-faire ancestral et innovation moderne pour offrir une gamme de cidres doux et parfumés, disponibles avec et sans alcool, en canette et en bouteille.</p>
            <p className='mb-6'>Les vergers de Skornenn, situés dans les vallons verdoyants de la Bretagne, bénéficient d'un climat tempéré idéal pour la culture des pommes à cidre. Chaque pomme est sélectionnée pour sa qualité et son goût unique, garantissant ainsi un cidre authentique et savoureux.</p>
            <p className='mb-6'>À Skornenn, la production du cidre est un véritable art. Les pommes, récoltées à la main, sont pressées selon des méthodes traditionnelles pour en extraire le meilleur jus. La fermentation est réalisée lentement, permettant de développer des arômes riches et complexes. Cette attention portée à chaque étape de la production assure un cidre doux et parfumé, reflet du terroir breton. (textes générés par Chat GPT)</p>
            <p className='mb-12'>6 NUANCES DE CIDRES</p>

            <button className='border-2 border-white px-20 py-3 text-[20px]'>Decouvrir notre histoire</button>
            </div>
        </div>
        <Ice2 className="" />
       </section>

        <section style={{ backgroundImage: `url(${Image3})` }} className="relative flex items-center justify-between p-4">
        
        <div className="flex flex-col w-1/2 ml-[200px]">
            <h1 className="text-3xl font-bold mb-4">Un vent frais pour le cidre breton.</h1>
            <p className="mb-2">Lorem ipsum dolor sit amet consectetur. Est donec lorem neque ultrices. Bibendum vitae donec augue viverra pulvinar pharetra platea nunc dui. Molestie vel purus porttitor mi eget vel sit orci nunc.</p>
            <p className="mb-2">Facilisis est egestas enim amet dapibus in malesuada pellentesque. Gravida ornare justo arcu integer habitant tellus. Leo velit tellus convallis interdum orci faucibus. Eleifend pellentesque a odio adipiscing lacinia morbi egestas ornare. Sed ornare fermentum aliquam platea pellentesque eu risus. Eget nisl nulla sagittis scelerisque.</p>
            <p className="mb-2">Id nec viverra elementum ac. Neque id ante dignissim pellentesque nisl.</p>
            <p>Habitant in eu ultrices sed. Ut varius libero massa commodo. Vestibulum aenean mattis commodo sagittis amet feugiat urna eget pellentesque.</p>
        </div>
        <div className="w-1/2 flex justify-center">
            <img src={canette} alt="canette" className="h-[480px] w-[487]" />
        </div>
        </section>
        <section>
            <div className='w-[100%]' >
                <CarouselAuto/>
            </div>
        </section>
    </main>
  );
};

export default Home;
