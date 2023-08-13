import Feed from "@components/Feed"
import Loading from "@components/Loading"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Scopri e condividi
        <br className="" />
        <span className="green_gradient text-center"> I tuoi consigli</span>
      </h1>
      

      <Feed />
    </section>
  )
}

export default Home