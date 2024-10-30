import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { AdvancedSearch } from "../search/AdvancedSearch";
import { FamilyMember } from "../../types";

export function SearchScreen() {
    const [searchResults, setSearchResults] = React.useState<FamilyMember[]>([]);
    const [showAdvanced, setShowAdvanced] = React.useState(false);

    const handleSearch = (filters: any) => {
        // Implement search logic here
        console.log("Searching with filters:", filters);
        // Mock results
        setSearchResults([
            {
                id: "2",
                name: "Jane Smith",
                photo: "res://profile_placeholder",
                bio: "Looking to connect with family",
                relationship: "Cousin",
                email: "jane.smith@example.com",
                isVerified: true,
                isLocationShared: true,
                connectionStatus: "pending",
                privacySettings: {
                    shareLocation: true,
                    shareProfile: "public",
                    allowMessages: true,
                },
            },
        ]);
    };

    return (
        <stackLayout style={styles.container}>
            <gridLayout rows="auto, auto, *">
                <searchBar
                    row={0}
                    hint="Search family members..."
                    onSubmit={(args) => handleSearch({ name: args.object.text })}
                    style={styles.searchBar}
                />
                
                <button
                    row={1}
                    className="text-blue-600 m-2"
                    onTap={() => setShowAdvanced(!showAdvanced)}
                    text={showAdvanced ? "Simple Search" : "Advanced Search"}
                />

                {showAdvanced ? (
                    <AdvancedSearch row={2} onSearch={handleSearch} />
                ) : (
                    <listView
                        row={2}
                        items={searchResults}
                        itemTemplate={(item) => (
                            <gridLayout columns="auto, *" rows="auto, auto" padding={10}>
                                <image
                                    src={item.photo}
                                    width={50}
                                    height={50}
                                    row={0}
                                    rowSpan={2}
                                    col={0}
                                    className="rounded-full"
                                />
                                <stackLayout row={0} col={1} marginLeft={10}>
                                    <label text={item.name} className="font-bold" />
                                    {item.isVerified && (
                                        <label text="✓ Verified" className="text-green-600 text-sm" />
                                    )}
                                </stackLayout>
                                <label
                                    text={item.relationship}
                                    className="text-gray-600"
                                    row={1}
                                    col={1}
                                    marginLeft={10}
                                />
                            </gridLayout>
                        )}
                    />
                )}
            </gridLayout>
        </stackLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
    },
    searchBar: {
        margin: 10,
    },
});