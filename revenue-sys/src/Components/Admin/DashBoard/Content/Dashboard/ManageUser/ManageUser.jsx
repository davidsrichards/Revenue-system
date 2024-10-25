import './ManageUser.css'
import React from 'react';
import dave from '../../../../../../assets/Images/dave.jpg'
import GlobalUsers from '../../../../GlobalComponent/GlobalUsers';

const ManageUser = ({ user }) => {
  return (
    <div className='grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-3 gap-4'>
      <GlobalUsers image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStnAaOdIKWQOa520mbzX3iHbPpWv1aGqgBIQ&s"}/>
      <GlobalUsers image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6tyy0YuymbU_YvXUrrj1KYSao-wxYTkyYZQ&s"}/>
      <GlobalUsers image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5ttcdiO_av-BuiH2nu38mTU1lovTFO5hfPg&s"}/>
      <GlobalUsers image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmkYmQubCsK8wbT-xNGjm-AvSLRVPCNjDoAg&s"}/>
      <GlobalUsers image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-o-H_CceVSV9HC2sr4Sb65wO-CozY-3XP8g&s"}/>
      <GlobalUsers image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReWWpHAsx_WSYtq9gfRu0KLn8iro9hpT9ytA&s"}/>
      <GlobalUsers image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM5Yuua8MyZLFy5QBk_XPMTWSSfRzz0MahKw&s"}/>
      <GlobalUsers image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQapXGtSIhXgvtVMVOuY9mEbvETKHgajabZPQ&s"}/>
      <GlobalUsers image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXaIqCaY7DeLOPkfWGYq4H2J9LBsZspNVCBQ&s"}/>
      <GlobalUsers image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMwr2skS4xgPlxJW6QWLkk0fGYZQjvIT2RQA&s"}/>
      <GlobalUsers image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe-gaLd8F8uymdKlBy5bfHbT3scja9iMTdQQ&s"}/>
      <GlobalUsers image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoSz3KsuXsoJtIOiOpLCJHktiDQZ03pXQvqg&s"}/>
    </div>
  );
};

export default ManageUser;
