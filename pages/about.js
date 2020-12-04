import Butter from 'buttercms'
import NavBar from './Component/NavBar';
import BubbleNew from './Component/Home/BubbleNew';
import Footer from './Component/Home/Footer'
import useDarkMode from 'use-dark-mode';

export default function About({ heading, subheading, body, image }) {
  function createMarkup() {
    return { __html: body }
  }

  const mode = useDarkMode(false)



  return (
    <div className="InsidePage">

      <div className="TopBar">
        <div className="TopBar__Content">
          <NavBar />
          <div className="Title">
            <h1>{heading}</h1>
            <p>{subheading}</p>
          </div>
        </div>
        <BubbleNew />
      </div>

      <div className="content">
        <div className="text">
          <div className="pic">
            <img src={image} alt="" />
          </div>
          <div dangerouslySetInnerHTML={createMarkup()}
            className="info"
          />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>

  )
}

export const getStaticProps = async () => {

  const butter = Butter(process.env.BUTTER_CMS)
  const res = await butter.page.retrieve("*", "about")

  return {
    props: {
      heading: res.data.data.fields.heading,
      subheading: res.data.data.fields.subheading,
      body: res.data.data.fields.body,
      image: res.data.data.fields.image

    }
  }

}