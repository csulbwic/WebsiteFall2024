import ProgramImages from './logo_img';

import EventImages from './EventImg';
const Program_Data =[
    {
        title: 'Sisterhood',
        description: 'Sisterhood is the foundation of our organization. The Sisterhood program is designed for WiC members to form companionship and to encourage members to be active. Our Sisterhood provides mentorship through social and professional development events throughout the semester. These events ensure that our members maintain an optimal balance of academic and social life, all while fostering lasting friendships and supportive bonds.1',
        images : ProgramImages.sample,
    },
    {
        title: 'Workshop',
        description: 'Our workshop series are aimed towards providing technical skills and hands-on experience with topics outside of the school curriculum, such as command line mastery, source control collaboration, resume review, and in-demand technologies.',
        images : ProgramImages.sample,
    },
    {
        title: 'Professional Development',
        description: 'Students have opportunities to experience the day-to-day of working engineers and the work culture of their company. This provides a better understanding of their values in a more personal setting. Office Space tours complements classroom education by giving first-hand exposure to companies.',
        images : ProgramImages.sample,
    }
];

const Current_Event = [
    {
        img:"https://picsum.photos/200/300",
        alt:"img1",
        RSVP_link:"",
    },
    {
        img:"https://picsum.photos/200/300",
        alt:"img2",
        RSVP_link:"",
    },
    {
        img:"https://picsum.photos/200/300",
        alt:"img3",
        RSVP_link:"",
    },
]

const Past_Event = [
    
    {
        title:"Marina Hack 3.5",
        description:"Online Hackathon, 24 hours virtual to collaborate and building project",
        semester:"Spring 2024",
        date:"4/13-14/2024",
        EventImg:ProgramImages.sample,
        post_link:"http://sample.edu/",
    },

    

    {
        title:"WIC School Outreach",
        description:"Info Session to learn more about the program and become mentor to help us inspire and motivate youngest students to pursue STEM field",
        semester:"Spring 2024",
        date:"3/13/2024",
        EventImg:ProgramImages.sample,
        post_link:"http://www.sample.org/head",
    },

    {
        title:"Sisterhood Event: Friendship Bracelets",
        description:"Making friendship bracelets with officer",
        semester:"Spring 2024",
        date:"3/13/2024",
        EventImg:ProgramImages.sample,
        post_link:"http://www.sample.org/head",
    },

    {
        title:"Break Through Tech",
        description:"Section info to learn abou the AI Program at UCLA. Offer the opportunities to learn about AI Machine Learning",
        semester:"Spring 2024",
        date:"03/06/2024",
        EventImg:ProgramImages.sample,
        post_link:"http://sample.org/",
    },

    {
        title:"NFL - Info Sessions",
        description:"NFL info session to explore IT job opportunities with an NFL recruiter! Discover how technology drives the sports industry.",
        semester:"Fall 2023",
        date:"11/08/2024",
        EventImg:EventImages.NFL_img,
        post_link:"http://sample.org/",
    },

    {
        title:"AECF - Info Sessions",
        description:"Section info to learn more about the job opportunity from Nicolas Obias",
        semester:"Fall 2023",
        date:"11/08/2024",
        EventImg:ProgramImages.sample,
        post_link:"http://sample.org/",
    },




]

export default {EventData: Program_Data,Past_Event, Current_Event};