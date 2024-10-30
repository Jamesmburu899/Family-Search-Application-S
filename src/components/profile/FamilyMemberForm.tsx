import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FamilyMember } from "../../types";

interface FamilyMemberFormProps {
  member?: Partial<FamilyMember>;
  onSave: (member: Partial<FamilyMember>) => void;
  onCancel: () => void;
}

export function FamilyMemberForm({ member, onSave, onCancel }: FamilyMemberFormProps) {
  const [formData, setFormData] = React.useState<Partial<FamilyMember>>(
    member || {
      name: "",
      relationship: "",
      bio: "",
      email: "",
      phone: "",
      isLocationShared: false,
    }
  );

  const relationships = [
    "Parent",
    "Child",
    "Sibling",
    "Grandparent",
    "Grandchild",
    "Aunt/Uncle",
    "Niece/Nephew",
    "Cousin",
    "Other"
  ];

  return (
    <scrollView>
      <stackLayout style={styles.container}>
        <label className="text-xl font-bold mb-4">
          {member ? "Edit Family Member" : "Add Family Member"}
        </label>

        <textField
          hint="Full Name"
          text={formData.name}
          onTextChange={(args) =>
            setFormData((prev) => ({ ...prev, name: args.value }))
          }
          className="input mb-4"
        />

        <dropDown
          items={relationships}
          selectedIndex={relationships.indexOf(formData.relationship || "")}
          hint="Select Relationship"
          onSelectedIndexChanged={(args) =>
            setFormData((prev) => ({
              ...prev,
              relationship: relationships[args.newIndex],
            }))
          }
          className="mb-4"
        />

        <textField
          hint="Email"
          text={formData.email}
          keyboardType="email"
          onTextChange={(args) =>
            setFormData((prev) => ({ ...prev, email: args.value }))
          }
          className="input mb-4"
        />

        <textField
          hint="Phone (Optional)"
          text={formData.phone}
          keyboardType="phone"
          onTextChange={(args) =>
            setFormData((prev) => ({ ...prev, phone: args.value }))
          }
          className="input mb-4"
        />

        <textView
          hint="Bio"
          text={formData.bio}
          onTextChange={(args) =>
            setFormData((prev) => ({ ...prev, bio: args.value }))
          }
          className="input mb-4"
        />

        <gridLayout columns="auto, *" className="mb-6">
          <label text="Share Location" col={0} />
          <switch
            col={1}
            checked={formData.isLocationShared}
            onCheckedChange={(args) =>
              setFormData((prev) => ({
                ...prev,
                isLocationShared: args.value,
              }))
            }
          />
        </gridLayout>

        <button
          className="btn btn-primary mb-2"
          onTap={() => onSave(formData)}
        >
          Save
        </button>

        <button
          className="btn btn-secondary"
          onTap={onCancel}
        >
          Cancel
        </button>
      </stackLayout>
    </scrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});