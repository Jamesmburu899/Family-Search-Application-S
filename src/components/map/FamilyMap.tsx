import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FamilyMember } from "../../types";

interface FamilyMapProps {
  members: FamilyMember[];
  onMemberSelect: (member: FamilyMember) => void;
}

export function FamilyMap({ members, onMemberSelect }: FamilyMapProps) {
  return (
    <gridLayout rows="*, auto">
      <mapView
        row={0}
        latitude={37.7749}
        longitude={-122.4194}
        zoom={12}
        style={styles.map}
      >
        {members.map((member) =>
          member.location && (
            <marker
              key={member.id}
              latitude={member.location.latitude}
              longitude={member.location.longitude}
              title={member.name}
              snippet={member.relationship}
              onTap={() => onMemberSelect(member)}
            />
          )
        )}
      </mapView>

      <stackLayout row={1} style={styles.legend}>
        <label className="text-lg font-bold">Family Members Nearby</label>
        <listView
          items={members.filter((m) => m.location)}
          itemTemplate={(item) => (
            <gridLayout columns="auto, *" className="p-2">
              <image
                src={item.photo}
                width={40}
                height={40}
                className="rounded-full"
                col={0}
              />
              <stackLayout col={1} className="ml-2">
                <label text={item.name} className="font-bold" />
                <label text={item.relationship} className="text-gray-600" />
              </stackLayout>
            </gridLayout>
          )}
        />
      </stackLayout>
    </gridLayout>
  );
}

const styles = StyleSheet.create({
  map: {
    height: "100%",
  },
  legend: {
    backgroundColor: "white",
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: "#e5e5e5",
  },
});