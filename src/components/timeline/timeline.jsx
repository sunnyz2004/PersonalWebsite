import React from "react";
import "./timeline.css";
import {
 VerticalTimeline,
 VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Timeline = () => {
  const doctorcarepic = require('./doctorcarepic.png');
   const eonpic = require('./eonpic.png');
   const balletpic = require('./eleganceballetstudiologo.png'); 
   const winupsurepic = require('./title.png');
   const babypic = require('./babypic.png');


 return (
   <>
     <div className="section mainsection" id="experiences">
       <h2 className="section__title">
         My <span className="different">Timeline 💫</span>
       </h2>
       <VerticalTimeline >
       <VerticalTimelineElement
       date={"Sept 2023 - Dec 2023"}
       contentStyle={{
         boxShadow: `var(--shadow)`,
         border: "3px solid var(--clr-primary)",
         background: "var(--background-color)",
         textAlign: "left",
         color: `var(--clr-fg-alt)`,
       }}
       contentArrowStyle={{
         color: "var(--title-font-color)"
       }}
       iconStyle={{
         border: ` 3px solid var(--clr-primary)`,
         borderRadius: "100%",
         width: "60px",
         height: "60px"
        
       }}
       icon={<img src={doctorcarepic} alt="bannerpic"/>}
       animate={true}
       >
       <h3
         className="vertical-timeline-element-title"
         data-aos="fade-right"
       >
         Backend Software Developer
       </h3>
      <h4
          className="vertical-timeline-element-subtitle"
          data-aos="fade-right"
      >
          <a href="https://www.doctorcare.ca/" target="_blank">DoctorCare</a>
      </h4>
       <p data-aos="fade-right">
       • Led the expansion of Canada's largest provider of billing support and practice optimization services for 2000+ physicians, utilizing Agile methodologies, Django, SQL, and AWS technologies
       • Automated and managed the extraction of doctors' meeting availability from extensive CSV files using OpenAI API and pandas, resulting in a 75% increase in scheduling efficiency with physicians
       </p>
       <p data-aos="fade-right">
       </p>
     </VerticalTimelineElement>

         <VerticalTimelineElement
           date={"Jan 2023 - April 2023"}
           contentStyle={{
             boxShadow: `var(--shadow)`,
             border: "3px solid var(--clr-primary)",
             background: "var(--background-color)",
             textAlign: "left",
             color: `var(--clr-fg-alt)`,
           }}
           contentArrowStyle={{
             color: "var(--title-font-color)"
           }}
           iconStyle={{
             border: ` 3px solid var(--clr-primary)`,
             borderRadius: "100%",
             width: "60px",
             height: "60px"
            
           }}
           icon={<img src={eonpic} alt="bannerpic"/>}

           animate={true}
         >
           <h3
             className="vertical-timeline-element-title"
             data-aos="fade-right"
           >
             UX/UI Designer, QA Leader
           </h3>
           <h4
             className="vertical-timeline-element-subtitle"
             data-aos="fade-right"
           >
             <a href="https://eonmedia.ai/" target="_blank" >Eon Media</a>

           </h4>
           <p data-aos="fade-right">
           • Revamped the mobile search page for WRAL Archives to enhance UI components and streamline the navigation experience, resulting in a 22% increase in user engagement through increased content
             discovery {<br/>} {<br/>}
           • Led the tech team and kickstarted comprehensive testing plans, leveraged automation tools to optimize testing efficiency and accuracy. {<br/>} {<br/>}
           • Investigated, tracked and triaged crashes, bugs, and their fixes using JIRA, Git, and Fabric. {<br/>} {<br/>}
           • Collaborated closely with PMs, stakeholders to ensure the success of the launch. {<br/>} {<br/>}
           </p>
           <p data-aos="fade-right">
           </p>
         </VerticalTimelineElement>
         <VerticalTimelineElement
           date={"April 2020 - August 2022"}
           contentStyle={{
             boxShadow: `var(--shadow)`,
             border: "3px solid var(--clr-primary)",
             backgroundColor: `var(--clr-bg)`,
             textAlign: "left",
             color: `var(--clr-fg-alt)`,
           }}
           contentArrowStyle={{
           }}
           iconStyle={{
             border: ` 3px solid var(--clr-primary)`,
             backgroundColor: `var(--clr-bg)`,
             color: `var(--clr-primary)`,
           }}

          icon={<img src={winupsurepic} alt="bannerpic"/>}

           animate={true}
         >
           <h3
             className="vertical-timeline-element-title"
             data-aos="fade-right"
           >
             Project Manager
           </h3>
           <h4
             className="vertical-timeline-element-subtitle"
             data-aos="fade-right"
           >
             Winupsure Trading Inc.
           </h4>
           <p data-aos="fade-right">
           • Introduced new revenue streams and modified website flow with the UX/UI team, increasing revenue by 5% within 6 months {<br/>} {<br/>}
           • Fostered relationships with international vendors and teammates to branch out the company and promote positive working environment {<br/>} {<br/>}
           • Twice awarded “Top Employee” commendation at the company’s annual employee recognition event {<br/>}{<br/>}
           </p>
         </VerticalTimelineElement>


         <VerticalTimelineElement
           date={"Sept 2021 - June 2022"}
           contentStyle={{
             boxShadow: `var(--shadow)`,
             border: "3px solid var(--clr-primary)",
             backgroundColor: `var(--clr-bg)`,
             textAlign: "left",
             color: `var(--clr-fg-alt)`,
           }}
           contentArrowStyle={{
             borderRight: "16px solid  var(--clr-primary)",
           }}
           iconStyle={{
             border: ` 3px solid var(--clr-primary)`,
             backgroundColor: `var(--clr-bg)`,
             color: `var(--clr-primary)`,
           }}
           icon={<img src={balletpic} alt="bannerpic"/>}

           animate={true}
         >
           <h3
             className="vertical-timeline-element-title"
             data-aos="fade-right"
           >
             Ballet Instructor
           </h3>
           <h4
             className="vertical-timeline-element-subtitle"
             data-aos="fade-right"
           >
             Elegance Ballet Studio
           </h4>
           <p data-aos="fade-right">
            •	Kick started new after-hour initiative by hosting 8 additional hours per week helping young dancers enhance movements and overcome emotional challenges {<br/>} {<br/>}
            •	Choreographed ballet routines alongside instructor, increasing the distinction rate by 30% {<br/>} {<br/>}
            •	Composed assessment reports on over 30 students as required by administration {<br/>} {<br/>}

           </p>
         </VerticalTimelineElement>
         <VerticalTimelineElement
           className="vertical-timeline-element--work"
           date={"🎉 August 15th, 2004"}
           contentStyle={{
             boxShadow: `var(--shadow)`,
             border: "3px solid var(--clr-primary)",
             backgroundColor: `var(--clr-bg)`,
             textAlign: "left",
             color: `var(--clr-fg-alt)`,
           }}
           contentArrowStyle={{
             borderRight: "16px solid  var(--clr-primary)",
           }}
           iconStyle={{
             border: ` 3px solid var(--clr-primary)`,
             backgroundColor: `var(--clr-bg)`,
             color: `var(--clr-primary)`,
           }}
           icon={<img src={babypic} alt="bannerpic"/>}

           animate={true}


         >
           <h3
             className="vertical-timeline-element-title"
             data-aos="fade-right"
           >
             Starting Point
           </h3>
           <h4
             className="vertical-timeline-element-subtitle"
             data-aos="fade-right"
           >
             When it all started... ｡･:*˚:✧｡
           </h4>
           <p data-aos="fade-right">
             
           </p>
         </VerticalTimelineElement>
  

       </VerticalTimeline>
     </div>
   </>
 );
}


export default Timeline;
