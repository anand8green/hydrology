import Hero from "./Component/Home/Hero";
import News from "./Component/Home/News";
import Features from "./Component/Home/Features";
import VideoComp from "./Component/Home/VideoComp";
import Contact from "./Component/Home/Contact";
import Footer from "./Component/Home/Footer";
import Butter from 'buttercms'
import { db } from "../config/firebase";

export default function index({
  title,
  subtitle,
  features_title,
  features_details,
  features_items,
  video_title,
  video_subtitle,
  news_title,
  news_subtitle,
  newsItems,
  contact_title,
  contact_subtitle,
  footer_title,
  footer_subtitle
}) {



  return (
    <div className="Home" >

      <Hero title={title} subtitle={subtitle} />
      <Features features_title={features_title}
        features_details={features_details}
        features_items={features_items} />
      <VideoComp video_title={video_title}
        video_subtitle={video_subtitle} />
      <News newsItem={newsItems}
        news_title={news_title}
        news_subtitle={news_subtitle} />
      <Contact contact_title={contact_title}
        contact_subtitle={contact_subtitle} />
      <Footer footer_title={footer_title}
        footer_subtitle={footer_subtitle} />
    </div>
  )
}

export const getStaticProps = async () => {

  const butter = Butter(process.env.BUTTER_CMS)

  const home = await butter.page.retrieve("*", "home")
  const news = await butter.post.list({ page_size: 5 })

  return {
    props: {
      title: home.data.data.fields.title,
      subtitle: home.data.data.fields.subtitle,
      features_title: home.data.data.fields.features_title,
      features_details: home.data.data.fields.features_details,
      features_items: home.data.data.fields.features_items,
      video_title: home.data.data.fields.video_title,
      video_subtitle: home.data.data.fields.video_subtitle,
      news_title: home.data.data.fields.news_title,
      newsItems: news.data.data,
      news_subtitle: home.data.data.fields.news_subtitle,
      contact_title: home.data.data.fields.contact_title,
      contact_subtitle: home.data.data.fields.contact_subtitle,
      footer_title: home.data.data.fields.footer_title,
      footer_subtitle: home.data.data.fields.footer_subtitle,
    }
  }

}
