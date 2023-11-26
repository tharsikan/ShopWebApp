import { Icon } from '@iconify/react';
import React from 'react'

const Hero2 = () => {
  return (
    <section className="grid gap-6 lg:grid-cols-2 mb-4">
      <img
        src="/assets/imgs/home/team.png"
        alt=""
        className="object-cover w-full rounded-md max-h-96 dark:bg-gray-500"
      />
      <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 bg-gray-300">
        <img
          src="/assets/imgs/home/pete.png"
          alt=""
          className="object-cover w-20 h-20 rounded-full bg-gray-300"
        />
        <blockquote className="max-w-lg text-lg italic font-medium text-center">
          "I am software engineer and musican for over 10 years. Music and
          coding is passion, Lets build the biggest music community together! "
        </blockquote>
        <div className="text-center dark:text-gray-700 ">
          <p>Pierre Augustin</p>
          <p>CEO/Founder of Muzfi</p>
          <div className="ml-16 ">
            <Icon
              className="w-6 h-6 cursor-pointer justify-center"
              icon={"skill-icons:instagram"}
            />
          </div>
        </div>
      </div>
      <div className="p-5 space-y-8 rounded-md lg:col-span-full bg-slate-700">
        <h2 className="text-2xl font-bold text-gray-50 text-center">
          Every Dollar Matters. Lets our voices be heard ! Love Wins.
        </h2>
      </div>
    </section>
  );
}

export default Hero2