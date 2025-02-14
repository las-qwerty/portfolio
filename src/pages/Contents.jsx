import meImage from "../assets/portfolio-image-3.png";
import Typewriter from "../animation/Typewriter";
import { motion, useAnimation, useDragControls } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import wordpress from "../assets/wordpress.svg";
import shopify from "../assets/shopify.png";
import elementor from "../assets/elementor.svg";
import divi from "../assets/divi.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import js from "../assets/js.png";
import springboot from "../assets/springboot.svg";
import java from "../assets/java.svg";
import tailwind from "../assets/tailwindcss.png";
import project1 from "../assets/vwtl-website.png";
import project2 from "../assets/gencool-website.png";
import project3 from "../assets/exclusiveblanks-web.png";
import { Button } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/20/solid";

const text = "Hello!";
const letters = text.split("");

const SkillCard = ({ skill }) => (
  <div className="flex flex-col items-center bg-white p-5 rounded-lg shadow-md mx-2 min-w-[120px]">
    <img
      src={skill.logo}
      alt={`${skill.name} logo`}
      className="w-16 h-16 mb-2 object-contain"
    />
    <p className="text-xs font-medium text-gray-800 mt-1">{skill.name}</p>
  </div>
);

const PortfolioCard = ({ portfolio_card }) => (
  <div className="flex flex-col items-center p-7 bg-white rounded-2xl drop-shadow-2xl w-full">
    <div className="w-full h-full overflow-hidden">
      <img
        src={portfolio_card.img}
        alt=""
        className="w-full h-full object-cover rounded-md"
      />
    </div>
    <p className="text-lg font-medium text-gray-800 mt-4">
      {portfolio_card.title}
    </p>
    <span className="text-sm text-gray-600 mt-2">
      {portfolio_card.description}
    </span>
    <div className="mt-4">
      <Button
        as="a"
        href={portfolio_card.link}
        target="_blank"
        rel="noopener noreferrer"
        type="button"
        className="inline-flex items-center gap-2 rounded-md bg-black hover:bg-white py-2 px-4 text-sm font-semibold text-white shadow-inner shadow-white/10 focus:outline-none hover:text-black border-2 solid"
      >
        {portfolio_card.button}
      </Button>
    </div>
  </div>
);

