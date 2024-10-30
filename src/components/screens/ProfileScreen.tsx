import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { UserProfile } from "../../types";
import { ProfileDetails } from "../profile/ProfileDetails";
import { ProfileForm } from "../profile/ProfileForm";

export function ProfileScreen() {
    const [isEditing, setIsEditing] = React.useState(false);
    const [profile, setProfile] = React.useState<UserProfile>({
        id: "1",
        name: "John Doe",
        photo: "res://profile_placeholder",
        bio: "Passionate about connecting families",
        email: "john.doe@example.com",
        phone: "+1234567890",
        isVerified: true,
        privacySettings: {
            shareLocation: true,
            shareProfile: "family",
            allowMessages: true,
        },
    });

    const handleUpdateProfile = (updatedProfile: UserProfile) => {
        setProfile(updatedProfile);
        setIsEditing(false);
        // TODO: Save to backend
    };

    const handleUpdatePrivacy = (settings: UserProfile['privacySettings']) => {
        setProfile(prev => ({
            ...prev,
            privacySettings: settings,
        }));
        // TODO: Save to backend
    };

    return (
        <gridLayout style={styles.container}>
            {isEditing ? (
                <ProfileForm
                    profile={profile}
                    onSave={handleUpdateProfile}
                    onCancel={() => setIsEditing(false)}
                />
            ) : (
                <ProfileDetails
                    profile={profile}
                    onEdit={() => setIsEditing(true)}
                    onUpdatePrivacy={handleUpdatePrivacy}
                />
            )}
        </gridLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
    },
});