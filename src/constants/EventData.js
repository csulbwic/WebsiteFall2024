import ProgramImages from './logo_img';

import EventImages from './EventImg';
// import EventImg from './EventImg';
const Program_Data =[
    {
        title: 'Sisterhood',
        description: 'Sisterhood is the foundation of our organization. The Sisterhood program is designed for WiC members to form companionship and to encourage members to be active. Our Sisterhood provides mentorship through social and professional development events throughout the semester. These events ensure that our members maintain an optimal balance of academic and social life, all while fostering lasting friendships and supportive bonds.',
        images : ProgramImages.sisterHood_img_program,

        /*button : [
            {
                link: "https://docs.google.com/forms/d/e/1FAIpQLSeQeuBe8K9HyNPC4yItl8JF39poYy9FsoFe6_-vCKXOG6CNgw/viewform",
                BtnDescription:"Apply to the SisterHood Program",
            }
        ]*/
    },

    {
        title: 'Workshops',
        description: 'Our workshop series are aimed towards providing technical skills and hands-on experience with topics outside of the school curriculum, such as command line mastery, source control collaboration, resume review, and in-demand technologies.',
        images : ProgramImages.workshop_img_program,
    },

    /*{
        title: 'School Outreach Program',
        description: 'Our workshop series are aimed towards providing technical skills and hands-on experience with topics outside of the school curriculum, such as command line mastery, source control collaboration, resume review, and in-demand technologies.',
        images : ProgramImages.workshop_img_program,
    },*/

    /*{
        title: 'MarinaHacks',
        description: 'Our workshop series are aimed towards providing technical skills and hands-on experience with topics outside of the school curriculum, such as command line mastery, source control collaboration, resume review, and in-demand technologies.',
        images : ProgramImages.workshop_img_program,
    },*/
    
    {
        title: 'Professional Development',
        description: 'Students have opportunities to experience the day-to-day of working engineers and the work culture of their company. This provides a better understanding of their values in a more personal setting. Office Space tours complements classroom education by giving first-hand exposure to companies.',
        images : ProgramImages.professionalDev_img_program,

        /* button : [
        //     {
        //         link: "",
        //         BtnDescription:"apply to Intership",
        //     },
        //     {
        //         link: "",
        //         BtnDescription:"Sign Up for MarinaHacks",
        //     }
        // ] */
    },
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

    // 2025-2026 Events starting from most recent to least recent

{
    title:"Sisterhood Program",
    description:"A semester-long program where WIC members collaborate in teams to innovate, develop apps, and build software projects together",
    semester:"Fall 2025 & Spring 2026",
    date:"2025-2026",
    EventImg:EventImages.SisterhoodFall2025_img,
    post_link:"",
},

{
    title:"WiC School Outreach",
    description:"Become a mentor in this semester-long program to help inspire and motivate young students to pursue STEM fields",
    semester:"Fall 2025 & Spring 2026",
    date:"2025-2026",
    EventImg:EventImages.SchoolOutreach2025_img,
    post_link:"",
},

{
    title:"Marina Hacks 5.0",
    description:"A 24-hour hackathon event to collaborate, build innovative projects, and learn from industry professionals",
    semester:"Fall 2025",
    date:"9/25/2025",
    EventImg:EventImages.MarinaHacks5_img,
    post_link:"",
},

    {
        title:"Week of Welcome",
        description:"Come get to know our officers and learn more about the programs well be offering this Fall!",
        semester:"Fall 2025",
        date:"9/03/2025",
        EventImg:EventImages.WOW25_img,
        post_link:"https://www.instagram.com/p/DOHHd4SEt2S/?utm_source=ig_web_button_share_sheet",
    },

    // End of 2025-2026 Event List

    {
        title:"GBM#1",
        description:"First GBM Fall 2024, learn more about the club, officer and the program we offer",
        semester:"Fall 2024",
        date:"9/26/2024",
        EventImg:EventImages.FirstGBM,
        post_link:"",
    },

    {
        title:"Marina Hack 3.5",
        description:"Online Hackathon, 24 hours virtual to collaborate and building project",
        semester:"Spring 2024",
        date:"4/13-14/2024",
        EventImg:EventImages.MarinaHack35_img,
        post_link:"",
    },

    

    {
        title:"WIC School Outreach",
        description:"Info Session to learn more about the program and become mentor to help us inspire and motivate youngest students to pursue STEM field",
        semester:"Spring 2024",
        date:"3/13/2024",
        EventImg:EventImages.SchoolOutReachProgram_img,
        post_link:"",
    },

    {
        title:"Sisterhood Event: Friendship Bracelets",
        description:"Making friendship bracelets with officer",
        semester:"Spring 2024",
        date:"3/13/2024",
        EventImg:EventImages.SisterHoodBracelet_img,
        post_link:"",
    },

    {
        title:"Break Through Tech",
        description:"Section info to learn abou the AI Program at UCLA. Offer the opportunities to learn about AI Machine Learning",
        semester:"Spring 2024",
        date:"03/06/2024",
        EventImg:EventImages.BreakThroughTechSpring24_img,
        post_link:"",
    },

    {
        title:"NFL - Info Sessions",
        description:"NFL info session to explore IT job opportunities with an NFL recruiter! Discover how technology drives the sports industry.",
        semester:"Fall 2023",
        date:"11/08/2024",
        EventImg:EventImages.NFL_img,
        post_link:"",
    },

    {
        title:"AECF - Info Sessions",
        description:"Section info to learn more about the job opportunity from Nicolas Obias",
        semester:"Fall 2023",
        date:"11/08/2024",
        EventImg:EventImages.AECF_img,
        post_link:"",
    },
]

const eventData = { Program_Data, Past_Event, Current_Event };

export default eventData;