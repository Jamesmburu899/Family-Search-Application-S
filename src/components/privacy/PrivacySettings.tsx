import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { UserProfile } from "../../types";

interface PrivacySettingsProps {
  settings: UserProfile['privacySettings'];
  onUpdate: (settings: UserProfile['privacySettings']) => void;
}

export function PrivacySettings({ settings, onUpdate }: PrivacySettingsProps) {
  return (
    <stackLayout style={styles.container}>
      <label className="text-lg font-bold mb-4">Privacy Settings</label>

      <gridLayout rows="auto, auto, auto" columns="*, auto" className="mb-4">
        <label text="Share Location" row={0} col={0} />
        <switch
          checked={settings.shareLocation}
          onCheckedChange={(args) =>
            onUpdate({
              ...settings,
              shareLocation: args.value,
            })
          }
          row={0}
          col={1}
        />

        <label text="Profile Visibility" row={1} col={0} />
        <dropDown
          items={['public', 'family', 'private']}
          selectedIndex={['public', 'family', 'private'].indexOf(settings.shareProfile)}
          onSelectedIndexChanged={(args) =>
            onUpdate({
              ...settings,
              shareProfile: ['public', 'family', 'private'][args.newIndex] as any,
            })
          }
          row={1}
          col={1}
        />

        <label text="Allow Messages" row={2} col={0} />
        <switch
          checked={settings.allowMessages}
          onCheckedChange={(args) =>
            onUpdate({
              ...settings,
              allowMessages: args.value,
            })
          }
          row={2}
          col={1}
        />
      </gridLayout>
    </stackLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
});