import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FamilyTree as FamilyTreeType, FamilyMember } from "../../types";

interface FamilyTreeProps {
  familyTree: FamilyTreeType;
  onMemberPress: (member: FamilyMember) => void;
}

export function FamilyTree({ familyTree, onMemberPress }: FamilyTreeProps) {
  return (
    <scrollView>
      <gridLayout rows="auto, *" style={styles.container}>
        <label row={0} className="text-xl font-bold mb-4">Family Tree</label>
        
        <stackLayout row={1}>
          {familyTree.members.map((member) => (
            <gridLayout
              key={member.id}
              columns="auto, *"
              className="p-4 border-b border-gray-200"
              onTap={() => onMemberPress(member)}
            >
              <image
                col={0}
                src={member.photo}
                className="rounded-full"
                width={50}
                height={50}
              />
              <stackLayout col={1} className="ml-3">
                <label text={member.name} className="font-bold" />
                <label text={member.relationship} className="text-gray-600" />
                {member.isVerified && (
                  <label text="✓ Verified" className="text-green-600 text-sm" />
                )}
              </stackLayout>
            </gridLayout>
          ))}
        </stackLayout>
      </gridLayout>
    </scrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});