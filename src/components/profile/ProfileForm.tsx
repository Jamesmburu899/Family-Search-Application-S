import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { UserProfile } from "../../types";

interface ProfileFormProps {
  profile: UserProfile;
  onSave: (profile: UserProfile) => void;
}

export function ProfileForm({ profile, onSave }: ProfileFormProps) {
  const [editedProfile, setEditedProfile] = React.useState(profile);

  return (
    <scrollView>
      <stackLayout style={styles.form}>
        <label className="text-lg font-bold">Personal Information</label>
        
        <textField
          hint="Full Name"
          text={editedProfile.name}
          onTextChange={(args) => 
            setEditedProfile(prev => ({ ...prev, name: args.value }))
          }
          className="input"
        />

        <textField
          hint="Email"
          text={editedProfile.email}
          keyboardType="email"
          onTextChange={(args) =>
            setEditedProfile(prev => ({ ...prev, email: args.value }))
          }
          className="input"
        />

        <textField
          hint="Phone (optional)"
          text={editedProfile.phone || ""}
          keyboardType="phone"
          onTextChange={(args) =>
            setEditedProfile(prev => ({ ...prev, phone: args.value }))
          }
          className="input"
        />

        <textView
          hint="Bio"
          text={editedProfile.bio}
          onTextChange={(args) =>
            setEditedProfile(prev => ({ ...prev, bio: args.value }))
          }
          className="input"
        />

        <button
          className="btn btn-primary"
          onTap={() => onSave(editedProfile)}
        >
          Save Profile
        </button>
      </stackLayout>
    </scrollView>
  );
}

const styles = StyleSheet.create({
  form: {
    padding: 16,
    spacing: 16,
  },
});