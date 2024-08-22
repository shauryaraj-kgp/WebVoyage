import { Link } from "react-router-dom";
import arrow from "./images/triangle.png";
import { useState } from "react";

const NavigationBar = () => {
    const [weekIsOpen, setWeekIsOpen] = useState(null);

    const handleWeekOpen = (week) => {
        if (weekIsOpen === week) {
            setWeekIsOpen(null);
        } else {
            setWeekIsOpen(week);
        }
    };


    return (
        <div className="navigation-bar">
            <div className="week-header">
                <img src={arrow} alt=">" />
                <button onClick={() => handleWeekOpen(1)}>
                    Week 1: Introduction to Web Development
                </button>
            </div>
            {weekIsOpen === 1 && (
                <div className="days">
                    <Link to="/course/day-1">Day 1</Link>
                    <Link to="/course/day-2">Day 2</Link>
                    <Link to="/course/day-3">Day 3</Link>
                    <Link to="/course/day-4">Day 4</Link>
                    <Link to="/course/day-5">Day 5</Link>
                    <Link to="/course/day-6">Day 6</Link>
                    <Link to="/course/day-7">Day 7</Link>
                </div>
            )}

            <div className="week-header">
                <img src={arrow} alt=">" />
                <button onClick={() => handleWeekOpen(2)}>
                    Week 2: JavaScript Introduction and Basics
                </button>
            </div>
            {weekIsOpen === 2 && (
                <div className="days">
                    <Link to="/course/day-8">Day 8</Link>
                    <Link to="/course/day-9">Day 9</Link>
                    <Link to="/course/day-10">Day 10</Link>
                    <Link to="/course/day-11">Day 11</Link>
                    <Link to="/course/day-12">Day 12</Link>
                    <Link to="/course/day-13">Day 13</Link>
                    <Link to="/course/day-14">Day 14</Link>
                </div>
            )}

            <div className="week-header">
                <img src={arrow} alt=">" />
                <button onClick={() => handleWeekOpen(3)}>
                    Week 3: Advanced JavaScript and Frontend Frameworks
                </button>
            </div>
            {weekIsOpen === 3 && (
                <div className="days">
                    <Link to="/course/day-15">Day 15</Link>
                    <Link to="/course/day-16">Day 16</Link>
                    <Link to="/course/day-17">Day 17</Link>
                    <Link to="/course/day-18">Day 18</Link>
                    <Link to="/course/day-19">Day 19</Link>
                    <Link to="/course/day-20">Day 20</Link>
                    <Link to="/course/day-21">Day 21</Link>
                </div>
            )}
        </div>
    );
};

export default NavigationBar;
