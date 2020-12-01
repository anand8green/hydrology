import Butter from 'buttercms'
import NavBar from './Component/NavBar';
import BubbleBg from './Component/Home/BubbleBg';

export default function About({ heading, subheading, body }) {
  function createMarkup() {
    return { __html: body }
  }

  return (

    <div className="Hero">
      <NavBar />
      <h1>Test about us</h1>

      <div className="Hero__Content">
        <div className="Hero__Text">
          <h1>{heading}</h1>
          <p>{subheading}</p>
        </div>
      </div>

      <div dangerouslySetInnerHTML={createMarkup()} />

      <BubbleBg />

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

    }
  }

}