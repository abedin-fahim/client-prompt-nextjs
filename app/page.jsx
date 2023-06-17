import Feed from '@components/Feed';

const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
      <h1 className='head_text text-center'>
        Discover & Share
        <br className='max-md:hidden' />
        <span className='orange_gradient text-center'>AI-powered Prompts</span>
      </h1>
      <p className='desc text-center'>
        Promptopia is a place to find great AI prompts. Lorem ipsum dolor sit,
        amet consectetur adipisicing elit. Voluptatum provident veniam optio
        saepe adipisci nisi impedit? Laudantium quod cumque ullam
      </p>
      {/* Feed goes here */}
      <Feed />
    </section>
  );
};

export default Home;
