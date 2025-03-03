import React from 'react';
import logo from '../assets/Skornennlogo.png';
import canette from '../assets/Image1.png';
import Image2 from '../assets/Image2.jpg';
import {ReactComponent as Ice1} from '../assets/ice border 1.svg';
import {ReactComponent as Ice2} from '../assets/ice border 2.svg';

const Home: React.FC = () => {
  return (
    <main className="flex flex-col min-h-screen relative">
      {/* Section contenant la vidéo en arrière-plan */}
      <section className="relative h-screen">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover brightness-50"
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

      <section style={{ backgroundImage: `url(${Image2})` }} className="bg-cover bg-center">
        <Ice1 className="" />
        <div className='relative flex flex-col items-start mt-40 ml-40 max-w-full'>
            <h1 className='text-white text-[40px] text-left'>Skornenn, cidrier de caractere</h1>
            <div className='text-white text-[15px] mt-10 text-left max-w-2xl'>
            <p className=''>Au cœur de la Bretagne, terre de légendes et de traditions, la distillerie Skornenn se distingue par son engagement à produire des cidres d'exception. Fondée par des passionnés du terroir breton, Skornenn allie savoir-faire ancestral et innovation moderne pour offrir une gamme de cidres doux et parfumés, disponibles avec et sans alcool, en canette et en bouteille.</p>
            <p>Les vergers de Skornenn, situés dans les vallons verdoyants de la Bretagne, bénéficient d'un climat tempéré idéal pour la culture des pommes à cidre. Chaque pomme est sélectionnée pour sa qualité et son goût unique, garantissant ainsi un cidre authentique et savoureux.</p>
            <p>À Skornenn, la production du cidre est un véritable art. Les pommes, récoltées à la main, sont pressées selon des méthodes traditionnelles pour en extraire le meilleur jus. La fermentation est réalisée lentement, permettant de développer des arômes riches et complexes. Cette attention portée à chaque étape de la production assure un cidre doux et parfumé, reflet du terroir breton. (textes générés par Chat GPT)</p>
            <p>6 NUANCES DE CIDRES</p>
            </div>
        </div>
        <Ice2 className="" />
       </section>
    </main>
  );
};

export default Home;
