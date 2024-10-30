import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { Notification } from "../../types";

interface NotificationCenterProps {
  notifications: Notification[];
  onNotificationPress: (notification: Notification) => void;
  onMarkAsRead: (notificationId: string) => void;
}

export function NotificationCenter({ 
  notifications, 
  onNotificationPress, 
  onMarkAsRead 
}: NotificationCenterProps) {
  return (
    <listView
      items={notifications}
      itemTemplate={(notification) => (
        <gridLayout
          columns="auto, *, auto"
          className={`p-4 ${!notification.isRead ? 'bg-blue-50' : ''}`}
          onTap={() => {
            onNotificationPress(notification);
            onMarkAsRead(notification.id);
          }}
        >
          <label
            col={0}
            className={`text-2xl ${getNotificationIcon(notification.type)}`}
          />
          <stackLayout col={1} className="ml-3">
            <label text={notification.content} className="font-medium" />
            <label
              text={new Date(notification.timestamp).toLocaleString()}
              className="text-sm text-gray-500"
            />
          </stackLayout>
          {!notification.isRead && (
            <label
              col={2}
              text="●"
              className="text-blue-500"
            />
          )}
        </gridLayout>
      )}
    />
  );
}

function getNotificationIcon(type: Notification['type']): string {
  switch (type) {
    case 'message':
      return 'fas fa-envelope';
    case 'location':
      return 'fas fa-map-marker-alt';
    case 'connection':
      return 'fas fa-user-plus';
    case 'verification':
      return 'fas fa-shield-alt';
    default:
      return 'fas fa-bell';
  }
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});