import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { UserForm } from "../users/UserForm";
import { UserList } from "../users/UserList";

interface User {
  name: string;
  location: string;
  email: string;
}

export function UsersScreen() {
  const [users, setUsers] = React.useState<User[]>([]);

  const handleAddUser = (newUser: User) => {
    setUsers(prev => [...prev, newUser]);
  };

  const handleUserSelect = (user: User) => {
    console.log("Selected user:", user);
  };

  return (
    <gridLayout rows="auto, *" style={styles.container}>
      <UserForm row={0} onSubmit={handleAddUser} />
      <UserList row={1} users={users} onUserSelect={handleUserSelect} />
    </gridLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});