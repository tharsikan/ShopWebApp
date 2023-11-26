import React from 'react'

const Testimonals = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
      {action.map((el) => (
        <div className="bg-white rounded-lg p-3">
          <div className="flex items-center space-x-6 mb-4">
            <img
              className="h-28 w-28 object-cover object-center rounded-full"
              src={el.img}
              alt="photo"
            />
            <div>
              <p className="text-lg text-gray-700 font-normal mb-1">
                {el.label}
              </p>
              <p className="text-sm text-blue-600 font-normal">
                {el.job}
              </p>
            </div>
          </div>
          <div>
            <p className="text-gray-400 leading-loose font-normal text-xs">
              {el.des}
            </p>
          </div>
        </div>
      ))}

    </div>
  );
}

export default Testimonals

const action = [
  {
    label: "Jacob Collier",
    job: "Multi-Instrumentalist",
    des: "I absoluty love Muzfi, its the one stop for getting feedback and answers. Truly get to connect with my peers in my community and find great deals on gear I want! ",
    img: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
  },
  {
    label: "Gary Cark Jr",
    job: "Guiarist",
    des: "There's nothing better than finding a community with authentic dialog only focused on playing music and finding gear. I am addicted to Muzfi.",
    img: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
  },
  {
    label: "Robert Glasper",
    job: "Keyboardist",
    des: "Muzfi is like stripping the best parts of social media and threads speficially for music heads. Being apart of the Muzfi Fam is for all musicians. ",
    img: "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
  },
];