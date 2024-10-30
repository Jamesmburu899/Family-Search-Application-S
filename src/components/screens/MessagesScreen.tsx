import * as React from "react";
import { ChatList } from "../messaging/ChatList";
import { Message, FamilyMember } from "../../types";

export function MessagesScreen({ navigation }: { navigation: any }) {
  const [chats] = React.useState([
    {
      member: {
        id: "1",
        name: "Jane Doe",
        photo: "res://profile_placeholder",
        relationship: "Sister",
        bio: "",
        email: "jane@example.com",
        isVerified: true,
        isLocationShared: true,
        connectionStatus: "connected",
        privacySettings: {
          shareLocation: true,
          shareProfile: "family",
          allowMessages: true,
        },
      } as FamilyMember,
      lastMessage: {
        id: "msg1",
        senderId: "1",
        receiverId: "current-user",
        content: "Hey, how are you?",
        timestamp: new Date(),
        status: "delivered",
      } as Message,
      unreadCount: 2,
    },
  ]);

  return (
    <ChatList
      chats={chats}
      onChatSelect={(memberId) => {
        console.log("Opening chat with:", memberId);
      }}
    />
  );
}