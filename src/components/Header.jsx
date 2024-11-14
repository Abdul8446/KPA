import React from 'react';

const Header = () => (
    <header className="bg-[#003A2E] text-[#E9E3D4] py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
            <div className="text-xl font-bold">Kingpins Demo</div>
            <div className="flex gap-4 items-center">
                <button className="hover:bg-[#BB914A] py-2 px-4 rounded transition">All Courses</button>
                <input
                    type="search"
                    placeholder="Search courses or instructors"
                    className="bg-[#E9E3D4] text-[#003A2E] py-2 px-4 rounded"
                />
            </div>
        </div>
    </header>
);

export default Header;
