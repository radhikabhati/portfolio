
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "./styles/Resume.css";

function Resume() {
  return (
    <div className="resume">
     
      <a href="https://www.linkedin.com/in/radhika-bhati/" target='_blank' rel="noreferrer"><h1>Radhika Bhati - Linkedin</h1></a>
      <a href="https://radhikabhati.github.io/resume/" target='_blank' rel="noreferrer"><h3>Technical Resume</h3></a>
     
     {/* <iframe title="art-preview" src="https://radhikabhati.github.io/resume/" width="100%" height="1000"></iframe> */}
     <VerticalTimeline
     
     lineColor={ '#5f7c6a' }
     >
  
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    position={ "left" }
    contentStyle={{ background: '#5f7c6a', color: '#fff' }}
   
    contentArrowStyle={{ borderRight: '7px solid  #5f7c6a' }}
     dateClassName = "date"
    date="August 2024  - October 2024"
    iconStyle={{ background: '#5f7c6a', color: '#fff' }}
    //icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Oracle - Senior Member of technical Staff</h3>
    <h4 className="vertical-timeline-element-subtitle">Austin, Texas</h4>
    <p>
      Full stack engineering for design and development of Cloud Advisors System which recommends Oracle Cloud Infrasture users on how to efficiently use their servers to cut costs and increase impact. Tech stack include java based service APIs, React applications for internal reporting and components that use OCI platforms.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    position={ "right" }
     dateClassName = "date"
    date="August 2022 - July 2024"
    iconStyle={{ background: '#5f7c6a', color: '#fff' }}
   // icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Amazon - Software Engineer</h3>
    <h4 className="vertical-timeline-element-subtitle">Seattle , Washington</h4>
    <p>
    • Software development for machine learning artifact catalog system. Java ,Kotlin development using AWS backed services such as lambda, S3, Glue crawler, neptune DB, sagemaker etc. • Website design and development. Gathering user feedback, UX flow design (AWS Figma), review, and React backed development for ML catalog website that allows users like data scientists and machine learning engineers to explore the various models, features and other artifact types that exist with the unified ML catalog. Visualizations to represent how data flows through these artifacts.
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    position={ "right" }
     dateClassName = "date"
    date="June 2020 - July 2022"
    iconStyle={{ background: '#5f7c6a', color: '#fff' }}
   // icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">PayPal - Software Engineer</h3>
    <h4 className="vertical-timeline-element-subtitle">Scottsdale , Arizona</h4>
    <p>
    • Backend development for alternate payment services to handle error handling based on incoming requests Tech stack node, java applications • Design and development of a java service which queries tickets to send information to a machine learning model and parses this model’s classification result to produce a risk flag if a ticket has details which deem a project risky. Tech stack : java, spring-boot, deployment based on GCP • Product owner of a project to forecast transaction volumes based on various streams of input in Python • Developed an internal facing React application for the users to deploy projects and new releases. • Development of an application which sends notifications to paypal external merchants or subscribers for any ongoing or scheduled incidents, maintenance plans, live issues and other updates. Tech stack : React, java, mySQL, GCP architecture. • Improved filtering user experience with UX design with UXPin and development in React.js
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    position={ "right" }
     dateClassName = "date"
    date="August 2016 - July 2018"
    iconStyle={{ background: '#5f7c6a', color: '#fff' }}
   // icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Fidelity Investments - Assosiate Software Engineer</h3>
    <h4 className="vertical-timeline-element-subtitle">Bangalore , India</h4>
    <p>
    Developed Client-side customized dashboards for Goldman Sachs and Airbnb using Angular 4. Server-side development to consume RESTful services along with handling of business-side logics, also acted as sole front end engineer for creating pages in angular 2 and angular 6. Created two new end-to-end flows for fidelity’s Stock Plan Service, Digital platforms team - Online grant acceptance and new experience with participants Transaction History page. Migrated legacy code to new next gen Java web-app to integrate it with Angular client-side code.
    </p>
  </VerticalTimelineElement>
 
  
 

</VerticalTimeline>

    
    </div>
  );
}

export default Resume;
