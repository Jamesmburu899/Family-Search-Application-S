import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { Message, FamilyMember } from "../../types";

interface ChatListProps {
  chats: {
    member: FamilyMember;
    lastMessage: Message;
    unreadCount: number;
  }[];
  onChatSelect: (memberId: string) => void;
}

export function ChatList({ chats, onChatSelect }: ChatListProps) {
  return (
    <listView
      items={chats}
      itemTemplate={(chat) => (
        <gridLayout
          columns="auto, *, auto"
          rows="auto, auto"
          className="p-4 border-b border-gray-200"
          onTap={() => onChatSelect(chat.member.id)}
        >
          <image
            src={chat.member.photo}
            className="rounded-full"
            width={50}
            height={50}
            row={0}
            rowSpan={2}
            col={0}
          />
          
          <stackLayout row={0} col={1} className="ml-3">
            <label text={chat.member.name} className="font-bold" />
            <label text={chat.member.relationship} className="text-sm text-gray-600" />
          </stackLayout>

          <stackLayout row={0} col={2} className="text-right">
            <label
              text={new Date(chat.lastMessage.timestamp).toLocaleTimeString()}
              className="text-sm text-gray-500"
            />
            {chat.unreadCount > 0 && (
              <label
                text={chat.unreadCount.toString()}
                className="bg-blue-500 text-white rounded-full px-2 py-1 text-xs"
              />
            )}
          </stackLayout>

          <label
            row={1}
            col={1}
            colSpan={2}
            text={chat.lastMessage.content}
            className="text-gray-600 truncate ml-3"
          />
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