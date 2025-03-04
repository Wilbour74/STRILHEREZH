import React from 'react';
import logo from '../assets/Skornennlogo.png';
import canette from '../assets/Image1.png';
import Image2 from '../assets/Image2.jpg';
import Image3 from '../assets/Image3.png';
import {ReactComponent as Ice1} from '../assets/ice border 1.svg';
import {ReactComponent as Ice2} from '../assets/ice border 2.svg';
import {ReactComponent as Ice3} from '../assets/ice border 3.svg';
import CarouselAuto from '../components/Carousel';
import News from '../components/News';
import Navbar from '../components/Navbar';
import Important from '../components/Important';
import Background3 from '../assets/background3.jpg';
import grid1 from '../assets/grid1.png';
import grid2 from '../assets/grid2.png';
import grid3 from '../assets/grid3.jpg';
import grid4 from '../assets/grid4.png';
import grid5 from '../assets/grid5.jpg';





const Home: React.FC = () => {
  return (
    
    <main className="flex flex-col min-h-screen relative font-noto overflow-x-hidden">
      <Navbar/>
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

      <section className='relative bg-[##eeeee4] bg-opcaity-80 z-20 m-0 pb-40'>
        <News/>
      </section>

      <section style={{ backgroundImage: `url(${Image2})` }} className="bg-cover bg-center bg-fixed">
            <Ice1 className="" />
            <div className='relative flex flex-col items-start pt-[15rem] ml-[7.5rem] max-w-full pb-[17.5rem]'>
                <h1 className='text-white text-[2.5rem] text-left'>Skornenn, cidrier de caractere</h1>
                <div className='text-white text-[0.9375rem] mt-[0.625rem] text-left max-w-2xl'>
                    <p className='mb-[1.5rem]'>Au cœur de la Bretagne, terre de légendes et de traditions, la distillerie Skornenn se distingue par son engagement à produire des cidres d'exception. Fondée par des passionnés du terroir breton, Skornenn allie savoir-faire ancestral et innovation moderne pour offrir une gamme de cidres doux et parfumés, disponibles avec et sans alcool, en canette et en bouteille.</p>
                    <p className='mb-[1.5rem]'>Les vergers de Skornenn, situés dans les vallons verdoyants de la Bretagne, bénéficient d'un climat tempéré idéal pour la culture des pommes à cidre. Chaque pomme est sélectionnée pour sa qualité et son goût unique, garantissant ainsi un cidre authentique et savoureux.</p>
                    <p className='mb-[1.5rem]'>À Skornenn, la production du cidre est un véritable art. Les pommes, récoltées à la main, sont pressées selon des méthodes traditionnelles pour en extraire le meilleur jus. La fermentation est réalisée lentement, permettant de développer des arômes riches et complexes. Cette attention portée à chaque étape de la production assure un cidre doux et parfumé, reflet du terroir breton. (textes générés par Chat GPT)</p>
                    <p className='mb-[2rem]'>6 NUANCES DE CIDRES</p>

                    <button className='border-2 border-white px-[5rem] py-[0.75rem] text-[1.25rem]'>Decouvrir notre histoire</button>
                </div>
            </div>
            <Ice2 className="m-0 p-0" />
        </section>

        <section style={{ backgroundImage: `url(${Image3})` }} className="relative flex items-center justify-center p-4 py-[17.25rem]">
            
            <div className="container flex flex-row items-center justify-center p-0 py-[25px] pt-[40px]">
                <div className="w-[35%]">
                    <h1 className="text-[2.5rem] mt-[-40px] mb-10 text-[#87CEFA] ">Un vent frais pour le cidre breton.</h1>
                    <div className='text-[#6C839A]'>
                        <p className="mb-2">Lorem ipsum dolor sit amet consectetur. Est donec lorem neque ultrices. Bibendum vitae donec augue viverra pulvinar pharetra platea nunc dui. Molestie vel purus porttitor mi eget vel sit orci nunc.</p>
                        <p className="mb-2">Facilisis est egestas enim amet dapibus in malesuada pellentesque. Gravida ornare justo arcu integer habitant tellus. Leo velit tellus convallis interdum orci faucibus. Eleifend pellentesque a odio adipiscing lacinia morbi egestas ornare. Sed ornare fermentum aliquam platea pellentesque eu risus. Eget nisl nulla sagittis scelerisque.</p>
                        <p className="mb-2">Id nec viverra elementum ac. Neque id ante dignissim pellentesque nisl.</p>
                        <p>Habitant in eu ultrices sed. Ut varius libero massa commodo. Vestibulum aenean mattis commodo sagittis amet feugiat urna eget pellentesque.</p>
                    </div>
                </div>
                <div className="">
                    <img src={canette} alt="canette" className="h-[35.5rem] w-[32rem]" />
                </div>
            </div>
            
        </section>
        
        <section >
        <div style={{ position: 'relative' }}>
            <Ice3 style={{ position: 'absolute', zIndex: 2, top: '-10px' }} />
            <CarouselAuto />
        </div>
        </section>
        <section style={{ backgroundImage: `url(${Background3})`}}>
             <Important/>
        </section>

        <section>
            <div className='flex flex-row gap-[20px] overflow-x-hidden'>
                <div className='relative w-[calc(50vw-1.25rem)] h-[50rem] pt-[1.25rem] pl-[1.25rem] pb-[1.25rem] box-border'>
                    <img src={grid1} className='w-full h-full object-cover'/>
                    <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center text-white text-3xl font-bold'>
                        Texte sur l'image 1
                    </div>
                </div>
                <div className='relative w-[calc(50vw-1.25rem)] h-[50rem] pt-[1.25rem] pr-[1.25rem] pb-[1.25rem] box-border'>
                    <img src={grid2} className='w-full h-full object-cover' />
                    <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center text-white text-3xl font-bold'>
                        Texte sur l'image 2
                    </div>
                </div>
            </div>
            <div className='relative w-screen h-[37.5rem] pl-[1.25rem] pr-[2.50rem] box-border'>
                <img src={grid3} className='w-full h-full object-cover'/>
                <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center text-white text-3xl font-bold'>
                        Texte sur l'image 3
                    </div>
            </div>
        </section>
    </main>
  );
};

export default Home;
