import { useState } from "react";
import { AddContact } from "./AddContact";
import { ContactCard } from "./ContactCard";

export const ContactList = () => {
  const initState = [
    {
      id: 1,
      first_name: "malik",
      gmail: "malik@gmail.com",
      phone: "123456789",
    },
    {
      id: 2,
      first_name: "yadulla",
      gmail: "yadulla@gmail.com",
      phone: "8786524157",
    },
    {
      id: 3,
      first_name: "ramu",
      gmail: "ramu@gmail.com",
      phone: "98481651649",
    },
    {
      id: 4,
      first_name: "dhana",
      gmail: "dhana@gmail.com",
      phone: "6116387498",
    },
    {
      id: 5,
      first_name: "abc",
      gmail: "abc@gmail.com",
      phone: "98481616",
    },
  ];
  const [contactList, setContactList] = useState(initState);
  //   const handleClick = (name, gmail, phone) => {
  //     setContactList([
  //       ...contactList,
  //       {
  //         id: contactList[contactList.length - 1].id + 1,
  //         first_name: name,
  //         gmail: gmail,
  //         phone: phone,
  //       },
  //     ]);
  //   };
  return (
    <div>
      {/* <AddContact handleClick={handleClick} /> */}
      {contactList.map((e) => (
        <div key={e.id}>
          <ContactCard
            id={e.id}
            name={e.first_name}
            gmail={e.gmail}
            phone={e.phone}
          />
        </div>
      ))}
    </div>
  );
};
