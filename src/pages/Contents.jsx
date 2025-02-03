import meImage from "../assets/portfolio-image-3.png";
import Typewriter from "../animation/Typewriter";
import { Button } from "@headlessui/react";
import { motion } from "framer-motion";

const text = "Hello!";
const letters = text.split("");

export default function Contents() {
  return (
    <>
      <div className="min-h-full sm:pt-0 sm:pb-0 md:pt-35 md:pb-35">
        <div className="col-2 md:columns-2 sm:px-6 lg:px-8 mx-auto max-w-7xl px-4 flex flex-col md:flex-row justify-center items-center pt-20 md:pt-0">
          <div className="flex flex-col justify-center p-4 w-full md:w-1/2">
            <motion.p
              className="text-2xl underline"
              initial="hidden"
              animate="visible"
              style={{ display: "flex" }}
            >
              {letters.map((letter, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: -20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.15,
                  }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </motion.p>
            <Typewriter
              text="I'm Lawrence, Wordpress & Shopify Developer"
              delay={50}
              className="text-5xl font-bold"
            />
            <motion.p
              className="text-lg mt-5"
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 1 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.05 },
                },
              }}
            >
              {`A proficient Shopify and WordPress developer with expertise building and maintaining websites for different types of companies. My area of expertise is creating web platforms that are practical, responsive, and easy to use so that businesses can increase their online visibility.`
                .split(" ")
                .map((word, index) => (
                  <motion.span
                    key={index}
                    style={{ display: "inline-block" }}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    {word}&nbsp;
                  </motion.span>
                ))}
            </motion.p>
            <div className="mt-5">
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
          <motion.div
            className="md:w-1/2 p-4 flex justify-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <img src={meImage} alt="Me" className="" />
          </motion.div>
        </div>
      </div>

      {/* about me section */}
      <div
        className="min-h-full sm:pt-0 sm:pb-0 md:pt-0 md:pb-0 bg-black"
        id="about-me"
      >
        <div className="columns-2 md:columns-2 sm:px-6 lg:px-8 mx-auto max-w-7xl px-4 flex flex-col md:flex-row justify-center items-start pt-20 pb-20 sm:pt-10 sm-pt-10">
          <div className="col-2 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col flex-wrap justify-center items-start pt-20 md:pt-0 w-full md:w-1/2 gap-4">
            <div className="relative max-lg:row-start-1 transform transition-transform duration-500 hover:scale-105">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem] shadow-md"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10 md:pb-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                    Custom Web Solutions
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    Delivering beautifully designed and functional custom
                    websites and online marketplaces.
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2"></div>
              </div>
            </div>

            <div className="relative max-lg:row-start-1 transform transition-transform duration-500 hover:scale-105">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10 md:pb-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                    Expert in WordPress & Shopify
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    Building user-friendly, responsive websites to satisfy your
                    requirements.
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2"></div>
              </div>
            </div>
            <div className="relative max-lg:row-start-1 transform transition-transform duration-500 hover:scale-105">
              <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem]"></div>
              <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)]">
                <div className="px-8 pt-8 sm:px-10 sm:pt-10 md:pb-10">
                  <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                    Turning Ideas into Websites | Web Developer
                  </p>
                  <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                    Creating visually appealing and intuitive websites that not
                    only present your concepts but also provide your audience
                    with smooth, memorable experiences.{" "}
                  </p>
                </div>
                <div className="flex flex-1 items-center justify-center px-8 max-lg:pt-10 max-lg:pb-12 sm:px-10 lg:pb-2"></div>
              </div>
            </div>
          </div>
          <div className="col-2 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-start pt-20 md:pt-0 w-full md:w-1/2">
            <p className="text-5xl text-white">About me</p>
          </div>
        </div>
      </div>
    </>
  );
}
