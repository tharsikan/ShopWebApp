import plugin from "tailwindcss/plugin";

const utilityClass = plugin(({ addUtilities }) => {
  addUtilities({
    ".scrollbar-hidden::-webkit-scrollbar": { display: "none" },
    ".scrollbar-hidden": { msOverflowStyle: "none", scrollbarWidth: "none" },
    ".container-mini": { "@apply md:max-w-[90%] w-full mx-auto": {} },
    ".bg-gradient": {
      "@apply bg-gradient-to-l from-red-500 gap-1.5 to-yellow-500": {},
    },
  });
});
export default utilityClass;