const tiers = [
  {
    name: "Hobby",
    id: "tier-hobby",
    href: "#",
    priceMonthly: "$29",
    description:
      "The perfect plan if you're just getting started with our product.",
    features: [
      "25 products",
      "Up to 10,000 subscribers",
      "Advanced analytics",
      "24-hour support response time",
    ],
    featured: false,
  },
  {
    name: "Enterprise",
    id: "tier-enterprise",
    href: "#",
    priceMonthly: "$99",
    description: "Dedicated support and infrastructure for your company.",
    features: [
      "Unlimited products",
      "Unlimited subscribers",
      "Advanced analytics",
      "Dedicated support representative",
      "Marketing automations",
      "Custom integrations",
    ],
    featured: true,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Contents() {
  const portfolio_cards = [
    {
      img: project1,
      title: "E-commerce Website",
      description: "Description 1",
      button: "View",
      link: "https://vibewiththelegends.ph/",
    },
    {
      img: project2,
      title: "Business Website",
      description: "Description 1",
      button: "View",
      link: "https://gencoolhvac.com/",
    },
    {
      img: project3,
      title: "E-commerce Website",
      description: "Description 1",
      button: "View",
      link: "https://exclusiveblanks.com/",
    },
  ];

  // start code for about section skills
  const controls = useAnimation();
  const skills = [
    { name: "WordPress", logo: wordpress },
    { name: "Shopify", logo: shopify },
    { name: "Elementor", logo: elementor },
    { name: "Divi", logo: divi },
    { name: "HTML", logo: html },
    { name: "CSS", logo: css },
    { name: "JavaScript", logo: js },
    { name: "Spring Boot", logo: springboot },
    { name: "Java", logo: java },
    { name: "Tailwindcss", logo: tailwind },
  ];

  const containerRef = useRef();
  const contentRef = useRef();
  const isDragging = useRef(false);

  useEffect(() => {
    const startMarquee = async () => {
      if (!isDragging.current) {
        await controls.start({
          x: "-200%",
          transition: {
            duration: 30,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop",
          },
        });
      }
    };
    startMarquee();
  }, [controls]);
  // end code for about section skills

  return (
    <>
      <div className="min-h-full sm:pt-0 sm:pb-0 md:pt-35 md:pb-35">
        <div className="col-2 md:columns-2 sm:px-6 lg:px-8 mx-auto max-w-7xl px-4 flex flex-col md:flex-row justify-center items-center pt-20 md:pt-0">
          <div className="flex flex-col justify-center p-4 w-full md:w-1/2">
            <motion.p
              className="text-2xl"
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
              text="I'm Lawrence, WordPress & Shopify Developer"
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
                className="inline-flex items-center gap-2 rounded-md bg-black hover:bg-white py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none hover:text-black border-2 solid"
              >
                View CV
              </Button>
              <Button
                as="a"
                href="tel:+639614650542"
                target="_blank"
                rel="noopener noreferrer"
                type="button"
                className="inline-flex items-center gap-2 rounded-md border-2 border-black py-1.5 px-3 text-sm/6 font-semibold text-black shadow-inner shadow-white/10 focus:outline-none hover:bg-black hover:text-white ms-8"
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

      {/* About me section */}
      <div
        className="min-h-full sm:pt-0 sm:pb-0 md:pt-0 md:pb-0 bg-black"
        id="about-me"
      >
        <div className="columns-2 md:columns-2 sm:px-6 lg:px-8 mx-auto max-w-7xl px-4 flex flex-col-reverse md:flex-row justify-center items-center pt-20 pb-10 sm:pt-10">
          <div className="col-2 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col flex-wrap justify-center items-start pt-20 md:pt-0 w-full md:w-1/2 gap-3">
            {/* Service cards */}
            {[
              {
                title: "Custom Web Solutions",
                description:
                  "Providing custom websites and online marketplaces that combine stunning design with seamless functionality, built to enhance your online presence and meet your unique business objectives.",
              },
              {
                title: "Expert in WordPress & Shopify",
                description:
                  "Creating responsive, user-friendly websites that are tailored to your needs, ensuring a smooth experience on any device while meeting your specific goals.",
              },
              {
                title: "Turning Ideas into Websites",
                description:
                  "Creating visually appealing and intuitive websites that not only present your concepts but also provide your audience with smooth, memorable experiences.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="relative max-lg:row-start-1 transform transition-transform duration-500 hover:scale-105 pb-10 sm:pb-10"
              >
                <div className="absolute inset-px rounded-lg bg-white sm:pb-20 shadow-md"></div>
                <div className="relative flex items-center h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+2px)] max-lg:rounded-t-[calc(2rem+1px)]">
                  <div className="px-8 pt-8 sm:px-10 sm:pt-10">
                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950 max-lg:text-center">
                      {service.title}
                    </p>
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="col-2 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-start sm:pt-20 md:pt-0 w-full md:w-1/2">
            <p className="text-4xl text-white">About me</p>
            <p className="text-white mt-5">
              I’m a self-taught web developer with two years of hands-on
              experience designing and building user-friendly, responsive
              websites that empower businesses and individuals to thrive online.
              My journey began with a passion for solving real-world problems
              through code, and I’ve since honed my skills in crafting visually
              appealing, high-performance digital solutions that align with
              client goals and user needs.
            </p>

            <div className="skills-section mt-5 w-full" ref={containerRef}>
              <p className="text-4xl text-white mb-5">Skills</p>
              <div className="mt-5 relative h-32 w-full overflow-hidden hide-scrollbar no-select ">
                <motion.div
                  className="flex absolute top-0 left-0 cursor-grab active:cursor-grabbing"
                  initial={{ x: "0%" }}
                  animate={controls}
                  style={{ width: "300%" }}
                  drag="x"
                  dragConstraints={{ right: 0, left: -2000 }}
                  dragElastic={0.1}
                  onDragStart={() => {
                    isDragging.current = true;
                    controls.stop();
                  }}
                  onDragEnd={() => {
                    isDragging.current = false;
                    controls.start({
                      x: "-200%",
                      transition: {
                        duration: 30,
                        repeat: Infinity,
                        ease: "linear",
                        repeatType: "loop",
                      },
                    });
                  }}
                >
                  <div className="flex flex-nowrap" ref={contentRef}>
                    {[...skills, ...skills, ...skills].map((skill, index) => (
                      <SkillCard key={index} skill={skill} />
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Portfolio Section */}
      <div className="min-h-full pt-20 md:pt-20 items-center" id="projects">
        <p className="text-4xl flex justify-center">Projects</p>
        <div className="col-2 md:columns-2 sm:px-6 lg:px-8 mx-auto max-w-7xl px-4 flex flex-row md:flex-row justify-center items-center pt-10 md:pt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Portfolio Cards */}
            {portfolio_cards.map((card, index) => (
              <PortfolioCard key={index} portfolio_card={card} />
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}

      <div className="relative min-h-full pt-20 isolate px-6 py-24 sm:py-32 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="mx-auto aspect-1155/678 w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base/7 font-semibold text-black">Pricing</h2>
          <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl">
            Choose the right plan for you
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-600 sm:text-xl/8">
          Choose an affordable plan that’s packed with the best features for
          engaging your audience, creating customer loyalty, and driving sales.
        </p>
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
          {tiers.map((tier, tierIdx) => (
            <div
              key={tier.id}
              className={classNames(
                tier.featured
                  ? "relative bg-gray-900 shadow-2xl"
                  : "bg-white/60 sm:mx-8 lg:mx-0",
                tier.featured
                  ? ""
                  : tierIdx === 0
                  ? "rounded-t-3xl sm:rounded-b-none lg:rounded-tr-none lg:rounded-bl-3xl"
                  : "sm:rounded-t-none lg:rounded-tr-3xl lg:rounded-bl-none",
                "rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10"
              )}
            >
              <h3
                id={tier.id}
                className={classNames(
                  tier.featured ? "text-indigo-400" : "text-indigo-600",
                  "text-base/7 font-semibold"
                )}
              >
                {tier.name}
              </h3>
              <p className="mt-4 flex items-baseline gap-x-2">
                <span
                  className={classNames(
                    tier.featured ? "text-white" : "text-gray-900",
                    "text-5xl font-semibold tracking-tight"
                  )}
                >
                  {tier.priceMonthly}
                </span>
                <span
                  className={classNames(
                    tier.featured ? "text-gray-400" : "text-gray-500",
                    "text-base"
                  )}
                >
                  /month
                </span>
              </p>
              <p
                className={classNames(
                  tier.featured ? "text-gray-300" : "text-gray-600",
                  "mt-6 text-base/7"
                )}
              >
                {tier.description}
              </p>
              <ul
                role="list"
                className={classNames(
                  tier.featured ? "text-gray-300" : "text-gray-600",
                  "mt-8 space-y-3 text-sm/6 sm:mt-10"
                )}
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      aria-hidden="true"
                      className={classNames(
                        tier.featured ? "text-indigo-400" : "text-indigo-600",
                        "h-6 w-5 flex-none"
                      )}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.featured
                    ? "bg-indigo-500 text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-indigo-500"
                    : "text-indigo-600 ring-1 ring-indigo-200 ring-inset hover:ring-indigo-300 focus-visible:outline-indigo-600",
                  "mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10"
                )}
              >
                Get started today
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
