export interface UserProfile {
  id: string;
  name: string;
  photo: string;
  bio: string;
  email: string;
  phone?: string;
  isVerified: boolean;
  privacySettings: {
    shareLocation: boolean;
    shareProfile: 'public' | 'family' | 'private';
    allowMessages: boolean;
  };
  location?: {
    latitude: number;
    longitude: number;
    lastUpdated: Date;
  };
}

export interface FamilyMember extends UserProfile {
  relationship: string;
  isLocationShared: boolean;
  connectionStatus: 'pending' | 'connected' | 'blocked';
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: Date;
  status: 'sent' | 'delivered' | 'read';
}

export interface FamilyTree {
  id: string;
  members: FamilyMember[];
  relationships: {
    from: string;
    to: string;
    type: string;
  }[];
}

export interface Notification {
  id: string;
  userId: string;
  type: 'message' | 'location' | 'connection' | 'verification';
  content: string;
  timestamp: Date;
  isRead: boolean;
  data?: any;
}