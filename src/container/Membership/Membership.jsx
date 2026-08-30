import React from "react";
import "./Membership.css";

import images from "../../constants/logo_img";
import { SubHeading } from '../../components';

const Membership = () =>(
    <section className="club__membership-container flex__center section__padding box__container" id="join">
        <div className="club__membership-card">
            <div className="club__membership-headline">
                <SubHeading title="Become a WIC member" img={images.folder_icon}/>
                <p className="club__membership-description p__fira">
                    Ready to find your people, grow your skills, and enjoy member perks? Start your WIC journey here.
                </p>
            </div>

            <div className="club__membership-actions">
                <a
                    className="custom__button club__membership-link"
                    href="https://linktr.ee/csulbwic"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    START HERE: LINKTREE
                </a>
                <a
                    className="custom__button club__membership-link"
                    href="https://www.instagram.com/p/Db9L-UvCCz5/?img_index=2"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    HOW TO JOIN + MEMBER PERKS
                </a>
            </div>

            <p className="club__membership-caption p__fira">Your next chapter with WIC starts here.</p>
        </div>
    </section>
)

export default Membership;
