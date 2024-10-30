import * as React from "react";
import { FamilyMap } from "../map/FamilyMap";
import { FamilyMember } from "../../types";

export function MapScreen() {
  const [members] = React.useState<FamilyMember[]>([
    {
      id: "1",
      name: "Jane Doe",
      photo: "res://profile_placeholder",
      bio: "Sister",
      relationship: "Sister",
      isLocationShared: true,
      email: "jane@example.com",
      isVerified: true,
      connectionStatus: "connected",
      privacySettings: {
        shareLocation: true,
        shareProfile: "family",
        allowMessages: true,
      },
      location: {
        latitude: 37.7749,
        longitude: -122.4194,
        lastUpdated: new Date(),
      },
    },
    // Add more family members here
  ]);

  return (
    <FamilyMap
      members={members}
      onMemberSelect={(member) => {
        console.log("Selected member:", member.name);
      }}
    />
  );
}