import EventImages from './logo_img';

const Program_Data =[
    {
        title: 'Sisterhood',
        description: 'Sisterhood is the foundation of our organization. The Sisterhood program is designed for WiC members to form companionship and to encourage members to be active. Our Sisterhood provides mentorship through social and professional development events throughout the semester. These events ensure that our members maintain an optimal balance of academic and social life, all while fostering lasting friendships and supportive bonds.1',
        images : EventImages.sample,
    },
    {
        title: 'Workshop',
        description: 'Our workshop series are aimed towards providing technical skills and hands-on experience with topics outside of the school curriculum, such as command line mastery, source control collaboration, resume review, and in-demand technologies.',
        images : EventImages.sample,
    },
    {
        title: 'Professional Development',
        description: 'Students have opportunities to experience the day-to-day of working engineers and the work culture of their company. This provides a better understanding of their values in a more personal setting. Office Space tours complements classroom education by giving first-hand exposure to companies.',
        images : EventImages.sample,
    }
];

const Current_Event = [
    {
        img:"https://picsum.photos/200/300",
        alt:"img1"
    },
    {
        img:"https://picsum.photos/200/300",
        alt:"img2"
    },
    {
        img:"https://picsum.photos/200/300",
        alt:"img3"
    },
]

export default {EventData: Program_Data, Current_Event};