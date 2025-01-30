import meImage from '../assets/portfolio-image-3.png';
import Typewriter from '../animation/Typewriter';
import { Button } from '@headlessui/react';


export default function Contents() {
    return (
        <>
        <div className="min-h-full sm:pt-0 sm:pb-0 md:pt-35 md:pb-35">
        <div className="columns-2 md:columns-2 sm:px-6 lg:px-8 mx-auto max-w-7xl px-4 flex flex-col md:flex-row justify-center items-center pt-20 md:pt-0">
            <div className="w-full md:w-1/2 flex flex-col justify-center p-4">
               <p className="text-2xl underline">
               Hello!
                </p>
                <Typewriter text="I'm Lawrence, Wordpress & Shopify Developer" delay={50} className="text-5xl font-bold" />
                <p className="text-lg mt-5">
                A proficient Shopify and WordPress developer with expertise building and maintaining websites for different types of companies. My area of expertise is creating web platforms that are practical, responsive, and easy to use so that businesses can increase their online visibility.
                </p>
                <div className='mt-5'>
                    <Button
                                        as="a"
                                        href="https://drive.google.com/file/d/1RU-ef_nxXQZzo8SBL3FG7ygXCJznVNpA/view?usp=sharing"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        type="button"
                                        className="inline-flex items-center gap-2 rounded-md bg-black py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[hover]:text-white data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
                                      >
                                        View CV
                                      </Button>
                    <Button
                                        as="a"
                                        href="tel:+639614650542"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        type="button"
                                        className="inline-flex items-center gap-2 rounded-md border-2 border-black py-1.5 px-3 text-sm/6 font-semibold text-black shadow-inner shadow-white/10 focus:outline-none hover:bg-gray-600 hover:text-white hover:border-gray-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white ms-8"
                                      >
                                        Contact me
                                      </Button>
                </div>
            </div>
            <div className="w-full md:w-1/2 p-4 flex justify-end">
                <img src={meImage} alt="Me" className=""/>
            </div>
        </div>
        </div>

        {/* about me section */}
        <div className="min-h-full sm:pt-0 sm:pb-0 md:pt-35 md:pb-35 bg-black">
        <div className="columns-2 md:columns-2 sm:px-6 lg:px-8 mx-auto max-w-7xl px-4 flex flex-col md:flex-row justify-center items-center pt-20 md:pt-0">
            <div className="col-2 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-start pt-20 md:pt-0">
                <p className="text-2xl underline text-white">
                About me
                </p>
                <p className="text-lg text-white mt-5">
                I am a Shopify and WordPress developer with over 5 years of experience in the industry. I have worked with various companies to build and maintain their websites. I am passionate about creating web platforms that are practical, responsive, and easy to use so that businesses can increase their online visibility.
                </p>
            </div>
            <div className="col-2 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center pt-20 md:pt-0">
                <p className="text-2xl underline text-white">
                About me
                </p>
                <p className="text-lg text-white mt-5">
                I am a Shopify and WordPress developer with over 5 years of experience in the industry. I have worked with various companies to build and maintain their websites. I am passionate about creating web platforms that are practical, responsive, and easy to use so that businesses can increase their online visibility.
                </p>
            </div>
            </div>
        </div>
        
        </>
    )
}