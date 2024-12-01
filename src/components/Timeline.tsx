import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faBuildingColumns } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>

       

          {/* CSES - UI Software Engineer*/}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="06/2023 - 12/2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase as IconProp} />}
          >
            <h3 className="vertical-timeline-element-title">UI Software Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Computer Science and Engineering Society UC San Diego</h4>
            <ul>
              <li>Developed dynamic, reusable components for the EventBox platform, optimizing front-end performance, which improved website load times by 10% and enhanced user engagement.</li>
              <li>Designed and implemented "This Week" and "This Month" features, boosting event discovery and increasing attendance by 20%.</li>
            </ul>
          </VerticalTimelineElement>

          {/* BURSA - VP Software Dev*/}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="03/2023 - 03/2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase as IconProp} />}
          >
            <h3 className="vertical-timeline-element-title">VP Software Development</h3>
            <h4 className="vertical-timeline-element-subtitle">Burmese Student Association UC San Diego</h4>
            <ul>
              <li>Collaborated with stakeholders to create a "Contact Us" page, driving a 50% increase in user inquiries and engagement, while enhancing user experience through optimized navigation..</li>
              <li>Spearheaded the development of key features, such as a visually captivating Gallery page, leading to a 35% increase in web traffic and a 20% rise in event participation.</li>
            </ul>
          </VerticalTimelineElement>

          {/* City of Chula Vista - Project Manager*/}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="01/2021 - 06/2021"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase as IconProp} />}
          >
            <h3 className="vertical-timeline-element-title">Project Manager Intern</h3>
            <h4 className="vertical-timeline-element-subtitle">City of Chula Vista</h4>
            <ul>
              <li>Led the development of an interactive web tool to improve public accessibility to permit information, processing data from over
              35,000 records.</li>
              <li>Partnered with city departments to design user-centric features, aligning the project’s technical implementation with organizational goals.</li>
            </ul>
          </VerticalTimelineElement>

          {/* UCSD Library - SLA Work Lead*/}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="08/2021 - 06/2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBuildingColumns as IconProp} />}
          >
            <h3 className="vertical-timeline-element-title">Space, Lending, and Access Work Leader</h3>
            <h4 className="vertical-timeline-element-subtitle">UC San Diego Library</h4>
            <ul>
              <li>Managed the shelving and organization of library materials to ensure accessibility and orderliness for patrons.</li>
              <li>Handled check-in and check-out procedures, ensuring accuracy and efficiency in processing library materials.</li>
              <li>Assisted with closing duties, including balancing cash drawers and securing library assets.</li>
            </ul>
          </VerticalTimelineElement>

          {/* Education - UCSD*/}
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="10/2020 - 06/2024"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBuildingColumns as IconProp} />}
          >
            <h3 className="vertical-timeline-element-title">University of California, San Diego</h3>
            <h4 className="vertical-timeline-element-subtitle">San Diego, CA</h4>
            <p>
              Bachelor of Science in Business Economics
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;