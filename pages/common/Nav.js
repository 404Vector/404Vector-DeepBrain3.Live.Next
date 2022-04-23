import React,{useState, useEffect} from 'react'
import styles from "./styles/Nav.module.css";
import Link from "next/link";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import tableStyles from "../common/styles/table.module.css"
import MenuItem from '@mui/material/MenuItem';

export default function Nav(){
  const basicUrls = ["/basic/counter","/basic/calc","/basic/bmi"]
  const basicSubTitle = ["카운터","계산기","BMI"]
  const userUrls = ["/user/join","/user/login","/user/logout","/user/profile","/user/modifyUser","/user/withdrawUser","user/getUsers"]
  const userSubTitle = ["회원가입","로그인","로그아웃","프로필","회원수정","회원탈퇴","회원목록"]
  return (
    <table className={tableStyles.table}>
      <tbody>
        <tr>
            <td>
              <SubMenu title={"기본"} urls={basicUrls} subTitles={basicSubTitle}/>
              <SubMenu title={"사용자"} urls={userUrls} subTitles={userSubTitle}/>
            </td>
        </tr>
      </tbody>
    </table>
  );
}
const SubMenu = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return <><Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {props.title}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
         {props.urls.map(function(url, i){
            return <MenuItem onClick={handleClose} key={i}><Link href={url} >{props.subTitles[i]}</Link></MenuItem>
          })}
      </Menu></>
}
