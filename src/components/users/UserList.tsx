import * as React from "react";
import { StyleSheet } from "react-nativescript";

interface User {
  name: string;
  location: string;
  email: string;
}

interface UserListProps {
  users: User[];
  onUserSelect?: (user: User) => void;
}

export function UserList({ users, onUserSelect }: UserListProps) {
  return (
    <listView
      items={users}
      itemTemplate={(user) => (
        <gridLayout
          columns="*, auto"
          rows="auto, auto"
          className="p-4 border-b border-gray-200"
          onTap={() => onUserSelect?.(user)}
        >
          <label text={user.name} row={0} col={0} className="font-bold" />
          <label text={user.location} row={0} col={1} className="text-gray-600" />
          <label text={user.email} row={1} col={0} colSpan={2} className="text-gray-500" />
        </gridLayout>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});