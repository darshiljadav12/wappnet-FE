import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import AddIcon from "@mui/icons-material/Add";
import IconButton from "@mui/material/IconButton";
import { FC } from "react";

import S from "./styled";
import { ContactProps } from "./interfaces";
import { Contact } from "../../../../api";

export const ContactList: FC<ContactProps> = ({ contacts }) => {
  // TODO: Move to transfom of query to transform data
  const groupContactsByInitial = () => {
    const groupedContacts: { [key: string]: Contact[] } = {};

    contacts.forEach((contact) => {
      const initial = contact.name.charAt(0).toUpperCase();
      if (!groupedContacts[initial]) {
        groupedContacts[initial] = [];
      }
      groupedContacts[initial].push(contact);
    });

    return groupedContacts;
  };

  const groupedContacts = groupContactsByInitial();

  return Object.keys(groupedContacts)
    .sort()
    .map((initial) => (
      <Box key={initial} sx={{ marginBottom: 2 }}>
        <Typography variant="h5" py={1} gutterBottom>
          {initial}
        </Typography>
        <Box>
          {groupedContacts[initial].map((contact) => (
            <S.ContactContainer
              sx={{ justifyContent: "space-between" }}
              key={contact._id}
            >
              <S.ContactContainer>
                <Avatar src={contact.avatar} alt={contact.name} />

                <Box>
                  <Typography>{contact.name}</Typography>
                  <Typography>{contact.number}</Typography>
                </Box>
              </S.ContactContainer>

              <S.ContactContainer sx={{ justifyContent: "end" }}>
                {/* TODO: ADD TAGS HERE */}
                <IconButton>
                  <AddIcon />
                </IconButton>
              </S.ContactContainer>
            </S.ContactContainer>
          ))}
        </Box>
      </Box>
    ));
};
