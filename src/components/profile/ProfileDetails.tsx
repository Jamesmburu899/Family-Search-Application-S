import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { UserProfile } from "../../types";
import { PrivacySettings } from "../privacy/PrivacySettings";

interface ProfileDetailsProps {
  profile: UserProfile;
  onEdit: () => void;
  onUpdatePrivacy: (settings: UserProfile['privacySettings']) => void;
}

export function ProfileDetails({ profile, onEdit, onUpdatePrivacy }: ProfileDetailsProps) {
  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString();
  };

  return (
    <scrollView>
      <stackLayout style={styles.container}>
        <image
          src={profile.photo || "res://profile_placeholder"}
          className="profile-image mb-4"
        />
        
        <label className="text-2xl font-bold text-center mb-2">
          {profile.name}
        </label>
        
        {profile.isVerified && (
          <label className="text-green-600 text-sm mb-4">
            ✓ Verified Account
          </label>
        )}

        <button
          className="btn btn-primary mb-6"
          onTap={onEdit}
        >
          Edit Profile
        </button>

        <gridLayout columns="auto, *" rows="auto, auto, auto" className="w-full mb-6">
          <label text="Email:" col={0} row={0} className="font-medium" />
          <label text={profile.email} col={1} row={0} className="ml-2" />

          {profile.phone && (
            <>
              <label text="Phone:" col={0} row={1} className="font-medium" />
              <label text={profile.phone} col={1} row={1} className="ml-2" />
            </>
          )}

          <label text="Bio:" col={0} row={2} className="font-medium" />
          <label text={profile.bio} col={1} row={2} className="ml-2" textWrap={true} />
        </gridLayout>

        <PrivacySettings
          settings={profile.privacySettings}
          onUpdate={onUpdatePrivacy}
        />
      </stackLayout>
    </scrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    alignItems: "center",
  },
});