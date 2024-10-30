import * as React from "react";
import { StyleSheet } from "react-nativescript";

interface User {
  name: string;
  location: string;
  email: string;
}

interface UserFormProps {
  onSubmit: (user: User) => void;
}

export function UserForm({ onSubmit }: UserFormProps) {
  const [user, setUser] = React.useState<User>({
    name: "",
    location: "",
    email: "",
  });

  const handleSubmit = () => {
    if (!user.name || !user.location || !user.email) {
      alert("Please fill in all fields");
      return;
    }
    onSubmit(user);
    setUser({ name: "", location: "", email: "" });
  };

  return (
    <stackLayout style={styles.container}>
      <label className="text-xl font-bold mb-4">Add New User</label>
      
      <textField
        hint="Full Name"
        text={user.name}
        onTextChange={(args) => setUser(prev => ({ ...prev, name: args.value }))}
        className="input mb-4"
      />

      <textField
        hint="Location"
        text={user.location}
        onTextChange={(args) => setUser(prev => ({ ...prev, location: args.value }))}
        className="input mb-4"
      />

      <textField
        hint="Email"
        text={user.email}
        keyboardType="email"
        onTextChange={(args) => setUser(prev => ({ ...prev, email: args.value }))}
        className="input mb-4"
      />

      <button
        className="btn btn-primary"
        onTap={handleSubmit}
      >
        Add User
      </button>
    </stackLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});