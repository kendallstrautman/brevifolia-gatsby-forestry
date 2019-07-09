import React from "react"
import Layout from "../components/layout"
import aboutStyles from "../styles/components/about.module.scss"

const About = () => {
  return (
    <Layout>
      <section className={aboutStyles.about_blurb}>
        <div>
          Lumberjacks are North American workers in the logging industry who
          perform the initial harvesting and transport of trees for ultimate
          processing into forest products. The term usually refers to a bygone
          era (before 1945 in the United States) when hand tools were used in
          harvesting trees. Because of its historical ties, the term lumberjack
          has become ingrained in popular culture through folklore, mass media
          and spectator sports. The actual work was difficult, dangerous,
          intermittent, low-paying, and primitive in living conditions. However,
          the men built a traditional culture that celebrated strength,
          masculinity, confrontation with danger, and resistance to
          modernization.
        </div>
        <a href="https://en.wikipedia.org/wiki/Lumberjack">
          Courtesy of Wikipedia
        </a>
      </section>
    </Layout>
  )
}

export default About
