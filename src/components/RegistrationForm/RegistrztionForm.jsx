// доступ до useState
import { useState } from "react";
import Input from "../Input";
import './RegistrationForm.css';
import UserCard from "../UserCard/UserCard";

const RegistrationForm = () => {
	// створення стану для збереження юзерів
	const [users, setUsers] = useState([]);
	// створення станів для збереження і зміни імені, призвіща, імейла юзера
   const [name, setName] = useState();
   const [surname, setSurname] = useState();
   const [email, setEmail] = useState();

	// функції зміни стану, які викликаються при зміні значень у відповідних полях введення
   const onGetName = (value) => {
      setName(value);
   }
   const onGetSurname = (value) => {
      setSurname(value);
   }
   const onGetEmail = (value) =>{
      setEmail(value);
   }
   const onAddUser = () => {
      const user = {
         name,
         surname,
         email,
      }
      setUsers([...users, user]);
      setName('');
      setSurname('');
      setEmail('');
   }
   console.log(users);

   // console.log(name, surname, email);
   return (
      <div className="common">
         <Input 
            label={'Name: '} 
            placeholder={'Enter Your Name'} 
            onChangeFunction={onGetName}
            value={name} />
         <Input 
            label={'Surname: '} 
            placeholder={'Enter Your Surname'}
            onChangeFunction={onGetSurname}
            value={surname} />
         <Input 
            label={'Email: '} 
            placeholder={'Enter Your Email'}
            onChangeFunction={onGetEmail}
            value={email} />
         <button type="button" onClick={onAddUser}>Add User</button>
         <div className="users-list">
            { users.map((user, index) => {
               const { name, surname, email } = user;
               return (<UserCard key={index} name={name} surname={surname} email={email} />)
               // return (<UserCard {...user} />)
					}) }
            </div>
      </div>
   )
}

export default RegistrationForm;;