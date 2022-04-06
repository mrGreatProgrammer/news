import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ErrMsg from "../../components/ui/ErrMsg/ErrMsg";
import Input from "../../components/ui/Input/Input";
import { useCreatBlogMutation } from "../../store/reducers/blogs-slice";
import { chooseRoles, sendMeEmail } from "../../store/reducers/user-actions";
import "./Settings.css";

const Settings = () => {
  const [first, setFirst] = useState('');
  const [second, setSecond] = useState('');
  const [sendEmail, setSendEmail] = useState('');
  const [title, setTitle] = useState('');
  const [txt, setTxt] = useState('');
  const currentUser = useSelector((state) => state.user.currentUser);
  const err = useSelector((state) => state.user.error);
  const loading = useSelector(state=>state.user.isLoading);
  const [role, setRole] = useState(currentUser.userType);
  const dispatch = useDispatch();
  const [creatBlog, { isLoading }] = useCreatBlogMutation()

  function onChooseRoles(e) {
    const accRole = e;
    setRole(accRole);
    dispatch(chooseRoles({id: currentUser.id, userType: accRole}))
  }
function onSendMeEmail() {
    dispatch(sendMeEmail({mail: sendEmail}))
}
function onCreateBlog() {
  creatBlog({title, txt})
}


  return (
    <div className="settings">
      {err && <ErrMsg txt={err} />}
      <div className="setting__account">
        <div className="change__name">
          <div className="chande__first_name">
            <Input placeholder={"Change first name"} inpType="text" value={first} onChange={setFirst} />
            <button className='change_btn' >change</button>
          </div>
          <div className="change__second_name">
            <Input disabled={true } placeholder="Change second name" inpType="text" value={second} onChange={setSecond} />
            <button disabled className='change_btn' >change</button>
          </div>
        </div>
        <div className="change__password">
          <Input placeholder='Email' inpType="text" className="change__password--inp" value={sendEmail} onChange={setSendEmail} />
          <button className='send_email--btn' onClick={onSendMeEmail} >send me email</button>
        </div>
        <div className="change__user_type">
            <select disabled={loading?(true):(false)} name="" id='' value={role} onChange={(e)=>onChooseRoles(e.target.value)}>
              <option value='user' id="choose_user">user</option>
              <option value='spider man' id="choose_spider-man">spider man</option>
              <option value='special account' id="choose_special_acc">special account</option>
              <option value='modarator' id="choose_modarator">modarator</option>
            </select>
        </div>
        {currentUser.userType === "modarator" ? (
          <div className="create__blog">
            <Input
              className="create__blog--title"
              inpType="text"
              placeholder="Title blog"
              value={title}
              onChange={setTitle}
            />
            <Input
              className="create__blog--txt"
              inpType="text"
              placeholder="Text blog"
              value={txt}
              onChange={setTxt}
            />
            <button onClick={onCreateBlog} className='create_btn'>create new blog</button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Settings;
