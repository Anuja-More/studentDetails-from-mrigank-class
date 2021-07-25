import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
const Studentlist = ({ students, onClick, onChange }) => {
  return (
    <>
      <div>
        <input
          type="text"
          name="search"
          placeholder="search..."
          onChange={onChange}
        ></input>
        <List component="nav" aria-label="main mailbox folders">
          <div className="student-list">
            {students.map((students, index) => (
              <ListItem button onClick={() => onClick(index)} key={students.id}>
                <ListItemIcon>
                  <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText primary={students.name} />
              </ListItem>
            ))}
          </div>
        </List>
      </div>
    </>
  );
};
export default Studentlist;
