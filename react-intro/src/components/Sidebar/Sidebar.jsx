import { Link } from 'react-router-dom';
import React from 'react';
import { FaHome } from 'react-icons/fa';
import { MdCreateNewFolder, MdFavorite } from 'react-icons/md';
import { SidebarWrapper } from './styled';

const Sidebar = () => (
    <SidebarWrapper>
      <nav>
        <ul>
          <li><Link style={{ color: 'white' }} to='/QuizMain/'><FaHome /> Homepage</Link></li>
          <li><Link style={{ color: 'white' }} to='/QuizMain/create'><MdCreateNewFolder /> Add New Quiz</Link></li>
          <li><Link style={{ color: 'white' }} to='/QuizMain/favorite'><MdFavorite /> Favorite Quizs</Link></li>
        </ul>
      </nav>
    </SidebarWrapper>
);

export default Sidebar;
