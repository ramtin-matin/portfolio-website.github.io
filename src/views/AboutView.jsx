import SectionTitle from "../components/SectionTitle";

const AboutView = () => (
  <div className="p-8 max-w-5xl space-x-10 mx-auto min-h-screen-minus-header">
    <SectionTitle>Behind the Code</SectionTitle>
    <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12 transition-colors duration-500 animate-fade-in delay-200">
      <div className="space-y-8 text-lg dark:text-gray-300 text-gray-700">
        <p className="text-xl font-mono dark:text-gray-200 text-center">
          Live life with love
        </p>
        <div className="pt-6 border-t dark:border-gray-700 border-gray-100 text-center"></div>
        <p>
          My core focus right now is deepening my expertise in modern web
          technologies, particularly the React ecosystem, and understanding
          backend development. I enjoy the process, from designing the user
          experience to optimizing database queries.
        </p>
        <p className="font-semibold">
          I’m eager to learn new tools and technologies to bring creative ideas
          to life.
        </p>
        <p>
          I’m studying Computer Science at the University of Kentucky and plan
          to graduate in fall of 2026. Outside of programming, I spend most of
          my time working out, playing the piano, and getting lost in good video
          games or good books. I like learning new things, staying active, and
          finding small ways to grow a little every day.
        </p>
        <p className="text-xl font-mono border-l-4 pl-4">
          "The intelligent man is always learning, the wise man is always
          unlearning" - <b>Joseph Nguyen</b>
        </p>
      </div>
    </div>
  </div>
);

export default AboutView;
