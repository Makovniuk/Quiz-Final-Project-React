import { Link } from 'react-router-dom';
import React from 'react';
import { FaHome, FaSearch } from 'react-icons/fa';
import { MdCreateNewFolder, MdFavorite } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { SidebarWrapper } from './styled';
import actions from '../../store/services/quizs/actions';

const Sidebar = () => {
  const { filter } = useSelector((state) => state.quizsReducer);
  const dispatch = useDispatch();

  const handleChangeFilter = (e) => {
    console.log(e.target.value);
    dispatch(actions.filterAction(e.target.value));
  };

  return (
    <SidebarWrapper>
      <nav>
        <ul>
          <li><Link style={{ color: 'white' }} to='/QuizMain/'><FaHome /> Homepage</Link></li>
          <li><Link style={{ color: 'white' }} to='/QuizMain/create'><MdCreateNewFolder /> Add New Quiz</Link></li>
          <li><Link style={{ color: 'white' }} to='/QuizMain/favorite'><MdFavorite /> Favorite Quizs</Link></li>
          <li>
            <FaSearch style={{ color: 'white' }} />
            <input
              style={{ marginLeft: '7px', width: '140px', height: '28px' }}
              placeholder='Enter name quiz...'
              value={filter}
              onChange={handleChangeFilter}
            />
          </li>
        </ul>
      </nav>
    </SidebarWrapper>
  );
};

export default Sidebar;
