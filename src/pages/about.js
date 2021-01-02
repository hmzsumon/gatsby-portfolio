import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"
import SEO from "../components/SEO"
const About = ({
  data: {
    about: { nodes },
  },
}) => {
  const { info, stack, title, image } = nodes[0]

  return (
<<<<<<< HEAD
    <Layout>
      <SEO title="About Me" description="about webdev" />
      <section className="about-page">
        <div className="section-center about-center">
          <Image fluid={image.childImageSharp.fluid} className="about-img" />
          <article className="about-text">
            <Title title={title} />
            <p>{info}</p>
            <div className="about-stack">
              <h4>PROFICIENT SKILL:</h4>
              {stack.map(item => {
                return <span key={item.id}>{item.title}</span>
              })}
=======
    <div className="container">
      <div className="row ">
        <div className="col">
          <div className="row  pt-5 d-flex align-items-center about-area">
            <div className="col-md-6">
              <div
                data-sal="slide-right"
                data-sal-delay="400"
                data-sal-easing="ease"
                className={`${classes.portfolioImageContainer}  shadow`}
              >
                <img
                  className="w-100 m-auto"
                  src="https://zsumon.netlify.app/src/img/Pic.jpg"
                  alt="manik roy"
                />
              </div>
            </div>
            <div className="col-md-6">
              <div
                data-sal="slide-up"
                data-sal-delay="600"
                data-sal-easing="ease"
                className={`${classes.aboutArea} pt-5`}
              >
                <h1>
                  Hi, I am <span>{Person.name}</span>
                </h1>
                <p>{Person.description}</p>
                <div className={classes.detailsArea}>
                  <ul>
                    <li>
                      <strong>Full Name</strong> {Person.name}
                    </li>

                    <li>
                      <strong>Nationality</strong> {Person.nationality}
                    </li>
                    <li>
                      <strong>Languages</strong> {Person.languages}
                    </li>
                    <li>
                      <strong>Address</strong> {Person.address}
                    </li>
                    <li>
                      <strong>Freelance</strong> {Person.freelance}
                    </li>
                    <li>
                      <strong>E-mail</strong>{" "}
                      <a href="mailto:cm.dpi15@gmail.com">{Person.email}</a>{" "}
                    </li>
                    <li>
                      <strong>Phone</strong> {Person.phone}
                    </li>
                  </ul>
                  <button className="text-uppercase">
                    {" "}
                    <a
                      href="https://pdfhost.io/v/OrWNZWFtT_HMs_Resume_1pdf.pdf"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {" "}
                      Download cv
                    </a>
                  </button>
                </div>
              </div>
>>>>>>> 79b7726c11132da8c05af9aaf3e7547ecc2ac5e9
            </div>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    about: allStrapiAbout {
      nodes {
        stack {
          id
          title
        }
        title
        info
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default About
